const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Git",
  "Vite",
];

const achievements = [
  {
    title: "동적 웹 UI 구현",
    description:
      "React 기반 컴포넌트 설계와 상태·이벤트 관리를 활용해 동적인 웹 UI 구현 역량을 강화했습니다.",
  },
  {
    title: "서버 및 REST API 실습",
    description:
      "Node.js와 Express 기반의 서버 및 REST API를 구현하며 프론트엔드와 백엔드의 개발 흐름을 이해했습니다.",
  },
  {
    title: "협업 개발 프로세스",
    description:
      "Git을 활용한 버전 관리와 브랜치 기반의 협업 개발 프로세스를 실습했습니다.",
  },
  {
    title: "풀스택 영역으로 확장",
    description:
      "기존 웹 퍼블리싱 경험을 바탕으로 React 중심의 프론트엔드 개발과 풀스택 영역까지 기술 범위를 확장했습니다.",
  },
];

export default function LearningPage() {
  return (
    <section className="learning">
      <h1 className="lab-title">교육이수</h1>

      <article className="learning-card">
        <header className="learning-hero">
          <div className="learning-meta">
            <span className="learning-label">Education</span>
            <p className="learning-period">
              <time dateTime="2026-07">2026. 07</time>
              <span aria-hidden="true">—</span>
              <time dateTime="2026-09">2026. 09</time>
            </p>
          </div>

          <div className="learning-heading">
            <p className="learning-institute">동부여성발전센터</p>
            <h2>클라우드 AI 협업 풀스택 개발자 과정</h2>
            <p className="learning-summary">
              JavaScript 단일 언어를 기반으로 현대적인 웹 서비스의 흐름을
              이해하고, 실무에 적용할 수 있는 풀스택 개발 역량을 쌓은 교육
              과정입니다.
            </p>
          </div>
        </header>

        <div className="learning-content">
          <section className="learning-section learning-stack">
            <div className="learning-section-heading">
              <span className="learning-section-number" aria-hidden="true">
                01
              </span>
              <div>
                <p className="learning-eyebrow">Learning &amp; Practice</p>
                <h3>주요 학습 및 실습</h3>
              </div>
            </div>

            <p className="learning-section-description">
              웹 기초부터 프론트엔드, 백엔드, 데이터베이스까지 하나의 서비스가
              완성되는 전체 흐름을 학습했습니다.
            </p>

            <ul className="learning-tech-list" aria-label="학습 기술 목록">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </section>

          <section className="learning-section learning-achievements">
            <div className="learning-section-heading">
              <span className="learning-section-number" aria-hidden="true">
                02
              </span>
              <div>
                <p className="learning-eyebrow">Growth &amp; Outcomes</p>
                <h3>기술적 성과 및 역할</h3>
              </div>
            </div>

            <ol className="learning-achievement-list">
              {achievements.map(({ title, description }, index) => (
                <li key={title}>
                  <span className="achievement-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </section>
  );
}
