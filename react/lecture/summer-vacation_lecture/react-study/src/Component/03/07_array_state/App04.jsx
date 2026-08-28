import { useState } from 'react';

function Body() {
  const majors = ['소프트웨어개발과', '인공지능소프트웨어개발과'];
  // const [majorIndex, setMajorIndex] = useState(0);
  const [student, setStudent] = useState({
    name: '김민수',
    age: 17,
    majorIndex: 0
  });
  

  const handleAgeUp = () => {
    setStudent({
      ...student,
      age: student.age + 1,
    });
  };

  const handleChangeMajor = () => {
    // setMajorIndex(majorIndex === 0 ? 1: 0);
    setStudent({
      ...student,
      majorIndex: student.majorIndex === 0 ? 1: 0
    })
  };

  return (
    <div>
      <h1>학생 정보</h1>

      <p>이름: {student.name}</p>
      <p>나이: {student.age}세</p>
      <p>전공: {majors[student.majorIndex]}</p>

      <button onClick={handleAgeUp}>나이 1 증가</button>
      <button onClick={handleChangeMajor}>전공 변경</button>
    </div>
  );
}

export default Body;
