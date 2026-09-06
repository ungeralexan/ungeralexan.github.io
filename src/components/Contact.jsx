import useReveal from "../hooks/useReveal";

function Contact() {
  const reveal = useReveal();

  return (
    <section id="contact" className="section reveal" ref={reveal}>
      <div className="section-head">
        <div className="section-eyebrow">Let's talk</div>
        <h3>Contact</h3>
        <p className="section-lede">
          Open to working student roles, research collaborations, and
          interesting data problems. Reach out any time.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-row">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3 0 6-2 6-5.5.1-1.3-.4-2.6-1.3-3.6.4-1.2.4-2.5 0-3.7 0 0-1 0-3 1.4a12.3 12.3 0 0 0-6.4 0C6.7 1.9 5.7 1.9 5.7 1.9c-.5 1.2-.5 2.5 0 3.7A5.4 5.4 0 0 0 4.4 9.1c0 3.5 3 5.5 6 5.5a3.5 3.5 0 0 0-1 2.6V21" />
          </svg>
          <a href="https://github.com/ungeralexan" target="_blank" rel="noreferrer">
            github.com/ungeralexan
          </a>
        </div>

        <div className="contact-row">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6 10-6" />
          </svg>
          <a href="mailto:yourmail@example.com">yourmail@example.com</a>
          <span className="tag">placeholder — add your email</span>
        </div>

        <div className="contact-row">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Add your LinkedIn link here
          </a>
          <span className="tag">placeholder — add your link</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
