// function Body() {
//   return (
//     <div>
//       <h1>body</h1>
//     </div>
//   );
// }
// export default Body;

// 산술 표현식
// function Body() {
//   const numA = 1;
//   const numB = 2;
//   return (
//     <div>
//       <h1>body</h1>
//       <h2>{numA + numB}</h2>
//     </div>
//   );
// }
// export default Body;

// 문자열 표현식
// function Body() {
//   const strA = '안녕';
//   const strB = '리액트';
//   return (
//     <div>
//       <h1>body</h1>
//       <h2>{strA + strB}</h2>
//     </div>
//   );
// }
// export default Body;

// 논리 표현식
// function Body() {
//   const boolA = true;
//   const boolB = false;
//   return (
//     <div>
//       <h1>body</h1>
//       <h2>{String(boolA || boolB)}</h2>
//     </div>
//   );
// }
// export default Body;

// 사용할 수 없는 값
// function Body() {
//   const objA = {
//     a: 1,
//     b: 2,
//   };
//   return (
//     <div>
//       <h1>body</h1>
//       <h2>{objA}</h2>
//     </div>
//   );
// }
// export default Body;

// 사용할 수 없는 값 오류 수정
// function Body() {
//   const objA = {
//     a: 1,
//     b: 2,
//   };
//   return (
//     <div>
//       <h1>body</h1>
//       <h2>{objA.a}</h2>
//       <h2>{objA.b}</h2>
//     </div>
//   );
// }
// export default Body;

// 조건부 렌더링
// function Body() {
//   const num = 19;
//   return (
//     <>
//       <h2>
//         {num}은(는) {num % 2 === 0 ? '짝수' : '홀수'}입니다.
//       </h2>
//     </>
//   );
// }
// export default Body;

// 조건문 조건부 렌더링
// function Body() {
//   const num = 200;
//   if (num % 2 === 0) {
//     return <div>{num}은(는) 짝수입니다.</div>;
//   } else {
//     return <div>{num}은(는) 홀수입니다.</div>;
//   }
// }
// export default Body;

// CSS 스타일링
// function Body() {
//   return (
//     <div style={{ backgroundColor: 'red', color: 'blue' }}>
//       <h1>body</h1>
//     </div>
//   );
// }
// export default Body;

// CSS 스타일링
// import './Body.css';
// function Body() {
//   return (
//     <div className="body">
//       <h1>body</h1>
//     </div>
//   );
// }
// export default Body;

// props
// import './Body.css';
// function Body(props) {
//   console.log(props);
//   return (
//     <div className="body">
//       <h1>{props.name}</h1>
//     </div>
//   );
// }
// export default Body;

// props 여러개
// import './Body.css';
// function Body(props) {
//   console.log(props);
//   return (
//     <div className="body">
//       <h1>
//         {props.name}은 {props.location}에 거주합니다.
//       </h1>
//     </div>
//   );
// }
// export default Body;

// 구조분해 할당
// import './Body.css';
// function Body(props) {
//   const { name, location } = props;
//   console.log(name, location);
//   return (
//     <div className="body">
//       <h1>
//         {name}은 {location}에 거주합니다.
//       </h1>
//     </div>
//   );
// }
// export default Body;

// 구조분해 할당 좀 더 간단
// import './Body.css';
// function Body({name, location}) {
//   console.log(name, location);
//   return (
//     <div className="body">
//       <h1>
//         {name}은 {location}에 거주합니다.
//       </h1>
//     </div>
//   );
// }
// export default Body;

// 스프레드연산자로 받을 때
// import './Body.css';
// function Body({ name, location, favorList = [] }) {
//   console.log(name, location, favorList);
//   return (
//     <div className="body">
//       <h1>
//         {name}은 {location}에 거주합니다.
//         <br />
//         {favorList.length}개의 음식을 좋아합니다.
//       </h1>
//     </div>
//   );
// }
// export default Body;

// children 프로퍼티 전달
import './Body.css';
function Body({ children }) {
  console.log(children);
  return <div className="body">{children}</div>;
}
export default Body;
