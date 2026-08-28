import { memo } from "react";
import "./Header.css";

function Header() {
  return (
    // 헤더!
    <header className="Header">
      <h1>TODAY | {new Date().toDateString()}</h1>
    </header>
  );
}

export default memo(Header);
