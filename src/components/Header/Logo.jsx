import logo from "../../assets/logo.jpg";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        className="w-14 rounded-full border-solid border-2  border-orange-300 inline"
      />
      <p className="inline ml-2 text-3xl uppercase font-normal tracking-wide text-orange-300">reactfood</p>
    </div>
  );
}
