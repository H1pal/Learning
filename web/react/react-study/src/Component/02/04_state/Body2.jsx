import { useState } from 'react';
function Body() {
  console.log('Update!');
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
export default Body;
