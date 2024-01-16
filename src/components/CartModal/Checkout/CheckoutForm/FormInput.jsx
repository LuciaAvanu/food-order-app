export default function FormInput({ type, label, name}) {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={type} className="font-bold mb-2">
        {label}{" "}
      </label>
      <input required
        type={type}
        name={name}
        id={type}
        className="p-2 rounded-md"
      ></input>
    </div>
  );
}
