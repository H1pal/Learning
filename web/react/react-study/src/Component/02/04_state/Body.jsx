import { useState } from 'react';
function Body() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}
export default Body;
