export default function Skills() {
  return (
    <section className="skills">
      <h1 className="lab-title">Skills</h1>

      <article className="card-ui">
        <div className="card-ui-header">
          <span className="card-ui-icon" aria-hidden="true">
            &#60;/&#62;
          </span>
          <span className="card-ui-title">Frontend Development</span>
        </div>
        <div className="card-ui-content">
          <ul>
            <li>
              <span>HTML5</span>
            </li>
            <li>
              <span>CSS3/SCSS</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>React.js</span>
            </li>
            <li>
              <span>Node.js</span>
            </li>
            <li>
              <span>Next.js</span>
            </li>
          </ul>
        </div>
      </article>

      <article className="card-ui">
        <div className="card-ui-header">
          <span className="card-ui-icon" aria-hidden="true">
            ✨
          </span>
          <span className="card-ui-title">AI & Tools</span>
        </div>
        <div className="card-ui-content">
          <ul>
            <li>
              <span>ChatGPT</span>
            </li>
            <li>
              <span>Cursor ai</span>
            </li>
            <li>
              <span>GitHub / Git</span>
            </li>
            <li>
              <span>VS Code</span>
            </li>
            <li>
              <span>Figma</span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
