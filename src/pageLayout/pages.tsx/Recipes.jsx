import React from "react";

const Recipes = () => {
  return (

    <div className="recipes_wrapper">


      <div className="title_container">
        <img src="./images/chefPic.png" alt="" width={200} />


        <div className="description">
          <h1>Only the best recipes!</h1>
          <h3>Today's new recipies for you</h3>
        </div>


        <div className="count_container">
          <div className="count">
            <h1>168</h1>
            <p>Tutorials</p>
          </div>
<hr />
          <div className="count">
            <h1>304</h1>
            <p>Recipes</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Recipes;
