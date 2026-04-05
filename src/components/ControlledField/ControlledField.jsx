import React, { useState } from "react";

const ControlledField = () => {
    const [password, setPassword] = useState("secrect");
    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
    }
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" required id="" />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="password"
          required
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
