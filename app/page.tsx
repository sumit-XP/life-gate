'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, Minus, X } from 'lucide-react'

const services = [
  { number: '01', title: 'Initial consultation', text: 'A dedicated conversation to understand your needs, answer questions, and consider appropriate next steps.' },
  { number: '02', title: 'Acupuncture', text: 'Traditional acupuncture offered as part of an individualized approach to Chinese medicine care.' },
  { number: '03', title: 'Acupressure', text: 'A hands-on practice that may be discussed as part of your care and learning at the center.' },
  { number: '04', title: 'Cupping therapy', text: 'An established traditional practice offered thoughtfully and in context with your individual needs.' },
  { number: '05', title: 'Chinese herbal medicine', text: 'Herbal medicine may be considered where appropriate as part of a broader treatment conversation.' },
  { number: '06', title: 'Education & training', text: 'Classes and professional learning in Chinese medicine and related mind–body practices.' },
]

const navItems = [
  ['Care & Services', '#services'],
  ['About Justin', '#about'],
  ['Classes & Workshops', '#education'],
  ['What to Expect', '#expect'],
  ['Contact', '#contact'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="site-shell">
      <div className="announcement">Traditional Chinese medicine in Chicago <span>·</span> Established 1994</div>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Life Gate Center home"><span>Life Gate</span><small>Center</small></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Request a consultation <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Traditional Chinese medicine <span className="rule" /></p>
          <h1>Traditional wisdom.<br /><em>Individualized care.</em></h1>
          <p className="hero-intro">Explore traditional Chinese medicine and a thoughtful, whole-person approach to care at Life Gate Center in Chicago.</p>
          <div className="hero-actions"><a className="button dark" href="#contact">Request a consultation <ArrowRight size={16} /></a><a className="text-link" href="#services">Explore our services <ArrowDownRight size={16} /></a></div>
          <p className="hero-note">A considered place to begin a conversation about your well-being.</p>
        </div>
        <div className="hero-image-wrap"><img src="/life-gate-treatment.png" alt="Sunlit, quiet treatment room at Life Gate Center" /><div className="image-caption"><span>Life Gate Center</span><span>Chicago, Illinois</span></div></div>
      </section>

      <section className="trust-strip" aria-label="Practice credentials">
        <div><strong>30<span>+</span></strong><small>Years of practice</small></div><div><strong>1994</strong><small>Center founded</small></div><div><strong>01</strong><small>Individual approach</small></div><p>Led by <b>Justin Pomeroy</b><br />Licensed acupuncturist · NCCAOM Diplomate</p>
      </section>

      <section className="intro section-grid" id="about">
        <div className="section-label">01 <span>About the center</span></div>
        <div className="intro-content"><p className="eyebrow">A wider view of care</p><h2>Care that considers <em>the whole person.</em></h2><p className="body-copy">At Life Gate Center, traditional Chinese medicine is approached as a thoughtful conversation between practitioner and patient. We make space to understand your individual circumstances, answer your questions, and discuss options that may be appropriate for you.</p><a className="text-link" href="#about-justin">Learn about our approach <ArrowRight size={16} /></a></div>
        <div className="intro-aside"><div className="botanical-mark">◌</div><p>"The practice of care begins with paying attention."</p><span>— Life Gate Center</span></div>
      </section>

      <section className="services-section" id="services"><div className="section-heading"><div><p className="eyebrow">Care & services</p><h2>Ways to begin.</h2></div><p>Learn more about the practices offered at Life Gate Center, and contact us with questions about whether they may be right for you.</p></div><div className="service-grid">{services.map((service) => <a className="service-card" href="#contact" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-link">Explore <ArrowUpRight size={15} /></span></a>)}</div></section>

      <section className="practitioner section-grid" id="about-justin"><div className="section-label">02 <span>The practitioner</span></div><div className="portrait-placeholder"><span>JP</span><small>Portrait coming soon</small></div><div className="practitioner-copy"><p className="eyebrow">Meet Justin Pomeroy</p><h2>Experience shaped by practice, <em>study, and teaching.</em></h2><p className="body-copy">Justin Pomeroy is a licensed acupuncturist and NCCAOM Diplomate in Acupuncture. His work brings together traditional Chinese medicine, years of clinical practice, and a deep commitment to education.</p><p className="body-copy">He is also a trained counselor certified in Internal Family Systems therapy, offering a perspective that honors the relationship between mind, body, and lived experience.</p><a className="text-link" href="#contact">Meet Justin Pomeroy <ArrowRight size={16} /></a></div></section>

      <section className="expect" id="expect"><div className="expect-heading"><p className="eyebrow">Your first visit</p><h2>A thoughtful place<br /><em>to begin.</em></h2><a className="button light" href="#contact">Contact the center <ArrowRight size={16} /></a></div><div className="steps">{[['01','Reach out','Contact the center with questions or request an initial consultation.'],['02','Discuss your needs','Learn about the practice and discuss whether its services may be appropriate.'],['03','Understand your options','Ask questions and discuss possible next steps with the practitioner.']].map(([num,title,text]) => <div className="step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="education" id="education"><div className="education-copy"><p className="eyebrow">Learning at the center</p><h2>Knowledge is a practice<br /><em>worth sharing.</em></h2><p className="body-copy">Life Gate Center has offered educational opportunities in Chinese medicine and related practices, including meditation, Qi Gong, Tai Chi, acupressure, chirology, and professional training.</p><a className="text-link" href="#contact">Ask about classes & workshops <ArrowRight size={16} /></a></div><div className="education-card"><span>Coming into focus</span><h3>Classes &<br />workshops</h3><p>Current schedules and availability are shared by inquiry.</p><ArrowDownRight size={22} /></div></section>

      <section className="contact-section" id="contact"><div className="contact-info"><p className="eyebrow">Find your way here</p><h2>Let's start<br /><em>a conversation.</em></h2><p className="body-copy">Questions are welcome. Reach out to learn more about Life Gate Center and discuss whether an initial consultation may be a good next step.</p><address>Life Gate Center<br />2701 N Southport Ave<br />Chicago, IL 60614</address><a className="contact-line" href="https://maps.google.com/?q=2701+N+Southport+Ave+Chicago+IL+60614">Get directions <ArrowUpRight size={15} /></a></div><form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Thank you for reaching out.</h3><p>We've received your inquiry and will be in touch. Please call the center directly if your question is time-sensitive.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div> : <><p className="form-kicker">Send an inquiry</p><label>Name<input required name="name" autoComplete="name" /></label><label>Email<input required type="email" name="email" autoComplete="email" /></label><label>How can we help?<textarea required name="message" rows={4} /></label><button className="button dark" type="submit">Send inquiry <ArrowRight size={16} /></button><small>We ask that you do not include detailed medical information in this form.</small></>}</form></section>

      <footer className="footer"><div className="footer-top"><a href="#top" className="wordmark inverse"><span>Life Gate</span><small>Center</small></a><p>Traditional Chinese medicine,<br />thoughtful individual care.</p><a className="footer-cta" href="#contact">Request a consultation <ArrowRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 Life Gate Center</span><span>Chicago, Illinois</span><span><a href="#contact">Contact</a> <i>·</i> <a href="#services">Services</a> <i>·</i> <a href="#top">Back to top ↑</a></span></div></footer>
    </main>
  )
}

function ArrowUpRight({ size }: { size: number }) { return <ArrowRight size={size} className="arrow-up-right" /> }
