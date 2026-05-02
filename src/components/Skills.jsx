import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import './Skill.css';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', icon: FaHtml5, progress: 95 },
    { name: 'JavaScript', icon: FaJsSquare, progress: 90 },
    { name: 'React', icon: FaReact, progress: 85 },
    { name: 'Node.js', icon: FaNodeJs, progress: 80 },
    { name: 'MongoDB', icon: FaDatabase, progress: 75 },
    { name: 'Tailwind', icon: FaCss3Alt, progress: 90 }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills Mastery
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102,126,234,0.3)"
              }}
            >
              <motion.div 
                className="skill-icon-wrapper"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="skill-icon" />
              </motion.div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <motion.span 
                className="skill-percent"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              >
                {skill.progress}%
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;