import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { 
  faGraduationCap, 
  faCode, 
  faLaptopCode, 
  faEnvelope,
  faMapMarkerAlt,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact,
  faNodeJs,
  faPython,
  faJsSquare,
  faDocker,
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      icon: faGraduationCap,
      title: 'Eğitim',
      description: 'Bilgisayar Mühendisliği Lisans Programı',
      details: 'Mezuniyet Beklenen Tarih: 2025'
    },
    {
      icon: faCode,
      title: 'Yazılım Geliştirme',
      description: 'Full Stack Web Geliştirme',
      details: 'React, Node.js, TypeScript Uzmanlığı'
    },
    {
      icon: faLaptopCode,
      title: 'Teknoloji İlgi Alanları',
      description: 'Yapay Zeka ve Bulut Bilişim',
      details: 'Machine Learning, DevOps, Mikroservisler'
    }
  ];

  const skills = [
    { icon: faReact, name: 'React', level: 90 },
    { icon: faNodeJs, name: 'Node.js', level: 85 },
    { icon: faPython, name: 'Python', level: 80 },
    { icon: faJsSquare, name: 'JavaScript', level: 90 },
    { icon: faDocker, name: 'Docker', level: 75 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      id="about"
      className={`about theme-${theme}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="profile-section card"
            variants={itemVariants}
          >
            <div className="profile-image">
              <img 
                src="/erenlogo.jpg" 
                alt="Eren Güzel Profil Resmi" 
                className="profile-img"
              />
            </div>
            <div className="profile-info">
              <h2>Eren Güzel</h2>
              <p>Bilgisayar Mühendisliği Öğrencisi</p>
              <div className="contact-details">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>eren@example.com</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
              <div className="social-links">
                {[
                  { icon: faGithub, href: 'https://github.com/eren' },
                  { icon: faLinkedin, href: 'https://linkedin.com/in/eren' },
                  { icon: faTwitter, href: 'https://twitter.com/eren' }
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="experiences-section card"
            variants={itemVariants}
          >
            <h3>Deneyimler</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <FontAwesomeIcon icon={exp.icon} />
                  <h4>{exp.title}</h4>
                </div>
                <p>{exp.description}</p>
                <small>{exp.details}</small>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="skills-section card"
            variants={itemVariants}
          >
            <h3>Teknolojik Yetenekler</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={skill.icon} />
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-level" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="certifications-section card"
            variants={itemVariants}
          >
            <h3>Sertifikalar</h3>
            <div className="certification-item">
              <FontAwesomeIcon icon={faCertificate} />
              <div>
                <h4>React Uzmanı Sertifikası</h4>
                <small>Udemy - 2023</small>
              </div>
            </div>
            <div className="certification-item">
              <FontAwesomeIcon icon={faCertificate} />
              <div>
                <h4>TypeScript Gelişmiş Eğitim</h4>
                <small>Coursera - 2022</small>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
