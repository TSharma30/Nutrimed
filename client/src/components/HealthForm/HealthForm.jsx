import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HealthForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        diseases: [],
        allergies: [],
        alcohol: '',
        smoking: '',
        country: '',
        diet: ''
    });
    const navigate =useNavigate();

    const [numberOfDiseases, setNumberOfDiseases] = useState(0);
    const [numberOfAllergies, setNumberOfAllergies] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDiseaseNumberChange = (e) => {
        const num = parseInt(e.target.value) || 0;
        setNumberOfDiseases(num);
        setFormData({
            ...formData,
            diseases: Array(num).fill({ name: '', duration: 0 }), // Initialize duration as 0
        });
    };

    const handleAllergiesNumberChange = (e) => {
        const num = parseInt(e.target.value) || 0;
        setNumberOfAllergies(num);
        setFormData({
            ...formData,
            allergies: Array(num).fill({ name: '' }),
        });
    };

    const handleDiseaseNameChange = (index, e) => {
        const { value } = e.target;
        const updatedDiseases = [...formData.diseases];
        updatedDiseases[index] = {
            ...updatedDiseases[index],
            name: value,
        };
        setFormData({
            ...formData,
            diseases: updatedDiseases,
        });
    };

    const handleDiseaseDurationChange = (index, e) => {
        const { value } = e.target;
        const updatedDiseases = [...formData.diseases];
        updatedDiseases[index] = {
            ...updatedDiseases[index],
            duration: parseInt(value) || 0,
        };
        setFormData({
            ...formData,
            diseases: updatedDiseases,
        });
    };

    const handleAllergyChange = (index, e) => {
        const { value } = e.target;
        const updatedAllergies = [...formData.allergies];
        updatedAllergies[index] = {
            name: value,
        };
        setFormData({
            ...formData,
            allergies: updatedAllergies,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
     
           
            const response=await axios("http://localhost:8800/api/user/healthForm", {
                method: "post",
                data: formData,
                withCredentials: true
              })
           
            console.log('Form submitted successfully:', response.data);
            navigate("/diet");
            // Handle the response, e.g., display a success message or redirect
        } catch (err) {
            console.error('Error submitting the form:', err);
            // Handle the error, e.g., display an error message
        }
    };
    

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl mb-10">
                <h2 className="text-center text-lg font-bold mb-6">Health Information Form</h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Age Input */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Age:
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Gender Radio Buttons */}
                <fieldset className="mb-4">
                    <legend className="block text-sm font-medium text-gray-700 mb-2">Your Gender:</legend>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Male</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Female</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="other"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Other</span>
                        </label>
                    </div>
                </fieldset>

                {/* Number of Diseases Input */}
                <div className="mb-4">
                    <label htmlFor="numberOfDiseases" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Diseases:
                    </label>
                    <input
                        type="number"
                        id="numberOfDiseases"
                        name="numberOfDiseases"
                        value={numberOfDiseases}
                        onChange={handleDiseaseNumberChange}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                {Array.from({ length: numberOfDiseases }).map((_, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={`diseaseName-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Disease Name #{index + 1}:
                        </label>
                        <input
                            type="text"
                            id={`diseaseName-${index}`}
                            name={`diseaseName-${index}`}
                            value={formData.diseases[index]?.name || ''}
                            onChange={(e) => handleDiseaseNameChange(index, e)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />

                        <label htmlFor={`duration-${index}`} className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                            Suffering Since (in years) #{index + 1}:
                        </label>
                        <input
                            type="number"
                            id={`duration-${index}`}
                            name={`duration-${index}`}
                            value={formData.diseases[index]?.duration || 0} // Default value of 0
                            onChange={(e) => handleDiseaseDurationChange(index, e)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                ))}


                {/* Number of Allergies Input */}
                <div className="mb-4">
                    <label htmlFor="numberOfAllergies" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Allergies:
                    </label>
                    <input
                        type="number"
                        id="numberOfAllergies"
                        name="numberOfAllergies"
                        value={numberOfAllergies}
                        onChange={handleAllergiesNumberChange}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Allergies Inputs */}
                {Array.from({ length: numberOfAllergies }).map((_, index) => (
                    <div key={index} className="mb-4">
                        <label
                            htmlFor={`allergyName-${index}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Allergic To #{index + 1}:
                        </label>
                        <input
                            type="text"
                            id={`allergyName-${index}`}
                            name={`allergyName-${index}`}
                            value={formData.allergies[index]?.name || ''}
                            onChange={(e) => handleAllergyChange(index, e)}
                            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                ))}


                {/* Alcohol Consumption Radio Buttons */}
                <fieldset className="mb-4">
                    <legend className="block text-sm font-medium text-gray-700 mb-2">Alcohol Consumption:</legend>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="alcohol"
                                value="yes"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="alcohol"
                                value="no"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="alcohol"
                                value="occasionally"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Occasionally</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="alcohol"
                                value="often"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Often</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="alcohol"
                                value="regularly"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Regularly</span>
                        </label>
                    </div>
                </fieldset>

                {/* Smoking Radio Buttons */}
                <fieldset className="mb-4">
                    <legend className="block text-sm font-medium text-gray-700 mb-2">Smoking:</legend>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="smoking"
                                value="yes"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="smoking"
                                value="no"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="smoking"
                                value="occasionally"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Occasionally</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="smoking"
                                value="often"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Often</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="smoking"
                                value="regularly"
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Regularly</span>
                        </label>
                    </div>
                </fieldset>

                {/* Country Selection */}
                <div className="mb-4">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                        Country:
                    </label>
                    <input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"

                    >

                    </input>
                </div>

                {/* Diet Selection */}
                <div className="mb-4">
                    <label htmlFor="diet" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Diet:
                    </label>
                    <select
                        id="diet"
                        name="diet"
                        value={formData.diet}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select your preferred diet</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Non Vegetarian</option>
                        <option value="paleo">Vegetarian + Eggs</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                    onClick={handleSubmit}
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default HealthForm;
