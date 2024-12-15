import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  faGithub, 
  faReact, 
  faPython, 
  faNodeJs, 
  faDocker,
  faAws
} from '@fortawesome/free-brands-svg-icons';
import { 
  faRobot, 
  faDatabase, 
  faCloud, 
  faCodeBranch,
  faChartLine,
  faBrain
} from '@fortawesome/free-solid-svg-icons';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  icons: any[];
  category: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Proje Yönetim Sistemi',
      description: 'Makine öğrenmesi destekli proje takip ve öneri platformu',
      technologies: ['Python', 'TensorFlow', 'React', 'Machine Learning'],
      githubLink: 'https://github.com/eren/ai-proje-yonetimi',
      icons: [faPython, faRobot, faBrain],
      category: 'Yapay Zeka'
    },
    {
      id: 2,
      title: 'Bulut Mikroservis E-Ticaret',
      description: 'Ölçeklenebilir mikroservis mimarisi ile geliştirilmiş e-ticaret platformu',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'AWS', 'MongoDB'],
      githubLink: 'https://github.com/eren/bulut-eticaret',
      icons: [faNodeJs, faDocker, faCloud, faAws],
      category: 'Web Geliştirme'
    },
    {
      id: 3,
      title: 'Açık Kaynak Proje Takip',
      description: 'GitHub API entegrasyonlu açık kaynak proje yönetim uygulaması',
      technologies: ['React', 'GraphQL', 'GitHub API', 'TypeScript'],
      githubLink: 'https://github.com/eren/acik-kaynak-takip',
      icons: [faReact, faGithub, faCodeBranch],
      category: 'Açık Kaynak'
    },
    {
      id: 4,
      title: 'Veri Analiz Platformu',
      description: 'Büyük veri setleri için makine öğrenmesi destekli analiz aracı',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      githubLink: 'https://github.com/eren/veri-analiz',
      icons: [faPython, faChartLine, faDatabase],
      category: 'Veri Bilimi'
    }
  ];

  const categories = ['Tümü', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter && filter !== 'Tümü'
    ? projects.filter(project => project.category === filter)
    : projects;

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
      id="projects"
      className={`projects theme-${theme}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="projects-header card"
          variants={itemVariants}
        >
          <h2>Projelerim</h2>
          <div className="project-filters">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={filter === category ? 'active' : ''}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="project-card card"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <div className="project-card-header">
                  <div className="project-icons">
                    {project.icons.map((icon, index) => (
                      <FontAwesomeIcon key={index} icon={icon} />
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <motion.a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
