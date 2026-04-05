import React from "react";
import useInputField from "../Hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Submit", name, email);
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="name"
          onChange={nameOnChange}
        />
        <br />
        <input type="email" name="email" onChange={emailOnChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
