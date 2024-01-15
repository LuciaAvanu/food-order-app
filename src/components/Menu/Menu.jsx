import Card from "./Card/Card";
import { useState, useEffect } from "react";

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState({});

  //fetch meals data
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const responseData = await response.json();

        //successful fetch
        if (response.ok) {
          setMeals(responseData);
        }

        //unsuccessful fetch
        if (!response.ok) {
          throw new Error("Failed to fetch meals from backend.");
        }
      } catch (error) {
        setError({ message: error.message || "Could not fetch places." });
      }
    }

    fetchMeals();
  }, []);

  return (
    <div className="menu w-full justify-items-center grid grid-cols-4 ">
      {meals.map((meal) => (
        <Card meal={meal} key={meal.id}/>
      ))}
    </div>
  );
}
