import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const fullText = "Shabana Tanveer";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 0.5 + 0.1
  }));

  return (
    <section id="home" className="hero">

      {/* Background Particles */}
      <div className="particles-bg">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="particle"
            animate={{
              x: [particle.x, particle.x + 20, particle.x],
              y: [particle.y, particle.y - 30, particle.y],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: particle.id * 0.1
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{typedText}</span>
            </h1>

            <h2 className="hero-subtitle">Full Stack Developer</h2>

            <p className="hero-description">
              I craft stunning digital experiences with clean code...
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn btn-secondary">Hire Me</a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div className="hero-image">
            <img
              src="/images/image.png"
              alt="Shabana Tanveer"
              className="profile-pic"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;