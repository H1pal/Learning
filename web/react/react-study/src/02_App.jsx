// import Body from "./Component/02/01_component/Body";
// import Footer from "./Component/02/01_component/Footer";
// import Header from "./Component/02/01_component/Header";
// import Body from "./Component/02/02_jsx/Body";
import Body from "./Component/02/03_event/Body";
// import Body from "./Component/02/03_event/Body2";

// 기본
// function App() {
//   const name = '이정환';

//   return (
//     <div>
//       <Header />
//       {/* <Body name={name} /> */}
//       {/* props 여러개 전달 */}
//       <Body name={name} location={'부천시'} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// 많은 props전달하기

// function App() {
//   const bodyProps = {
//     name: '이정환',
//     location: '부천시',
//     // favorList: ['파스타', '빵', '떡볶이'],
//   };

//   return (
//     <div>
//       <Header />
//       {/* <Body name={name} /> */}
//       {/* props 여러개 전달 */}
//       {/* <Body name={name} location={'부천시'} /> */}
//       {/* 더 많은 props 전달 */}
//       <Body {...bodyProps} />
//       <Footer />
//     </div>
//   );
// }

// 01_Components
// function MyApp() {
//   return (
//     <div className="MyApp">
//       <Body>
//         <Header />
//         <main>
//           <h1>Hello World!</h1>
//         </main>
//         <Footer />
//       </Body>
//     </div>
//   );
// }

// 화살표 함수로 App.jsx 본문 작성
// const MyApp = () => {
//   return (
//     <div className="MyApp">
//       <Header />
//     </div>
//   );
// }

// 02_jsx, 03_event
function MyApp() {
  return (
    <div className="MyApp">
      <Body />
    </div>
  );
}

export default MyApp;