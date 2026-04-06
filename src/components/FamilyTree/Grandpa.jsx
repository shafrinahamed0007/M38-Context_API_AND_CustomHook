import React from "react";
import Dad from "./Dad";
import Aunty from "./Aunty";
import Uncle from "./Uncle";

const Grandpa = () => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad />

        <Uncle />
        <Aunty />
      </section>
    </div>
  );
};

export default Grandpa;
