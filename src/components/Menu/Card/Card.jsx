import MealInfo from "./MealInfo";

export default function Card({ meal }) {
  return (
    <div className="mx-4 mb-5 rounded-b-lg">
      <img
        src={`http://localhost:3000/${meal.image}`}
        className="rounded-t-lg"
      />
      <MealInfo meal={meal} />
    </div>
  );
}
