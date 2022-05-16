import React from "react";

export default function LightSwitchButton(props) {

  const handleClick = () => props.setLight(props.light === "off" ? "on" : "off");

  return (  
  <button onClick={handleClick} className="LightSwitchButton">
    {props.light === "on" && <span><i>💡</i> I'm on!</span>}
    {props.light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
  </button>
  );
}
