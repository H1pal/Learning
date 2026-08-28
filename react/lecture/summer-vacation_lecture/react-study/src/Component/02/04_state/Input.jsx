/*
지금은 사용자가 입력한 텍스트를 리액트가 관리하고 있지 않다. 
*/
function Body() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input onChange={handleOnChange} />
    </div>
  );
}
export default Body;
