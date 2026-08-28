import { useRef, useState } from 'react';
// ref
// reference(참조)의 약자, DOM 요소나 값을 직접 참조할 떄 사용
// 렌더링과 무관하게 유지되는 값을 저장(변경되어도 재렌더링 X)
// 컴포넌트 마운트 시 실제 DOM객체로 설정
// 내부적으로 ref 값을 자동 관리(ref.current에 저장)
// DOM 요소에 접근 및 제어; 입력창에 자동으로 포커스 주기, 특정 위치로 스크롤 이동, 요소의 크기나 위치 측정하기
// 리렌더링을 발생시키지 않고 값을 저장 유지: 타이머 ID

/* State vs Res */
// useState: 화면에 표시할 데이터; 리렌더링을 발생시킴
// useRef: DOM 요소가 렌더링과는 무관한 값


function Body() {
  const [name, setName] = useState('');
  const nameRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 2) {
      alert('이름을 두 글자 이상 입력하세요.');
    } else {
      alert(`${name}님, 등록되었습니다.`);
      setName('');
    }

    nameRef.current.focus();
  };

  return (
    <div>
      <h1>사용자 등록</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">이름: </label>

        <input
          ref={nameRef}
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="이름을 입력하세요"
        />

        <button type="submit">등록</button>
      </form>

      <p>현재 입력값: {name}</p>
    </div>
  );
}

export default Body;
