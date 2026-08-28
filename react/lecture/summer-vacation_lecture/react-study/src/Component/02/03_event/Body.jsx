import './Button.css';

function Body() {
  function handleOnClick() {
    alert('button clicked!');
  }
  return (
    <div>
      <button onClick={handleOnClick} className="btn">Click Me!!</button>
    </div>
  );
}
export default Body;
