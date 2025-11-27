import React from "react";
import { useForm } from "./useForm";
import validateFrom from "./validateFrom";

export function Form() {
  const onsubmit = (value) => {
    alert("Form is submitted");
    console.log(value);
  };
  const { value, error, handleInputChange, handlesubmit } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    validateForm,
    onsubmit
  );
  return (
    <form onsubmit={handlesubmit}>
      <div className="w-full max-w-md mx-auto p-4 bg-white text-black shadow-md">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleInputChange}
          className="mb-1 block border-2 "
        />
        {error.name && <p style={{ color: "red" }}></p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={value.name}
          onChange={handleInputChange}
          className="mb-1 block border-2 "
        />
        {error.name && <p style={{ color: "red" }}></p>}
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
          value={value.name}
          onChange={handleInputChange}
          className="mb-1 block border-2 "
        />
        {error.name && <p style={{ color: "red" }}></p>}
      </div>
      <div>
        <label>contact</label>
        <input
          type="contact"
          name="contact"
          value={value.name}
          onChange={handleInputChange}
          className="mb-1 block border-2 "
        />
        {error.name && <p style={{ color: "red" }}></p>}
      </div>
    </form>
  );
}
