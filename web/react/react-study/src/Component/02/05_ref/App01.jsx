import { useState } from 'react';

function Body() {
  const [name, setName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 2) {
      alert('이름을 두 글자 이상 입력하세요.');
      return;
    }

    alert(`${name}님, 등록되었습니다.`);
  };

  return (
    <div>
      <h1>사용자 등록</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">이름: </label>

        <input
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
