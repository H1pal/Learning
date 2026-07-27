import { useState } from 'react';

function App() {
  const [student, setStudent] = useState({
    name: '김민수',
    age: 17,
    major: '소프트웨어개발과',
  });

  const handleAgeUp = () => {
    setStudent({
      ...student,
      age: student.age + 1,
    });
  };

  const handleChangeMajor = () => {
    setStudent({
      ...student,
      major: '인공지능소프트웨어과',
    });
  };

  return (
    <div>
      <h1>학생 정보</h1>

      <p>이름: {student.name}</p>
      <p>나이: {student.age}세</p>
      <p>전공: {student.major}</p>

      <button onClick={handleAgeUp}>나이 1 증가</button>
      <button onClick={handleChangeMajor}>전공 변경</button>
    </div>
  );
}

export default App;
