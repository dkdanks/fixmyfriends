const exampleFunds = [
  {
    title: "Fix My Friend's Rent",
    amount: "$2,400",
    blurb: "Chip in to cover a month of breathing room instead of handing over awkward cash in an envelope.",
  },
  {
    title: "Fix My Friend's Hair",
    amount: "$180",
    blurb: "Turn a birthday joke into a surprisingly thoughtful reset before their next big night out.",
  },
  {
    title: "Fix My Friend's Gym Era",
    amount: "$720",
    blurb: "They've been saying 'this is my year' since 2021. Friends can lovingly fund the membership and call the bluff.",
  },
];

const steps = [
  "Create a fund around one practical thing your friend actually wants, needs, or keeps joking about.",
  "Share the link in the group chat so people can contribute with Apple Pay, Google Pay, or card in seconds.",
  "Send the finished fund to the birthday friend by email or message so they can use it for the reason everyone chipped in.",
];

const principles = [
  "Feels like a real gift, not a money transfer.",
  "Lets the organiser tell the story behind the fund.",
  "Works for sincere, useful, or lightly chaotic birthday energy.",
  "Simple pricing: we make 4% per transaction.",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Group gifting with a reason</p>
          <h1>Fix the thing your friend actually talks about.</h1>
          <p className="lede">
            `fixmyfreinds.com` is a group funding platform for practical birthday gifts. One friend sets up the fund,
            everyone chips in, and the final gift lands with a story attached instead of feeling like plain cash.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#how-it-works">
              Sketch the MVP
            </a>
            <a className="button button-secondary" href="#examples">
              See example funds
            </a>
          </div>
          <ul className="principles" aria-label="Key product principles">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>Live concept</span>
            <span>Birthday fund</span>
          </div>

          <div className="hero-card-body">
            <p className="card-kicker">Campaign title</p>
            <h2>Fix My Friend&apos;s Rent</h2>
            <p className="card-text">
              Help Maya stop pretending everything is &quot;totally fine&quot; and cover one month of rent for her
              birthday.
            </p>

            <div className="progress-block">
              <div className="progress-copy">
                <strong>$1,860 raised</strong>
                <span>of $2,400 goal</span>
              </div>
              <div className="progress-track" aria-hidden="true">
                <div className="progress-fill" />
              </div>
            </div>

            <div className="chip-row">
              <span>Apple Pay</span>
              <span>Google Pay</span>
              <span>Card</span>
            </div>
          </div>

          <div className="hero-card-footer">
            <p>12 friends contributed</p>
            <p>4% transaction fee</p>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Built for the group chat, not a spreadsheet.</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step}>
              <span className="step-number">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="examples">
        <div className="section-heading">
          <p className="eyebrow">Example funds</p>
          <h2>Useful, meaningful, and occasionally a little ruthless.</h2>
        </div>
        <div className="examples-grid">
          {exampleFunds.map((fund) => (
            <article className="example-card" key={fund.title}>
              <p className="example-amount">{fund.amount}</p>
              <h3>{fund.title}</h3>
              <p>{fund.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section narrative">
        <div>
          <p className="eyebrow">Why this works</p>
          <h2>Cash feels awkward. A reason feels thoughtful.</h2>
        </div>
        <p className="narrative-copy">
          The product sweet spot is turning plain money into a story friends are excited to contribute to. That story
          might be deeply practical, genuinely supportive, or funny enough that the whole group wants in. The recipient
          can spend it on that exact thing or simply claim the money, but the gift arrives with intention.
        </p>
      </section>
    </main>
  );
}
