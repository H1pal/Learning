import React, { useState } from "react";
import ThemedContent from "./ThemedContent";
import "../App.css";

// context로 props 대신 활용
export const ThemeContext = React.createContext();

function Body() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div id="Body">
      <header>
        <h1>theme configuration</h1>
      </header>
      <main>
        {/* Provider 트리 범위 내에서 context를 흩뿌려줌 */}
        <ThemeContext.Provider value={theme}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <ThemedContent />
        </ThemeContext.Provider>
      </main>
    </div>
  );
}

export default Body;
