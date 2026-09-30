const CodeToken = ({ children }) => (
  <code className="guide-code-token">{children}</code>
);

export default function GuidePage() {
  return (
    <section className="component-guide">
      <h1 className="lab-title">Components Guide</h1>

      <div className="guide-card-grid">
        <article className="guide-card">
          <h2 className="guide-card-title">Button</h2>
          <p className="guide-text">
            버튼 사용 가이드: 기본 버튼은 <CodeToken>.btn</CodeToken> 클래스를
            사용합니다.
          </p>

          <ul className="guide-sample guide-button-sample" aria-label="버튼 예시">
            <li>
              <button className="btn btn-primary btn-sm" type="button">
                확인
              </button>
            </li>
            <li>
              <button className="btn btn-secondary btn-md" type="button">
                취소
              </button>
            </li>
            <li>
              <button className="btn btn-outline btn-lg" type="button">
                테두리
              </button>
            </li>
          </ul>

          <ul className="guide-list">
            <li>
              <strong>크기:</strong> <CodeToken>.btn-sm</CodeToken>,{" "}
              <CodeToken>.btn-md</CodeToken>, <CodeToken>.btn-lg</CodeToken>
            </li>
            <li>
              <strong>스타일:</strong> <CodeToken>.btn-primary</CodeToken> (주요),{" "}
              <CodeToken>.btn-secondary</CodeToken> (보조),{" "}
              <CodeToken>.btn-outline</CodeToken> (테두리)
            </li>
            <li>
              <strong>접근성:</strong> 버튼에는 명확한 텍스트 레이블을 사용하고
              필요한 경우 <CodeToken>aria-label</CodeToken>을 추가합니다.
            </li>
            <li>
              폼 제출 버튼은 <CodeToken>type=&quot;submit&quot;</CodeToken>을,
              일반 버튼은 <CodeToken>type=&quot;button&quot;</CodeToken>을 명시합니다.
            </li>
          </ul>

          <div className="guide-example">
            <strong>예시:</strong>
            <pre>
              <code>{`<button class="btn btn-primary btn-sm" type="button">확인</button>`}</code>
            </pre>
          </div>
        </article>

        <article className="guide-card">
          <h2 className="guide-card-title">Label</h2>
          <p className="guide-text">
            라벨 사용 가이드: 기본 라벨은 <CodeToken>.label-txt</CodeToken>{" "}
            클래스를 사용합니다.
          </p>

          <ul className="guide-sample guide-label-sample" aria-label="라벨 예시">
            <li>
              <span className="label-txt is-default">기본 라벨</span>
            </li>
            <li>
              <span className="label-txt is-primary">주요 라벨</span>
            </li>
            <li>
              <span className="label-txt is-success">성공 라벨</span>
            </li>
            <li>
              <span className="label-txt is-warning">경고 라벨</span>
            </li>
            <li>
              <span className="label-txt is-danger">위험 라벨</span>
            </li>
          </ul>

          <ul className="guide-list">
            <li>
              <strong>스타일:</strong> <CodeToken>.is-default</CodeToken> (기본),{" "}
              <CodeToken>.is-primary</CodeToken> (주요),{" "}
              <CodeToken>.is-success</CodeToken> (성공),{" "}
              <CodeToken>.is-warning</CodeToken> (경고),{" "}
              <CodeToken>.is-danger</CodeToken> (위험)
            </li>
            <li>
              <strong>접근성:</strong> 라벨에는 명확한 텍스트를 사용하고 필요한
              경우 <CodeToken>aria-label</CodeToken>을 추가합니다.
            </li>
          </ul>

          <div className="guide-example">
            <strong>예시:</strong>
            <pre>
              <code>{`<span class="label-txt is-primary" aria-label="주요 라벨">주요 라벨</span>`}</code>
            </pre>
          </div>
        </article>

        <article className="guide-card">
          <h2 className="guide-card-title">Icon</h2>
          <p className="guide-text">
            아이콘 사용 가이드: 기본 아이콘은 <CodeToken>.ico</CodeToken>,{" "}
            <CodeToken>.ic-아이콘명</CodeToken>,{" "}
            <CodeToken>.ic-s-사이즈변수</CodeToken> 클래스를 사용합니다.
          </p>

          <ul className="guide-sample guide-icon-sample" aria-label="아이콘 예시">
            <li>
              <span className="ico ic-info ic-s-sm" role="img" aria-label="정보" />
            </li>
            <li>
              <span className="ico ic-x ic-s-md" role="img" aria-label="닫기" />
            </li>
            <li>
              <span
                className="ico ic-search ic-s-md"
                role="img"
                aria-label="검색"
              />
            </li>
            <li>
              <span
                className="ico ic-setting ic-s-lg"
                role="img"
                aria-label="설정"
              />
            </li>
          </ul>

          <ul className="guide-list">
            <li>
              <strong>아이콘 모양:</strong> <CodeToken>.ic-info</CodeToken> (정보),{" "}
              <CodeToken>.ic-x</CodeToken> (닫기),{" "}
              <CodeToken>.ic-search</CodeToken> (검색),{" "}
              <CodeToken>.ic-setting</CodeToken> (설정)
            </li>
            <li>
              <strong>아이콘 크기:</strong> <CodeToken>.ic-s-sm</CodeToken> (작게),{" "}
              <CodeToken>.ic-s-md</CodeToken> (중간),{" "}
              <CodeToken>.ic-s-lg</CodeToken> (크게)
            </li>
            <li>
              <strong>접근성:</strong> 의미가 있는 아이콘에는 명확한 대체
              레이블을 제공합니다.
            </li>
          </ul>

          <div className="guide-example">
            <strong>예시:</strong>
            <pre>
              <code>{`<span class="ico ic-info ic-s-lg" aria-label="정보 아이콘"></span>`}</code>
            </pre>
          </div>
        </article>

        <article className="guide-card">
          <h2 className="guide-card-title">Input</h2>
          <p className="guide-text">
            Input 사용 가이드: 기본 Input은 <CodeToken>.input-form</CodeToken>{" "}
            클래스로 감싸 사용합니다.
          </p>

          <ul className="guide-sample guide-input-sample" aria-label="입력창 예시">
            <li>
              <div className="input-form input-s-sm">
                <label htmlFor="guide-text" className="input-label">
                  텍스트를 입력해 주세요.
                </label>
                <input
                  type="text"
                  id="guide-text"
                  className="input-field"
                  placeholder="텍스트를 입력하세요"
                />
              </div>
            </li>
            <li>
              <div className="input-form input-s-md">
                <label htmlFor="guide-content" className="input-label">
                  콘텐츠를 입력해 주세요.
                </label>
                <input
                  type="text"
                  id="guide-content"
                  className="input-field"
                  placeholder="콘텐츠를 입력하세요"
                />
              </div>
            </li>
            <li>
              <div className="input-form input-s-lg">
                <label htmlFor="guide-email" className="input-label">
                  이메일을 입력해 주세요.
                </label>
                <input
                  type="email"
                  id="guide-email"
                  className="input-field"
                  placeholder="이메일을 입력하세요"
                />
              </div>
            </li>
          </ul>

          <ul className="guide-list">
            <li>
              <strong>Input 크기:</strong> <CodeToken>.input-s-sm</CodeToken> (작게),{" "}
              <CodeToken>.input-s-md</CodeToken> (중간),{" "}
              <CodeToken>.input-s-lg</CodeToken> (크게)
            </li>
            <li>
              <strong>접근성:</strong> Input에는 반드시{" "}
              <CodeToken>&lt;label&gt;</CodeToken> 태그를 사용합니다.
            </li>
          </ul>

          <div className="guide-example">
            <strong>예시:</strong>
            <pre>
              <code>{`<div class="input-form input-s-md">
  <label for="input-text" class="input-label">텍스트를 입력해 주세요.</label>
  <input type="text" id="input-text" class="input-field" placeholder="텍스트를 입력하세요">
</div>`}</code>
            </pre>
          </div>
        </article>
      </div>
    </section>
  );
}
