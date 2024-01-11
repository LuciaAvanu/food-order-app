import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between mb-16">
      <Logo />
      <button className="text-2xl text-orange-300">{`Cart (0)`}</button>
    </header>
  );
}
