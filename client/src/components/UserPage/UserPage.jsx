// UserPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserPage = ({ isAuthenticated, userName, hasDetails, hasPlan }) => {
    // Sample user details (replace with actual user data)
    const userDetails = {
        age: 30,
        gender: 'Male',
        disease: 'Diabetes',
        allergies: 'None',
        country: 'USA',
        dietPreference: 'Non-vegetarian',
        alcohol: 'No',
        smoking: 'No',
    };

    // Sample diet plan data (replace with actual logic to fetch user's plan)
    const dietPlan = {
        id: 1,
        title: "Customized Diet Plan for Diabetes",
        meals: {
            breakfast: ["Oatmeal with berries", "Greek yogurt"],
            lunch: ["Grilled chicken breast", "Quinoa salad"],
            dinner: ["Salmon fillet", "Steamed vegetables"],
        },
    };

    // Function to handle downloading the diet plan (replace with actual logic)
    const downloadPlan = () => {
        // Logic to download the diet plan
        console.log("Downloading diet plan...");
    };

    // Function to handle updating the diet plan
    const updatePlan = () => {
        // Ask user confirmation to update plan
        const confirmUpdate = window.confirm("Do you want to update and generate a new plan?");
        if (confirmUpdate) {
            // Redirect to /diet-plan
            console.log("Redirecting to /diet-plan for update...");
            // history.push('/diet-plan'); // Redirect to /diet-plan
        }
    };

    // Function to handle deleting the diet plan
    const deletePlan = () => {
        // Logic to delete the diet plan
        console.log("Deleting diet plan...");
        // Implement your delete logic here
    };

    return (
        <div className="flex flex-col md:flex-row items-start justify-start min-h-screen p-4 md:p-8 mb-2 bg-[url('/img/bg.jpg')]">
            {/* Left Container - User Details */}
            <div className="w-full md:w-1/3 rounded-lg shadow-md p-4 md:p-8 mb-4 md:mb-0"
                 style={{
                     background: 'radial-gradient( circle ,#bde0fe, #64dfdf)',
                 }}>
                <p className="text-lg md:text-xl text-white mb-4">Welcome to Nutrimed, {userName}</p>
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">Tailored Diets for Your Unique Health</h2>

                {hasDetails && (
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-4 text-white">My Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Age:</p>
                                <p>{userDetails.age}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Gender:</p>
                                <p>{userDetails.gender}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Disease:</p>
                                <p>{userDetails.disease}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Allergies:</p>
                                <p>{userDetails.allergies}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Country:</p>
                                <p>{userDetails.country}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Diet Preference:</p>
                                <p>{userDetails.dietPreference}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Alcohol:</p>
                                <p>{userDetails.alcohol}</p>
                            </div>
                            <div className="bg-gray-200 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-md glass-effect">
                                <p className="font-bold">Smoking:</p>
                                <p>{userDetails.smoking}</p>
                            </div>
                        </div>
                        {/* Update Details Button */}
                        <div className="flex justify-center mt-4 md:mt-4 space-x-4">
                            <div className="flex items-center justify-center bg-black rounded-full w-12 h-12 text-white transition-colors duration-300 hover:bg-blue-600">
                                <button onClick={updatePlan}>
                                    <FaEdit className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Container - Diet Plan */}
            <div className="w-full md:w-2/3 ml-0 md:ml-4 mt-4 md:mt-0"
                 style={{
                    
                 }}>
                {hasPlan && dietPlan.id ? (
                    <div className="bg-black bg-opacity-25 rounded-lg  shadow-md p-4 md:p-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">{dietPlan.title}</h2>
                        <p className="text-sm md:text-base mb-4">Nutrition for Your Unique Health Needs</p>
                        <ul className="list-disc list-inside">
                            <li>Breakfast: {dietPlan.meals.breakfast.join(", ")}</li>
                            <li>Lunch: {dietPlan.meals.lunch.join(", ")}</li>
                            <li>Dinner: {dietPlan.meals.dinner.join(", ")}</li>
                        </ul>
                        {/* Buttons for Download Plan, View Plan, Update Plan, Delete Plan */}
                        <div className="flex justify-center space-x-4 mt-4">
                            <div className="flex items-center justify-center bg-black rounded-full w-12 h-12 text-white transition-colors duration-300 hover:bg-blue-600">
                                <button onClick={downloadPlan}>
                                    <FaDownload className="text-xl" />
                                </button>
                            </div>
                            <Link
                                to="/diet"
                                className="flex items-center justify-center bg-black rounded-full w-12 h-12 text-white transition-colors duration-300 hover:bg-blue-600"
                            >
                                <FaEye className="text-xl" />
                            </Link>
                            <div className="flex items-center justify-center bg-black rounded-full w-12 h-12 text-white transition-colors duration-300 hover:bg-blue-600">
                                <button onClick={updatePlan}>
                                    <FaEdit className="text-xl" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center bg-black rounded-full w-12 h-12 text-white transition-colors duration-300 hover:bg-blue-600">
                                <button onClick={deletePlan}>
                                    <FaTrashAlt className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full mb-4 md:mb-8 text-center">
                        <p>No diet plan available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPage;
