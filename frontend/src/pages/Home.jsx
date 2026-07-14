import React from 'react';

const services = [
  { title: 'Cloud-native Engineering', body: 'Modern cloud apps, Kubernetes, and multi-region deployment expertise.' },
  { title: 'Digital Transformation', body: 'Process automation, data analytics, and UX modernization for enterprise teams.' },
  { title: 'Managed Security', body: 'Proactive threat monitoring, Zero Trust, and incident response assurance.' },
];

const testimonials = [
  { name: 'Samira Ortiz', title: 'VP of Product @ Brightflow', quote: 'Atlas IT took our beta roadmap from concept to production in under eight weeks.' },
  { name: 'Leo Duncan', title: 'CIO @ Northmont Logistics', quote: 'Their cloud governance playbook delivered measurable savings and better uptime.' },
];

const partnerLogos = ['EnergyX', 'PulseHealth', 'Nexera', 'Crestwave'];

const Home = () => (
  <section className="home-page">
    <div className="hero">
      <p className="helper-text">Full-stack IT agency</p>
      <h1>Enterprise-grade innovation, delivered with care.</h1>
      <p>
        We help ambitious companies build resilient digital platforms, orchestrate data across hybrid cloud,
        and secure every layer of their delivery stack.
      </p>
      <div className="experience">
        <div>
          <strong>+12</strong> years guiding enterprise teams
        </div>
        <div>
          <strong>300+</strong> successful launches
        </div>
        <div>
          <strong>24/7</strong> secure operations support
        </div>
      </div>
    </div>

    <div className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="testimonials">
      <h2>Trusted by leaders</h2>
      <div className="services-grid">
        {testimonials.map((test) => (
          <article className="testimonial-card" key={test.name}>
            <p>"{test.quote}"</p>
            <small>{test.name} · {test.title}</small>
          </article>
        ))}
      </div>
    </div>

    <div className="cta">
      <h2>Ready to reshape your IT experiences?</h2>
      <p>Schedule a discovery call and we will align our experts with your upcoming initiatives.</p>
      <div className="partner-logos">
        {partnerLogos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Home;
