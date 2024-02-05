import React, { useEffect, useState } from "react";
import Popularproduct from "./Popularproduct";

function Popularsection() {
  return (
    <div className="popularSection">
      <h1 className="sectionHeader">popular products</h1>
            <Popularproduct/>
    </div>
  );
}

export default Popularsection;
