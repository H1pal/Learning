let number = 0;

function Body() {
  const onIncrease = () => {
    number = number + 1;
    console.log('일반 변수:', number);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default Body;
