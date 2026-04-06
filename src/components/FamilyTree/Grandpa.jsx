import React from "react";
import Dad from "./Dad";
import Aunty from "./Aunty";
import Uncle from "./Uncle";

const Grandpa = ({asset}) => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad asset={asset} />

        <Uncle />
        <Aunty asset={asset} />
      </section>
    </div>
  );
};

export default Grandpa;
