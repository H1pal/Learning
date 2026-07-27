import './Body.css';
import ProjectCard from './ProjectCard';
import ProjectButton from './ProjectButton';
import Header from './Header';
import Footer from './Footer';

function Body({name, location, favorite}) { // 부모 요소에서 받아온 props object
  // const { name, location } = props;
  // const num = 10;

  // let isJack;
  // if (num % 2 === 1) {
  //   isJack = '짝수';
  // } else {
  //   isJack = '홀수';
  // }

  function handleOnClick(e) {
    alert('신청 완료!');
    console.log(e);
    
  }

  const bodyProps = {
    title:"급식 혼잡도 알리 서비스",
    role: "프론트엔드 개발자",
    count:2
  }
  
  return(
    // <div>
    //   <h1 className="body">body, {name} {location} {favorite[0]}</h1>
      
    //   {/* <h2>
    //     {num}: {num % 2 === 0 ? "짝수" : "홀수"}
    //   </h2>  */}
    //   <h2>{`${num}:`} {isJack}</h2>
    // </div>
    <div style={{
      border: '1px solid black',
      borderRadius: '14px',
      display: 'inline-block',
      padding: '.2em 1em'
    }}>
      <Header />
      <main>
        <ProjectCard {...bodyProps}>
          <p>급식실의 시간대별 혼잡도를 학생들에게 알려주는 프로젝트입니다</p>
        </ProjectCard>
        <ProjectButton onClick={handleOnClick}>
          신청
        </ProjectButton>
      </main>
      <Footer />
    </div>
  );
}

export default Body;