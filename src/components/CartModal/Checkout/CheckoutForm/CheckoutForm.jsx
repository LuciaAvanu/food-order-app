import FormInput from "./FormInput";

export default function CheckoutForm() {
  return (
    <form className="flex flex-col">

      <div className="form-inputs flex flex-col mt-6">
        <FormInput type="text" label="Full Name" />
        <FormInput type="email" label="Email" />
        <FormInput type="text" label="Street" />
        <FormInput type="text" label="Postal Code" />
        <FormInput type="text" label="City" />
      </div>

      <div className="action-buttons bg-red-400 self-end mt-6">
        <button>Close</button>
        <button>Submit</button>
      </div>
    </form>
  );
}
