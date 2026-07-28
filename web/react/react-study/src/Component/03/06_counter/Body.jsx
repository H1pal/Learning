import { useState } from "react";
import Header from "./Header";
import Viewer from "./Viewer";
import Controller from "./Controller";
import "./Count.css";

function Body() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(1);

  function onChangeSize(changedSize) {
    setSize(changedSize);
  }

  function handleOnClick() {
    setCount(count + size);
  }

  return(
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems:"center",
      background: "radial-gradient(circle at 0% 36%, black, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.93)",
      position: "fixed",
      zIndex: "-9999"
    }}>
      <div id="interactive-bg"></div>
      <Header />
      <main style={{
        width: '100%',
        maxWidth: '500px',
        height: '800px',
        borderRadius: '10px',
        padding: '20px',
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Viewer count={count} onClicked={handleOnClick}>
        <div id="count_content_container">
          <span><strong id="count">{count}</strong></span>
        </div>
      </Viewer>
      <Controller focusedNumber={size} onChange={onChangeSize} />
      </main>
    </div>
  );
}

export default Body;