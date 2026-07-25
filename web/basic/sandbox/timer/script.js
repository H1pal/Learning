// 1. 상태 변수 설정 (기본값 5분 = 300,000ms)
let initialTime = 5 * 60 * 1000;
let increment = 0; // 초당 보너스 시간 (+1s 등)

let timeA = initialTime;
let timeB = initialTime;
let currentPlayer = null; // 'A'(첫 번째), 'B'(두 번째), null(정지)
let isPaused = true;

let timerInterval = null;
let lastTickTime = null;

// DOM 요소 가져오기
const firstTimeDisplay = document.getElementById('first-time');
const secondTimeDisplay = document.getElementById('second-time');
const firstBox = document.getElementById('timer-first');
const secondBox = document.getElementById('timer-second');

resetBtn = document.querySelector('#bt-reset button');

// 2. 화면 업데이트 함수
function updateDisplay() {
  firstTimeDisplay.textContent = formatTime(timeA);
  secondTimeDisplay.textContent = formatTime(timeB);

  // 현재 차례인 플레이어 박스에 active 스타일 적용
  firstBox.classList.toggle('active', currentPlayer === 'A');
  secondBox.classList.toggle('active', currentPlayer === 'B');

  const root = document.documentElement;
  if (isPaused) {
    root.style.setProperty('--timer-bg', '#d3d3d3ce');
    root.style.setProperty('--timer-shadow', '0 10px 25px rgba(223, 255, 195, 0.3)');
    
    document.querySelector(".timer_box.active")
    .classList.add('paused');
  } else {
    root.style.setProperty('--timer-bg', '#ff0088');
    root.style.setProperty('--timer-shadow', '0 10px 25px rgba(255, 0, 136, 0.3)');

    document.querySelectorAll(".timer_box")
    .forEach(element => {
      element.classList.remove('paused');
    });
  }
}

// 밀리초를 "분:초" 혹은 10초 미만일 때 "초.밀리초"로 포맷팅
function formatTime(ms) {
  if (ms <= 0) return "00:00";
  
  const totalSeconds = ms / 1000;
  const min = Math.floor(totalSeconds / 60);
  const sec = Math.floor(totalSeconds % 60);

  if (totalSeconds < 10 && totalSeconds > 0) {
    const tenths = Math.floor((ms % 1000) / 100);
    return `${sec}.${tenths}`;
  }

  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// 3. 시간 차감 핵심 로직 (tick)
function tick() {
  if (isPaused || !currentPlayer) return;

  const now = Date.now();
  const elapsed = now - lastTickTime;
  lastTickTime = now;

  if (currentPlayer === 'A') {
    timeA = Math.max(0, timeA - elapsed);
    if (timeA <= 0) {
      gameOver('Black');
    } 
  } else if (currentPlayer === 'B') {
    timeB = Math.max(0, timeB - elapsed);
    if (timeB <= 0) {
      gameOver('White');
    } 
  }

  updateDisplay();
}

// 4. 공통 턴 전환 함수 (스페이스바 및 클릭 이벤트에서 공동 사용)
function switchTurn() {
  // 게임이 정지 상태일 때 누르면 게임 시작
  if (isPaused) {
    isPaused = false;
    currentPlayer = 'A'; // 첫 번째 플레이어(A)가 먼저 시작
    lastTickTime = Date.now();
    timerInterval = setInterval(tick, 100);
    updateDisplay();
    return;
  }

  // 실행 중일 때는 현재 턴인 사람의 시간을 멈추고 상대방의 턴으로 전환
  if (currentPlayer === 'A') {
    timeA += increment; // 보너스 시간 추가
    currentPlayer = 'B';
  } else if (currentPlayer === 'B') {
    timeB += increment; // 보너스 시간 추가
    currentPlayer = 'A';
  }

  lastTickTime = Date.now(); // 기준점 리셋
  updateDisplay();
}

// 6. [핵심] 키보드 스페이스바 이벤트 리스너 추가
window.addEventListener('keydown', (event) => {

  // 키보드 입력값이 'Space'(스페이스바)일 때
  if (event.code === 'Space' || event.key === ' ') {
    event.preventDefault(); // 스페이스바를 누를 때 화면이 아래로 스크롤되는 현상 방지
    switchTurn(); // 턴 교환 실행
  }
});
 
window.addEventListener ('keydown', (e) => {
  
  if (e.code === 'KeyP' || e.key === 'p') {
    e.preventDefault();

    isPaused = true;
    updateDisplay();
  }
});

// 7. 상단 내비게이션(시간 설정) 연동
function setTimeConfig(minutes, bonusSeconds = 0) {
  isPaused = true;
  clearInterval(timerInterval);
  currentPlayer = null;

  initialTime = minutes * 60 * 1000;
  increment = bonusSeconds * 1000;

  timeA = initialTime;
  timeB = initialTime;

  updateDisplay();
}

// HTML 내 <li> 태그들과 JS 클릭 이벤트 연결
document.querySelectorAll('header nav ul li').forEach((li, index) => {
  li.addEventListener('click', () => {
    switch(index) {
      case 0: setTimeConfig(1, 0); break;
      case 1: setTimeConfig(1, 1); break;
      case 2: setTimeConfig(3, 0); break;
      case 3: setTimeConfig(5, 0); break;
    }
    
    document.querySelectorAll('header nav ul li').forEach(el => el.classList.remove('selected'));
    li.classList.add('selected');
  });
});

resetBtn.addEventListener('click', () => {
  // if (!isPaused) {
  //   isPaused = true;
  //   alert('reset');
  // }
});

// 게임 종료 처리
function gameOver(winner) {
  isPaused = true;
  clearInterval(timerInterval);
  alert(`시간 초과! 승리자: ${winner}`);
}

// 최초 실행 시 화면 초기화
updateDisplay();