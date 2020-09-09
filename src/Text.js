import React from "react";
import "./Text.css";

const Text = (props) => {
return <h2>{props.text || "Geen text meegegeven"}</h2>;
}

export default Text;