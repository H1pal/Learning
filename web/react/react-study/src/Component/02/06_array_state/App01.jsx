import './App01.css';

import { useState } from 'react';

function App() {
  const [student1, setStudent1] = useState('김민수');
  const [student2, setStudent2] = useState('이지우');
  const [student3, setStudent3] = useState('박서준');
  const [student4, setStudent4] = useState('최유진');

  return (
    <div>
      <h1>우리 반 학생 명단</h1>

      <ul>
        <li>{student1}</li>
        <li>{student2}</li>
        <li>{student3}</li>
        <li>{student4}</li>
      </ul>
    </div>
  );
}

export default App;
