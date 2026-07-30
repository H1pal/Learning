import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";

function ThemedContent() {
  // props가 아닌 context로 값을 받음
  const theme = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div>
      <h4>practicing context</h4>
      <div style={themeStyle}>current theme: theme</div>
    </div>
  );
}

export default ThemedContent;
