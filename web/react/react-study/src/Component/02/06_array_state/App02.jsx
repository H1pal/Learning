import { useState } from 'react';
import './Body.css';

function Body() {
  const [students, setStudents] = useState(['김민수', '이지우', '박서준']);

  return (
    <div className="container">
      <h1>우리 반 학생 명단</h1>

      <p>현재 학생 수: {students.length}명</p>

      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index}>
            <span className="student-number">{index + 1}</span>
            <span>{student}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
