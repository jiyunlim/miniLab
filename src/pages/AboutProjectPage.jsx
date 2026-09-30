import { projectGroups } from "../data/posts.js";

export default function AboutProjectPage() {
  return (
    <>
      <section className="project-detail">
        <h1 className="lab-title">About Project</h1>

        <p className="project-massege">
          🔸고객사와의 보안 서약으로 실제 작업물을 담지 못한 점
          양해부탁드립니다.
        </p>

        <div className="card-ui project-list">
          {projectGroups.map(({ title, items }) => (
            <section className="project-group" key={title}>
              <div className="card-ui-header">
                <h2 className="card-ui-title">{title}</h2>
              </div>

              <table className="project-table card-ui-content">
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "*" }} />
                </colgroup>
                <thead>
                  <tr>
                    <td>프로젝트명</td>
                    <td>기간</td>
                    <td>상세내용</td>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.period}</td>
                      <td>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
