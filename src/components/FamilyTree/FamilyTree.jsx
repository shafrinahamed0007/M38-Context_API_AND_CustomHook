import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssestContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);

  const asset = "diamond";
  const newAsset = "Gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>

      {/* <AssestContext.Provider value={newAsset}>
        <Grandpa asset={asset} />
      </AssestContext.Provider> */}
      <h4>Total Family Money: {money}</h4>
      <MoneyContext.Provider value={[money, setMoney]}>
        <Grandpa></Grandpa>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;

/**
 * 1. create a context using CreateContext with a default value
 * 2. make sure you export the context to be used in other files
 */
