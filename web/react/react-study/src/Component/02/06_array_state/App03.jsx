import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어 입력"
      />

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? '라이트 모드' : '다크 모드'}
      </button>
    </div>
  );
}

export default App;
