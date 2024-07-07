import z from 'zod';

const loginSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.string().email().optional(),
});

const emailSchema = loginSchema.pick({ email: true });
const newPasswordSchema = z.object({
    newPassword: loginSchema.shape.password,
});

const validateUserInput = (data, schema) => {
    try {
        return schema.parse(data);
    } catch (error) {
        throw new Error(error.errors);
    }
};

export { loginSchema, validateUserInput,emailSchema, newPasswordSchema };
