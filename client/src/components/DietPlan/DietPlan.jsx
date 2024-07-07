import React, { useState } from 'react';

const dietPlanData = [
    {
        week: 'Week 1',
        meals: {
            Breakfast: ['Upma (semolina with vegetables)', 'Poha with peanuts and vegetables', 'Vegetable paratha with yogurt'],
            Lunch: ['Dal with roti and mixed vegetable sabzi', 'Palak paneer with brown rice', 'Bhindi masala with whole wheat phulka'],
            Dinner: ['Grilled fish with jeera rice and mixed vegetable raita', 'Chicken curry with quinoa pulao', 'Rajma with brown rice and cucumber-tomato salad'],
            Snacks: ['Sprouts chaat', 'Masala papad', 'Fruit chaat'],
        },
    },
    {
        week: 'Week 2',
        meals: {
            Breakfast: ['Moong dal chilla with mint chutney', 'Idli with sambar', 'Vegetable uttapam with coconut chutney'],
            Lunch: ['Chole with whole wheat bhature', 'Mixed vegetable khichdi with cucumber raita', 'Egg curry with roti and mixed salad'],
            Dinner: ['Tandoori chicken with roti and mixed vegetable salad', 'Baingan bharta with quinoa or whole wheat naan', 'Methi pulao with paneer tikka'],
            Snacks: ['Dhokla', 'Roasted makhana', 'Almond and date energy balls'],
        },
    },
    {
        week: 'Week 3',
        meals: {
            Breakfast: ['Vegetable upma with coconut chutney', 'Moong dal cheela with green chutney', 'Methi paratha with yogurt'],
            Lunch: ['Kadhi chawal', 'Aloo gobi with roti', 'Paneer tikka masala with brown rice'],
            Dinner: ['Fish curry with steamed brown rice', 'Vegetable biryani with cucumber raita', 'Spinach dal with quinoa'],
            Snacks: ['Masala peanuts', 'Fruit salad with chaat masala', 'Steamed corn with lemon and spices'],
        },
    },
    {
        week: 'Week 4',
        meals: {
            Breakfast: ['Poha with vegetables and peanuts', 'Vegetable sandwich with mint chutney', 'Paneer bhurji with whole wheat toast'],
            Lunch: ['Masoor dal with roti and mixed vegetable sabzi', 'Matar paneer with brown rice', 'Stuffed capsicum with quinoa'],
            Dinner: ['Grilled chicken with jeera rice and mixed vegetable salad', 'Veg pulao with raita', 'Palak dal with whole wheat phulka'],
            Snacks: ['Masala oats', 'Cucumber and carrot sticks with hummus', 'Yogurt with berries and honey'],
        },
    },
];

const DietPlan = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage < dietPlanData.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const currentWeek = dietPlanData[currentPage];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8 bg-[url('/img/bg.jpg')]">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Psoriasis Diet Plan</h1>
            </header>

            <section id="diet-plan" className="w-full max-w-4xl bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Monthly Diet Plan</h2>

                <div className="week mb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-center">{currentWeek.week}</h3>
                    {Object.entries(currentWeek.meals).map(([meal, items]) => (
                        <div className="meal mb-6" key={meal}>
                            <h4 className="text-xl font-semibold mb-2">{meal}</h4>
                            <ul className="list-disc pl-6">
                                {items.map((item, index) => (
                                    <li key={index} className="mb-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-4">
                    <button onClick={handlePrevious} disabled={currentPage === 0} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none disabled:bg-gray-300">Prev</button>
                    {dietPlanData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageClick(index)}
                            className={`px-4 py-2 mx-1 rounded-md shadow-sm focus:outline-none ${currentPage === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={handleNext} disabled={currentPage === dietPlanData.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none disabled:bg-gray-300">Next</button>
                </div>
            </section>

            <section id="nutrition-considerations" className="w-full max-w-4xl bg-white bg-opacity-90 p-8 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-4">Nutrition Considerations</h2>
                <p>
                    Incorporate foods rich in omega-3 fatty acids, antioxidants, and fiber. Adjust intake based on personal responses.
                </p>
            </section>

            <section id="foods-to-avoid" className="w-full max-w-4xl bg-white bg-opacity-90 p-8 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-4">Foods to Avoid</h2>
                <ul className="list-disc pl-6">
                    <li>Processed foods high in refined sugars and unhealthy fats</li>
                    <li>Trans fats found in commercially baked goods and fried foods</li>
                    <li>Spicy foods in excess</li>
                </ul>
            </section>

            <section id="faq" className="w-full max-w-4xl bg-white bg-opacity-90 p-8 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-4">Common FAQs</h2>
                <div className="faq-item mb-4">
                    <h3 className="text-xl font-semibold mb-2">Can traditional Indian spices worsen psoriasis?</h3>
                    <p>While spices like turmeric, cumin, and coriander have anti-inflammatory properties, some individuals may find very spicy foods exacerbate symptoms. Monitor personal triggers.</p>
                </div>
                <div className="faq-item mb-4">
                    <h3 className="text-xl font-semibold mb-2">Is dairy consumption okay for psoriasis patients?</h3>
                    <p>Dairy products like yogurt and paneer are sources of calcium and protein. Some individuals may find reducing dairy intake improves symptoms.</p>
                </div>
                <div className="faq-item mb-4">
                    <h3 className="text-xl font-semibold mb-2">Can Ayurvedic herbs help manage psoriasis?</h3>
                    <p>Ayurvedic herbs like neem, turmeric, and aloe vera have anti-inflammatory properties and may provide relief. Consult with a healthcare provider for personalized recommendations.</p>
                </div>
                <div className="faq-item mb-4">
                    <h3 className="text-xl font-semibold mb-2">Should I avoid gluten-containing foods like wheat roti?</h3>
                    <p>While gluten sensitivity is not typically associated with psoriasis, some individuals may have co-existing conditions like celiac disease. Consider alternatives if gluten intolerance is suspected.</p>
                </div>
                <div className="faq-item mb-4">
                    <h3 className="text-xl font-semibold mb-2">How important is stress management in managing psoriasis?</h3>
                    <p>Stress can trigger or worsen psoriasis symptoms. Incorporate stress-relieving activities like yoga or meditation.</p>
                </div>
            </section>

            <footer className="text-center mt-8">
                <p>&copy; 2024 Psoriasis Diet Plan. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DietPlan;
