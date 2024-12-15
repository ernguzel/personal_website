import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { 
      icon: faGithub, 
      href: 'https://github.com/eren', 
      label: 'GitHub' 
    },
    { 
      icon: faLinkedin, 
      href: 'https://linkedin.com/in/eren', 
      label: 'LinkedIn' 
    },
    { 
      icon: faTwitter, 
      href: 'https://twitter.com/eren', 
      label: 'Twitter' 
    },
    { 
      icon: faEnvelope, 
      href: 'mailto:eren@example.com', 
      label: 'Email' 
    }
  ];

  return (
    <footer className={`footer theme-${theme}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Eren Güzel. Tüm hakları saklıdır.</p>
          </div>
          
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={link.icon} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
