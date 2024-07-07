// src/pages/AboutPage.jsx
import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[url('/img/bg.jpg')]">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About Us</h2>
            <p className="text-lg md:text-xl mb-4">
                Welcome to Nutrimed! We provide personalized diet plans to help you achieve your health goals.
            </p>
            <p className="text-lg md:text-xl">
               Diet plans tailored to your unique dietary needs and preferences.
            </p>
        </div>
    );
};

export default About;
