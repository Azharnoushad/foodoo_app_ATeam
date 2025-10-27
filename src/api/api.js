import axios from "axios";

export const getMeals = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};
