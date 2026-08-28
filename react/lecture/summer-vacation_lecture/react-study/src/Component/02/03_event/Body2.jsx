import './Button.css';

function Body() {
  function handleOnClick(e) {
    console.log(e);
    console.log(e.target.name);
  }
  return (
    <div style={{margin:'50px'}}>
      <button name="A버튼" onClick={handleOnClick} className="btn">
        A 버튼
      </button>
      <button name="B버튼" onClick={handleOnClick} className="btn">
        B 버튼
      </button>
    </div>
  );
}
export default Body;
