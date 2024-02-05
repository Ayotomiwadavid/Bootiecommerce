import React from "react";


function Smalltips(prop) {
  return (
    <>
      <div className= {prop.class}>
        <div className="iconContainer">{prop.icon}</div>
        <div className="tipsTextContainer">
          <h3>{prop.title}</h3>
          <p>{prop.description}</p>
        </div>
      </div>
    </>
  );
}

export default Smalltips;
