import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [mealsList, setMealsList] = useState([]);

  const transformData = (data) => {
    const listOfMeals = data.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
    setMealsList(listOfMeals);
  };

  useEffect(() => {
    const requestParams = {
      url: "https://react-http-d9795-default-rtdb.firebaseio.com/meals.json",
    };
    sendRequest(requestParams, transformData);
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Wait until we fetch your meals...</p>}
        {error && <p>An error occurred: {error}</p>}
        {mealsList.length === 0 && !isLoading && <p>No meals found</p>}
        {mealsList.length > 0 && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
