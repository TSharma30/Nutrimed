import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const HomePage = ({ isAuthenticated, userName }) => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);
    const section9Ref = useRef(null);
    const section10Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Ensure initial opacity is 0 for all sections
        gsap.set([
            section1Ref.current,
            section2Ref.current,
            section3Ref.current,
            section4Ref.current,
            section5Ref.current,
            section6Ref.current,
            section7Ref.current,
            section8Ref.current,
            section9Ref.current,
            section10Ref.current
        ], { opacity: 0 });

        tl.to(section1Ref.current, {
            opacity: 1,
            y: -50,
            duration: 1,
        });

        tl.to(section2Ref.current, {
            opacity: 1,
            y: -50,
            duration: 1,
        }, '-=0.5');

      
        tl.to(section4Ref.current, {
            opacity: 1,
            y: -30,
            duration: 1,
        });

        tl.to(section5Ref.current, {
            opacity: 1,
            y: -30,
            duration: 1,
        }, '-=0.5');

        tl.to(section6Ref.current, {
            opacity: 1,
            y: -30,
            duration: 1,
        }, '-=0.5');

        tl.to(section3Ref.current, {
            opacity: 1,
            y: -50,
            duration: 1,
        }, '-=0.5');


        tl.to(section7Ref.current, {
            opacity: 1,
            y: -30,
            duration: 1,
        });

        tl.to(section8Ref.current, {
            opacity: 1,
            y: -30,
            duration: 1,
        }, '-=0.5');

        tl.to(section9Ref.current, {
            opacity: 1,
            y: -30,
            duration: 1,
        }, '-=0.5');

        tl.to(section10Ref.current, {
            opacity: 1,
            y: -50,
            duration: 1,
        });

    }, []);

    return (
        <div className="flex flex-col items-start justify-start min-h-screen p-8 mb-2">
            

            {/* Section 1: Your Personalized Path to Health */}
            <section className="text-left mb-20 md:mb-44 mt-12 md:mt-64 w-full h-auto md:h-96 p-8 flex justify-center flex-col section1-content" ref={section1Ref}>
                <h2 className="text-5xl md:text-8xl font-bold mb-4">Your Personalized Path to Health</h2>
                <p className="text-lg md:text-xl mb-8">
                    Tailored Diet Plans for Every Need. Nutrition for Your Unique Health Needs. Just enter your details and discover what to eat, avoid, and why.
                </p>
                <div className="flex flex-col md:flex-row justify-start items-center w-full mb-8">
                    <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg w-full md:w-auto">
                            <Link to="/register" className="text-lg">Get Started</Link>
                        </button>
                    </div>
                    <div className="w-full md:w-1/3">
                        {/* Placeholder for image */}
                        {/* <img src="https://seeklogo.com/images/H/healthy-eating-logo-34FC12AA28-seeklogo.com.png" alt="Image" className="w-96 h-96 ml-72" /> */}
                    </div>
                </div>
            </section>

            {/* Section 2: How We Help You Achieve Your Health Goals */}
            <section className="text-center mt-20 md:mt-24 mb-12 w-full section2-content">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase" ref={section2Ref}>How We Help You Achieve Your Health Goals</h2>
                <div className="flex flex-wrap justify-center items-center w-full mt-8 md:mt-24 space-y-8 md:space-y-0 md:space-x-8">
                    <div className="relative w-full md:w-1/4 h-64 p-6 mb-4 md:mb-0 md:border-r-2 border-gray-300 flex flex-col justify-center items-center" ref={section4Ref}>
                        <img
                            src="../img/personalized.png"
                            alt="Nutrition Plans"
                            className="w-44 h-44 mb-4"
                        />
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Personalized Nutrition Plans</h3>
                        <p className="text-sm md:text-base text-center">
                            Custom diet plans based on your health profile and preferences, detailing what to eat and avoid for optimal health.
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/4 h-64 p-6 mb-4 md:mb-0 md:border-r-2 border-gray-300 flex flex-col justify-center items-center" ref={section5Ref}>
                        <img
                            src="../img/expert.png"
                            alt="Expert Guidance"
                            className="w-44 h-40 mb-4"
                        />
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Expert Guidance Made Simple</h3>
                        <p className="text-sm md:text-base text-center">
                            Expertly curated diet plans explaining what, how much, and why to eat, tailored to your unique dietary needs and choices.
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/4 h-64 p-6 mb-4 md:mb-0 flex flex-col justify-center items-center" ref={section6Ref}>
                        <img
                            src="../img/faq.png"
                            alt="Customized Solutions"
                            className="w-44 h-44 mb-4"
                        />
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Customized Diet Solutions</h3>
                        <p className="text-sm md:text-base text-center">
                            Tailored diet solutions addressing allergies, lifestyle choices, and FAQs, empowering you with personalized nutrition guidance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: How to Begin */}
            <section className="text-center mt-20 md:mt-24 mb-24 md:mb-36 w-full section3-content">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase" ref={section3Ref}>How to Begin</h2>
                <div className="flex flex-wrap justify-center items-center w-full mt-8 md:mt-24 space-y-8 md:space-y-0 md:space-x-8">
                    <div className="relative w-full md:w-1/3 h-64 p-6 mb-4 md:mb-0 /*md:border-r-2*/ border-gray-300 flex flex-col justify-center items-center" ref={section7Ref}>
                        <img
                            src="../img/register.png"
                            alt="Start Journey"
                            className="w-32 h-24 mb-4"
                        />
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Start Your Journey</h3>
                        <p className="text-sm md:text-base text-center">
                            Create your account to receive custom diet plans based on your health profile and preferences.
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/3 h-64 p-6 mb-4 md:mb-0 /*md:border-r-2*/ border-gray-300 flex flex-col justify-center items-center" ref={section8Ref}>
                        <img
                            src="../img/submit.png"
                            alt="Enter Details"
                            className="w-40 h-36 mb-4"
                        />
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Enter Your Details</h3>
                        <p className="text-sm md:text-base text-center">
                            Input your health specifics and dietary preferences to receive expertly curated nutrition advice.
                        </p>
                    </div>
                    <div className="relative w-full md:w-1/3 h-64 p-6 mb-4 md:mb-0 flex flex-col justify-center items-center" ref={section9Ref}>
                        <img
                            src="../img/Dietplan.png"
                            alt="Get Plan"
                            className="w-32 h-40 mb-4"
                        />
                        <h3 className="text-lg md:text-2xl font-bold mb-2">Get Your Plan</h3>
                        <p className="text-sm md:text-base text-center">
                            Receive detailed diet plans outlining what to include, avoid, and why, designed for your optimal health.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: Build a Better Future */}
            <section className="text-center mb-2 w-full " ref={section10Ref}>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Build a Better Future: Start Your Journey with Personalized Nutrition!</h2>
                {isAuthenticated ? (
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg mb-8 section4-button">
                        <Link to="/HealthForm">Begin Now</Link>
                    </button>
                ) : (
                    <Link
                        to="/register"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-center mb-8"
                    >
                        Join Now
                    </Link>
                )}
            </section>
        </div>
    );
};

export default HomePage;
