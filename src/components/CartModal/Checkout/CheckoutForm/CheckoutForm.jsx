import { useContext } from "react";
import FormInput from "./FormInput";
import { CartContext } from "../../../../cart-context";
import { useForm } from "react-hook-form";

export default function CheckoutForm({ setModalIsOpen, setDisplay }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      street: "",
      postalCode: "",
      city: "",
    },
  });

  const cartCtx = useContext(CartContext);

  function handleFormSubmission(data) {
    const order = {
      id: Math.floor(Math.random() * 1000000),
      userInfo: data,
      orderItems: cartCtx.items,
      total: cartCtx.totalPrice,
    };
    //deliver to Restaurant...

    // reset page
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit((data) => handleFormSubmission(data))}>
      <div className="form-inputs flex flex-col mt-6">
        {/* FULL NAME */}
        <div className="flex flex-col mb-3">
          <label htmlFor="fullName" className="font-bold mb-2">
            Full Name
          </label>
          <input
            {...register("fullName", {
              required: "Please fill out this field",
            })}
            type="text"
            id="fullName"
            className="p-2 rounded-md"
          ></input>
          {errors.fullName && (
            <p className="text-red-500 mt-2">{errors.fullName.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="font-bold mb-2">
            Email
          </label>
          <input
            {...register("email", {
              required: "Please fill out this field",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please provide a valid email address",
              },
            })}
            type="text"
            id="email"
            className="p-2 rounded-md"
          ></input>
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* STREET */}
        <div className="flex flex-col mb-3">
          <label htmlFor="street" className="font-bold mb-2">
            Street
          </label>
          <input
            {...register("street", { required: "Please fill out this field" })}
            type="text"
            id="street"
            className="p-2 rounded-md"
          ></input>
          {errors.street && (
            <p className="text-red-500 mt-2">{errors.street.message}</p>
          )}
        </div>

        {/* POSTAL CODE */}
        <div className="flex flex-col mb-3">
          <label htmlFor="postalCode" className="font-bold mb-2">
            Postal Code
          </label>
          <input
            {...register("postalCode", {
              required: "Please fill out this field.",
              minLength: {
                value: 4,
                message: "Minimum length of postal code is 4",
              },
            })}
            type="text"
            id="postalCode"
            className="p-2 rounded-md"
          ></input>
          {errors.postalCode && (
            <p className="text-red-500 mt-2">{errors.postalCode.message}</p>
          )}
        </div>

        {/* CITY */}
        <div className="flex flex-col mb-3">
          <label htmlFor="city" className="font-bold mb-2">
            City
          </label>
          <input
            {...register("city", { required: "Please fill out this field" })}
            type="text"
            id="city"
            className="p-2 rounded-md"
          ></input>
          {errors.city && (
            <p className="text-red-500 mt-2">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="action-buttons bg-red-400 self-end mt-6">
        <button onClick={() => setModalIsOpen(false)}>Close</button>
        <button type="submit" className="ml-3">
          Submit
        </button>
      </div>
    </form>
  );
}
