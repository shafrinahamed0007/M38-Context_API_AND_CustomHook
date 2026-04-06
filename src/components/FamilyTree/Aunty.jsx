import React from "react";
import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name="Tom Tom" />
        <Cousin name="Jo Jo" />
      </section>
    </div>
  );
};

export default Aunty;
