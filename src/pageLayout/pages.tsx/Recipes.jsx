import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../../api/api";
import Card from "../../components/Card";

const Recipes = () => {
  // useQuery------------------------------------------------------------------------------

  const { data: meals, isLoading: mealsIsLoading } = useQuery({
    queryKey: ["meals"],
    queryFn: getMeals,
  });

  // console.log("meals", meals);

  // idMeal
  // :
  // "52959"
  // strMeal
  // :
  // "Baked salmon with fennel & tomatoes"
  // strMealThumb
  // :
  // "https://www.themealdb.com/images/media/meals/1548772327.jpg"

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

      {mealsIsLoading ? (
        <div className="loader">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="card_wrapper">
          {meals?.map((meal) => (
            <Card {...meal} key={meal.idMeal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
