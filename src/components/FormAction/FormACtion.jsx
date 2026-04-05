import React from "react";

const FormACtion = () => {
  const handleFormAction = (formData) => {
    console.log("Name: ", formData.get("name"));
    console.log("Email: ", formData.get("email"));
  };

  return (
    <div>
      <form action={handleFormAction}>
        <input
          type="text"
          name="name"
          placeholder="enter your full name"
          id=""
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your vaid email address"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormACtion;
