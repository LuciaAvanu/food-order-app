export default function MealInfo({ meal }) {
  return (
    <div className="p-4 min-h-64 rounded-b-lg flex flex-col justify-between items-center text-white bg-slate-800 ">
      <p className="my-2 text-xl font-semibold tracking-wide text-center">{meal.name}</p>
      <div className="bg-slate-900/70 py-2 px-3 rounded-md text-orange-300">{`$${meal.price}`}</div>
      <div className="description my-4 text-center leading-5 text-slate-400">{meal.description}</div>
      <button className="text-black bg-yellow-400 py-2 px-3 rounded-lg hover:bg-orange-400 hover:text-white">Add to cart</button>
    </div>
  );
}
