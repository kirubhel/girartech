import { MonitorPlay, Smartphone, Globe, Code2, ArrowRight, BookOpen, Star, ShieldCheck, ChevronRight, Users, Target, Zap, Mail, Phone, MapPin } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="header">
        <div className="container navbar">
          <div className="logo-container">
            <img src="/assets/logo.png" alt="Girar Systems" width="180" height="60" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a href="#services" className="nav-item">Services</a>
            <a href="#projects" className="nav-item">Our Projects</a>
            <a href="#about" className="nav-item">About Us</a>
            <a href="#gallery" className="nav-item">Gallery</a>
            <a href="#team" className="nav-item">Team</a>
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">Innovating Your Digital Future</h1>
          <p className="hero-subtitle">
            Girar Systems provides premium software solutions, web applications, and digital platforms to empower businesses and communities in Ethiopia and beyond.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Our Work <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              We specialize in creating robust, scalable, and beautifully designed digital solutions tailored to your unique challenges.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Globe size={32} />
              </div>
              <h3 className="service-title">Web Applications</h3>
              <p className="service-desc">
                High-performance web applications built with modern frameworks to ensure scale, speed, and premium user experience.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Smartphone size={32} />
              </div>
              <h3 className="service-title">Mobile Development</h3>
              <p className="service-desc">
                Native and cross-platform mobile experiences designed to engage your users directly on their devices.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Code2 size={32} />
              </div>
              <h3 className="service-title">Custom Software</h3>
              <p className="service-desc">
                Tailor-made software architectures tackling complex business logic and automating your enterprise workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Discover the platforms we've built to make an impact.
            </p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img-wrapper kokeb-bg">
                <div className="project-badge">E-Learning Platform</div>
                <div className="project-img-content">
                  <img src="/assets/project/kokeb-logo.jpg" alt="Kokeb E-Learning Logo" width="120" height="120" loading="lazy" className="project-logo" />
                  <div className="project-img-subtitle">Kids learn through play!</div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Kokeb.et</h3>
                <p className="project-desc">
                  A safe and fun learning space for kids Pre-K to Grade 4. Kokeb is an Ethiopian e-learning platform offering interactive lessons, video quests, and educational activities designed to make learning feel like playtime.
                </p>
                <div className="project-features">
                  <span className="feature-tag"><BookOpen size={16} /> Interactive Lessons</span>
                  <span className="feature-tag"><MonitorPlay size={16} /> Fun Quests</span>
                  <span className="feature-tag"><Star size={16} /> Gamified Learning</span>
                  <span className="feature-tag"><ShieldCheck size={16} /> Safe & Ad-Free</span>
                </div>
                <a href="https://kokeb.et" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{width: '100%', justifyContent: 'center'}}>
                  Visit Kokeb.et <ChevronRight size={20} />
                </a>
              </div>
            </div>
            
            {/* Can add more projects here in the future */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Girar Systems</h2>
              <h3 style={{fontSize: '1.5rem', color: 'var(--text-dark)'}}>Empowering the next generation of digital tools.</h3>
              <p>
                Girar Systems is a technology powerhouse dedicated to delivering high-quality, scalable digital solutions. We believe in the power of technology to bridge gaps, optimize processes, and unlock new opportunities for businesses and communities alike.
              </p>
              <p>
                Our team consists of passionate engineers, designers, and strategists working together to build platforms that make a real difference.
              </p>
              <div className="project-features" style={{marginTop: '2rem'}}>
                <span className="feature-tag"><Users size={16} /> Expert Team</span>
                <span className="feature-tag"><Target size={16} /> Result Oriented</span>
                <span className="feature-tag"><Zap size={16} /> Fast Delivery</span>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-inner">
                <MonitorPlay size={120} opacity={0.2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Gallery</h2>
            <p className="section-subtitle">
              A glimpse into our innovations, events, and the world of Girar Systems.
            </p>
          </div>
          
          <div className="gallery-grid">
            <div className="gallery-item large">
              <video autoPlay muted loop playsInline preload="metadata" className="gallery-video">
                <source src="/assets/gallery/v2.mp4" type="video/mp4" />
              </video>
              <div className="gallery-overlay">
                <span>Production Showcase</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/1.jpg" alt="Innovation Workspace" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/2.jpg" alt="Team Collaboration" loading="lazy" />
            </div>
            <div className="gallery-item tall">
              <img src="/assets/gallery/2026-04-16 09.40.45.jpg" alt="Girar Systems Office" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/3.jpg" alt="Software Architecture Design" loading="lazy" />
            </div>
            <div className="gallery-item wide">
              <video autoPlay muted loop playsInline preload="metadata" className="gallery-video">
                <source src="/assets/gallery/v3.mp4" type="video/mp4" />
              </video>
              <div className="gallery-overlay">
                <span>Innovation Lab</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/2026-04-16 09.41.17.jpg" alt="Tech Seminar" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/pharmacy.png" alt="HealthTech Project UI" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/slide5-scaled.jpg" alt="Enterprise Solution Interface" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/photo_2023-09-20_16-30-16.jpg" alt="Development Sprint" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/v1.jpg" alt="System Infrastructure" loading="lazy" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery/2026-04-16 09.44.18.jpg" alt="Community Event" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle">
              The visionaries driving innovation at Girar Systems.
            </p>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img-wrapper">
                <img src="/assets/team/ceo.jpg" alt="Mahlet Seyoum - CEO" width="400" height="400" loading="lazy" className="team-img" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Mahlet Seyoum</h3>
                <div className="team-role">Chief Executive Officer</div>
                <p className="team-desc">
                  Guiding Girar Systems with a passion for transformative digital solutions and a commitment to empowering businesses through cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img-wrapper">
                <img src="/assets/team/cto.jpg" alt="Kirubel Gizaw - CTO" width="400" height="400" loading="lazy" className="team-img" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Kirubel Gizaw</h3>
                <div className="team-role">Chief Technology Officer</div>
                <p className="team-desc">
                  An expert game developer and software engineer driving the technical excellence and innovation behind Girar Systems' most complex platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
          
          <div className="contact-wrapper">
            <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem', justifyContent: 'center'}}>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div className="service-icon" style={{marginBottom: 0, width: '48px', height:'48px'}}><Phone size={24} /></div>
                  <div>
                    <div style={{fontWeight: 600}}>Call Us</div>
                    <div style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>+251 963 257 123</div>
                    <div style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>+251 919 870 929</div>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div className="service-icon" style={{marginBottom: 0, width: '48px', height:'48px'}}><Mail size={24} /></div>
                  <div>
                    <div style={{fontWeight: 600}}>Email Us</div>
                    <div style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>mahletseyoumamerga@gmail.com</div>
                    <div style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>kirub.hel@gmail.com</div>
                  </div>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div className="service-icon" style={{marginBottom: 0, width: '48px', height:'48px'}}><MapPin size={24} /></div>
                <div>
                  <div style={{fontWeight: 600}}>Location</div>
                  <div style={{color: 'var(--text-light)'}}>Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>

            <div className="contact-grid">
              <div className="contact-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4959111166627!2d38.748284575798245!3d9.018444291042513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858445d598e9%3A0xbe25e45684bc7620!2sEthiopian%20Artificial%20Intelligence%20Institute!5e0!3m2!1sen!2set!4v1776320309296!5m2!1sen!2set" 
                  width="100%" 
                  height="500" 
                  style={{border: 0, borderRadius: '16px'}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={6} placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{justifyContent: 'center', marginTop: '1rem'}}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <img src="/assets/logo.png" alt="Girar Systems" width="120" height="40" loading="lazy" className="footer-logo" />
              <p className="footer-desc">
                Girar Systems is an innovative technology company dedicated to shaping the digital landscape through cutting-edge software solutions and empowering platforms.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <nav className="footer-links">
                <a href="#services" className="footer-link">Our Services</a>
                <a href="#projects" className="footer-link">Featured Projects</a>
                <a href="#about" className="footer-link">About Us</a>
                <a href="#gallery" className="footer-link">Gallery</a>
                <a href="#team" className="footer-link">Meet The Team</a>
                <a href="#contact" className="footer-link">Contact Support</a>
              </nav>
            </div>
            <div>
              <h4 className="footer-title">Contact</h4>
              <nav className="footer-links">
                <a href="mailto:mahletseyoumamerga@gmail.com" className="footer-link">mahletseyoumamerga@gmail.com</a>
                <a href="mailto:kirub.hel@gmail.com" className="footer-link">kirub.hel@gmail.com</a>
                <a href="tel:251963257123" className="footer-link">+251 963 257 123</a>
                <a href="tel:251919870929" className="footer-link">+251 919 870 929</a>
                <span className="footer-link">Addis Ababa, Ethiopia</span>
              </nav>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Girar Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
