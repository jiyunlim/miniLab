import Career from "../component/Career.jsx";
import Skills from "../component/Skills.jsx";

export default function HomePage() {
  return (
    <>
      <h1 className="lab-title">About miniLab</h1>

      <div className="lab-intro typing-txt">
        Welcome to Mini Lab!
        <br />
        Web Publisher 7 Years Experience.
        <br />
        안녕하세요. 7년 차 웹 퍼블리셔 입니다. <br />
        <p className="lab-intro-desc">
          이 사이트는 공부한 내용으로 정리한 미니랩이자 포트폴리오입니다. <br />
          AI를 활용하고 Vite, React, Node.js를 기반으로 제작했습니다.
        </p>
      </div>

      <div className="lab-layout">
        <Skills />
        <Career />
      </div>
    </>
  );
}
