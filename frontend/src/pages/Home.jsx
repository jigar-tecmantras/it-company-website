import React from 'react';

const services = [
  {
    title: 'Cloud-native Engineering',
    body: 'Modern cloud apps, Kubernetes automation, and multi-region deployments with observability by design.',
  },
  {
    title: 'Digital Transformation',
    body: 'Process automation, data mesh designs, and UX modernization for enterprise-grade experiences.',
  },
  {
    title: 'Managed Security',
    body: 'Proactive threat monitoring, Zero Trust controls, and incident response orchestration.',
  },
];

const testimonials = [
  {
    name: 'Samira Ortiz',
    title: 'VP of Product @ Brightflow',
    quote: 'Atlas IT took our beta roadmap from concept to production in under eight weeks with flawless delivery.',
  },
  {
    name: 'Leo Duncan',
    title: 'CIO @ Northmont Logistics',
    quote: 'Their security playbook delivered measurable savings and better uptime across our fleet of apps.',
  },
];

const partnerLogos = ['EnergyX', 'PulseHealth', 'Nexera', 'Crestwave'];

const Home = () => (
  <section className="home-page">
    <div className="section-card hero">
      <div className="hero-badge">Full-stack IT services</div>
      <h1>Enterprise-grade innovation, delivered with precision.</h1>
      <p>
        We help ambitious teams build resilient cloud platforms, orchestrate data across hybrid infrastructure,
        and secure every layer of their delivery stack with measurable outcomes.
      </p>
      <div className="hero-metrics">
        <div className="metric-pill">
          <strong>+12</strong>
          <span>Years guiding enterprise teams</span>
        </div>
        <div className="metric-pill">
          <strong>300+</strong>
          <span>Successfully launched products</span>
        </div>
        <div className="metric-pill">
          <strong>24/7</strong>
          <span>Security monitoring squad</span>
        </div>
      </div>
    </div>

    <div className="section-card services">
      <h2>What we solve</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="section-card testimonials">
      <h2>Trusted by growth-minded leaders</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <small>
              {testimonial.name} · {testimonial.title}
            </small>
          </article>
        ))}
      </div>
    </div>

    <div className="section-card cta">
      <h2>Ready to reshape your IT experiences?</h2>
      <p>Schedule a discovery call and we will align our experts with your upcoming initiatives.</p>
      <button type="button">Book a discovery call</button>
      <div className="partner-logos">
        {partnerLogos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
