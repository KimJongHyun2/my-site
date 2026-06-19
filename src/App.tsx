import './App.css'

const highlights = [
  {
    value: 'AI',
    label: '현장 문제를 다루는 인공지능 실습',
  },
  {
    value: 'SW',
    label: '기획부터 구현까지 이어지는 소프트웨어 프로젝트',
  },
  {
    value: 'CAREER',
    label: '대학 전문가 성장을 위한 포트폴리오 중심 과정',
  },
]

const features = [
  '전공 역량과 실무 감각을 함께 키우는 통합 커리큘럼',
  '팀 프로젝트, 발표, 코드 리뷰를 통한 결과물 중심 학습',
  'AI/SW 분야 진로 탐색과 전문가 멘토링 연계',
]

function App() {
  return (
    <main className="site-page">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="/">
          한신대학교
        </a>
        <nav>
          <a href="#program">프로그램</a>
          <a href="#features">특장점</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero" id="program">
        <div className="hero-copy">
          <p className="eyebrow">Hanshin University AI/SW Program</p>
          <h1>한신대학교 AI/SW 대학전문가 특장</h1>
          <p className="lead">
            인공지능과 소프트웨어 역량을 기반으로 문제를 정의하고,
            구현하고, 설명할 수 있는 대학 전문가를 양성합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#features">
              특장점 보기
            </a>
            <a className="secondary-action" href="#contact">
              상담 문의
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Program summary">
          <p>2026 AI/SW 집중 과정</p>
          <strong>Project-Based Track</strong>
          <span>실습 · 멘토링 · 포트폴리오</span>
        </aside>
      </section>

      <section className="highlights" aria-label="Program highlights">
        {highlights.map((item) => (
          <article className="highlight-card" key={item.value}>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="feature-section" id="features">
        <div>
          <p className="section-kicker">Program Strengths</p>
          <h2>배우는 데서 끝나지 않고, 보여줄 수 있는 결과로 연결합니다.</h2>
        </div>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="contact-strip" id="contact">
        <p>AI/SW 대학전문가 과정 안내</p>
        <a href="mailto:contact@hs.ac.kr">contact@hs.ac.kr</a>
      </section>
    </main>
  )
}

export default App
