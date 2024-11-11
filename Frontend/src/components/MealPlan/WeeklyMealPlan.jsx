// import React from 'react';

// const WeeklyMealPlan = () => {
//   return (
//     <div>
//       <h2>Weekly Meal Plan</h2>
//       {/* Placeholder - Implement meal plan selection and display here */}
//       <p>Plan your weekly meals by selecting from your saved recipes.</p>
//     </div>
//   );
// };

// export default WeeklyMealPlan;

import React from 'react';


const categories = ["Breakfast", "Lunch", "Snacks", "Dinner"];
// [ , "Vegetarian", "Vegan", "Dairy Free", "7 Day", "14 Day", "One Day"]
const mealPlanImages = [
    { title: "Breakfast", img: "https://tse4.mm.bing.net/th?id=OIP.-ii71iLBWq0dAHpa4pQlpQHaEK&pid=Api&P=0&h=180" },
    { title: "Lunch", img: "https://tse2.mm.bing.net/th?id=OIP.VHQoBEHakdG03pfAF1g5kQHaHa&pid=Api&P=0&h=180" },
    { title: "Snacks", img: "https://tse1.mm.bing.net/th?id=OIP.sCkUkVKzk-1Rdu4gzFVSHAHaEK&pid=Api&P=0&h=180" },
    { title: "Dinner", img: "https://tse3.mm.bing.net/th?id=OIP.2n78nD5s74jUo54-KTkrNQHaFd&pid=Api&P=0&h=180" },
    // Add more items as needed for each meal plan image
];

function WeeklyMealPlan() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Meal Plans</h1>
            <p className="text-center">Organize your eating habits with a thorough meal plan and a complete shopping list. For Free.</p>
            
            {/* Categories */}
            <div className="d-flex flex-wrap justify-content-center mb-4">
                {categories.map((category, index) => (
                    <button key={index} className="btn btn-light m-2 category-btn">
                        {category}
                    </button>
                ))}
            </div>

            {/* Meal Plan Images */}
            <div className="row">
                {mealPlanImages.map((meal, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={meal.img} alt={meal.title} className="card-img-top" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{meal.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeeklyMealPlan;
