import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin,  } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon. 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'your.email@gmail.com',
      link: 'mailto:shabanatanveer@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+92 300 1234567',
      link: 'tel:+923286351213'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/yourname',
      link: 'https://www.linkedin.com/in/shabana-tanveer-b53a0b332'
    }
  ];

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                className="contact-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="contact-icon" />
                <div>
                  <h3>{item.title}</h3>
                  <a href={item.link}>{item.value}</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;