import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmitForm = (e) => {
    console.log("Name: ", e.targer.value);
    console.log("Email: ", e.target.value);
  };
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleNameOnChange = (event) => {
    // console.log(event.target.value);
    setNameError(event.target.value);
    if (name.length < 3) {
      setNameError("Name must be longer 3 character");
    } else {
      setNameError("");
    }
  };
  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="enter your full name"
          onChange={handleNameOnChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your valid email address"
        />
        <br />
        <input
          type="password"
          name="passwowrd"
          defaultValue={password}
          onChange={handlePasswordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{nameError}</small>
      </p>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
