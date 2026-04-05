import React, { useRef } from "react";

const UnControleldField = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="" />
        <br />
        <input type="password" name="" />
        <br />
        <input ref={passRef} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControleldField;
