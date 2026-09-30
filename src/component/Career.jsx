import { careerGroups } from "../data/posts.js";

export default function Career() {
  return (
    <section className="career">
      <h1 className="lab-title">Career</h1>

      <div className="card-ui career-list">
        {careerGroups.map(({ agency, items }) => (
          <section className="career-group" key={agency}>
            <div className="card-ui-header">
              <h2 className="card-ui-title">{agency}</h2>
            </div>

            <div className="card-ui-content">
              <ul>
                {items.map(({ period, company, role, desc, link }) => (
                  <li
                    className="career-item"
                    key={`${agency}-${company}-${period}`}
                  >
                    <article>
                      <time className="career-period">{period}</time>
                      <h3 className="career-company">
                        {link ? (
                          <a href={link} target="_blank" rel="noreferrer">
                            {company}
                          </a>
                        ) : (
                          company
                        )}
                      </h3>
                      <p className="career-role">{role}</p>
                      <div className="career-description">
                        {desc
                          .trim()
                          .split("\n")
                          .map((line) => line.trim())
                          .filter(Boolean)
                          .map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
