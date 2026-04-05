import React from "react";

const SimpleForm = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Name: ", e.target.name.value);
    console.log("Email: ", e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" placeholder="enter your name" id="" />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your email address"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
