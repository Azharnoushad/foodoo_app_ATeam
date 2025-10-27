import React from "react";

const Card = ({ strMealThumb, strMeal }) => {
  return (
    <div className="card">
      <div className="meal_img">
        <img src={strMealThumb} alt="mealImg" />
      </div>
      <div className="meal_details">
        <h2>{strMeal}</h2>
        <p>Intermediate</p>
      </div>

      <div className="meal_cooking_details">
        <div className="details">
          <div className="detail time">
            <h1>25</h1>
            <p>Min</p>
          </div>

          <div className="detail cal">
            <h1>95</h1>
            <p>kcal</p>
          </div>

          <div className="detail incrident">
            <i className="fa-solid fa-fish"></i>
            <p>Fish</p>
          </div>
        </div>
      </div>

      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>

      <button className="card_button">Start Cooking</button>
    </div>
  );
};

export default Card;
