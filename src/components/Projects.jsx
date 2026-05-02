import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping app with Stripe payments & admin panel',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative tool with drag-drop & notifications',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'This very website! Modern animations & responsive design',
      image: 'https://images.unsplash.com/photo-1516321310764-9f3c9619b5f1?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ 
                y: -20, 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links">
                    <motion.a 
                      href={project.github} 
                      className="project-link"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      className="project-link"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="project-content"
                whileHover={{ paddingTop: "2rem" }}
              >
                <motion.h3 
                  whileHover={{ color: "#667eea" }}
                >
                  {project.title}
                </motion.h3>
                <p>{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;