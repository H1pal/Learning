import { useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return(
    <div>
      <input type="text" value={text} onChange={handleOnChange}/>
    </div>
  );
}

export default Body;