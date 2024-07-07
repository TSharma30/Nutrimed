import bcrypt from "bcrypt";
import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import { loginSchema, validateUserInput, emailSchema, newPasswordSchema } from '../utils/validation.js';
import nodemailer from "nodemailer";

const register = async (req, res, next) => {
    try {
        const validatedData = validateUserInput(req.body, loginSchema);

        const existingUser = await User.findOne({ $or: [{ username: validatedData.username }, { email: validatedData.email }] });
        if (existingUser) {
            return next(createError(400, "User already exists"));
        }

        const hash = await bcrypt.hash(validatedData.password, 10);

        const newUser = new User({
            username: validatedData.username,
            email: validatedData.email,
            password: hash,
        });

        await newUser.save();

        res.status(201).send("User created successfully");
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const validatedData = validateUserInput(req.body, loginSchema);

        const user = await User.findOne({ username: validatedData.username });
        if (!user) return next(createError(404, "User not found"));

        const isCorrect = bcrypt.compareSync(validatedData.password, user.password);
        if (!isCorrect) return res.status(404).send("Wrong password");

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: '3h' });

        const { password, ...info } = user._doc;

        res.cookie("accessToken", token, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,  // Required if using HTTPS
        }).status(200).send({ token, ...info });
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
};

const logout = async (req, res) => {
    res
        .clearCookie("accessToken", {
            httpOnly: true,
            sameSite: 'None',
            secure: true  // Required if using HTTPS
        })
        .status(200)
        .send("User has been logged out.");
};

const forget = async (req, res, next) => {
    try {
        const validatedData = validateUserInput(req.body, emailSchema);
        const user = await User.findOne({ email: validatedData.email });

        if (!user) {
            return next(createError(404, "User not found"));
        }

        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'nutrimedwebapp@gmail.com',
                pass: 'Tarun1309s',
            },
        });

        const mailOptions = {
            to: user.email,
            from: 'nutrimedwebapp@gmail.com',
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                   Please click on the following link, or paste this into your browser to complete the process:\n\n
                   http://${req.headers.host}/reset-password/${resetToken}\n\n
                   If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        next(error);
    }
};

const reset = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { newPassword } = validateUserInput(req.body, newPasswordSchema);

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_KEY);
        } catch (err) {
            return next(createError(400, "Invalid or expired token"));
        }

        const user = await User.findById(decoded.id);
        if (!user) {
            return next(createError(404, "User not found"));
        }

        const hash = await bcrypt.hash(newPassword, 10);

        user.password = hash;
        await user.save();

        res.status(200).json({ message: 'Password reset successfully' });
    } catch (error) {
        next(error);
    }
};

export { register, login, logout, forget, reset };
