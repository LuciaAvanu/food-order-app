export default function FormInput({type, label}) {
  return (
    <div className="flex flex-col mb-3">
      <label for={type} className="font-bold mb-2">{label} </label>
      <input type={type} name={type} id={type} className="p-2 rounded-md

"></input>
    </div>
  );
}
