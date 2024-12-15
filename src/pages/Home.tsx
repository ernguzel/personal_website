import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { 
  faCode, 
  faLaptopCode, 
  faGraduationCap,
  faRobot,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub,
  faReact,
  faNodeJs,
  faPython
} from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
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

  const projects = [
    {
      title: 'AI Proje Yönetim Sistemi',
      description: 'Makine öğrenmesi destekli proje takip platformu',
      technologies: ['Python', 'React', 'Machine Learning'],
      icons: [faPython, faRobot],
      githubLink: 'https://github.com/eren/ai-proje-yonetimi'
    },
    {
      title: 'Bulut Mikroservis E-Ticaret',
      description: 'Ölçeklenebilir mikroservis mimarisi ile e-ticaret platformu',
      technologies: ['Node.js', 'Docker', 'Kubernetes'],
      icons: [faNodeJs, faReact],
      githubLink: 'https://github.com/eren/bulut-eticaret'
    },
    {
      title: 'Veri Analiz Platformu',
      description: 'Makine öğrenmesi destekli veri analiz aracı',
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      icons: [faPython, faDatabase],
      githubLink: 'https://github.com/eren/veri-analiz'
    }
  ];

  return (
    <div className={`home theme-${theme}`}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section className="profile-section">
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
            </div>
          </section>

          <section className="about-section">
            <h2>Hakkımda</h2>
            <p>
              Teknolojinin sürekli gelişen dünyasına tutkuyla bağlı, 
              yenilikçi ve öğrenmeye açık bir yazılım mühendisi adayıyım. 
              Full stack web geliştirme ve yapay zeka projelerinde uzmanlaşıyorum.
            </p>

            <h3>Deneyimlerim</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <FontAwesomeIcon icon={exp.icon} />
                <div>
                  <h4>{exp.title}</h4>
                  <p>{exp.description}</p>
                  <small>{exp.details}</small>
                </div>
              </div>
            ))}
          </section>

          <section className="projects-section">
            <h2>Projelerim</h2>
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-icons">
                  {project.icons.map((icon, i) => (
                    <FontAwesomeIcon key={i} icon={icon} />
                  ))}
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
