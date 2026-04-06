import React, { createContext } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssestContext = createContext("");
const newAsset = "Gold";
const FamilyTree = () => {
  const asset = "diamond";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>

      <AssestContext.Provider value={newAsset}>
        <Grandpa asset={asset} />
      </AssestContext.Provider>
    </div>
  );
};

export default FamilyTree;
