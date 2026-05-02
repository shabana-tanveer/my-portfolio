
import { motion } from 'framer-motion';
import { FaAward, FaFolder, FaUsers } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaAward, number: '50+', label: 'Projects' },
    { icon: FaFolder, number: '2+', label: 'Years Exp' },
    { icon: FaUsers, number: '100%', label: 'Satisfaction' }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a passionate Full Stack Developer with 2+ years of experience creating 
            responsive websites and web applications. I specialize in modern technologies 
            like React, Node.js, and Tailwind CSS. I love turning complex problems into 
            simple, beautiful solutions.
          </motion.p>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="stat-icon" />
                <div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;