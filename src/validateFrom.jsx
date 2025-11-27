import React from "react";

export function validateFrom(value) {
  const error = {};

  const validation = (error) => {
    switch (value) {
      case value:
        if (!value.email) return "Email is required";
        break;
      case value:
        if (!value.name) return "Name is required";
        break;
      case value:
        if (!value.contact && contact < 11)
          return "Contact is required and must be 11 digits";
        break;
      case value:
        if (password.value < 6) return "Password must be at least 6 character";
      default:
        break;
    }
  };

  return <></>;
}
