import classes from "./AvailableMeals.module.css";
import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      // .json is firebase specific which we have to add
      const response = await fetch(
        "https://react-http-2-1fd8d-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something Went wrong");
      }
      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setIsloading(false);

      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isloading) {
    return (
      <section>
        <p className={classes.mealsLoading}>Loading...</p>;
      </section>
    );
  }
  if (httpError) {
    return (
      <section>
        <h1 className={classes.mealsError}> {httpError}</h1>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={`${classes.meal} pb-10`}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
