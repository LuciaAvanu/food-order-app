export default function Submitted() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4 tracking-wide">Submitted!</h1>
      <p>Your order was submitted successfully.</p>
      <p className="mt-2">
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <button className="self-end mt-5 bg-yellow-400 p-3 rounded-md" onClick={() => window.location.reload(true)}>Okay</button>
    </div>
  );
}
