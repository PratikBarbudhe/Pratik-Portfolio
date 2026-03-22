import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, Shield, ExternalLink } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cyber-darker border-t border-cyber-border">
      {/* Gradient top border effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-cyber-primary" />
              <span className="font-mono font-bold text-lg text-cyber-text">
                <span className="text-cyber-primary">&lt;</span>
                CyberSec
                <span className="text-cyber-primary">/&gt;</span>
              </span>
            </div>
            <p className="text-cyber-muted text-sm leading-relaxed">
              MCA Cyber Security Student passionate about building secure systems
              and protecting digital assets. Open to internship opportunities.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-muted hover:text-cyber-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-muted hover:text-cyber-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-cyber-muted hover:text-cyber-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-cyber-text">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-cyber-muted hover:text-cyber-primary transition-colors text-sm flex items-center gap-1"
                >
                  <span className="text-cyber-primary/50">&gt;</span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-cyber-text">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-cyber-muted hover:text-cyber-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyber-muted hover:text-cyber-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="flex items-center gap-2 text-cyber-muted">
                <span className="text-cyber-primary">📍</span>
                <span>{personalInfo.location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyber-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cyber-muted text-sm flex items-center gap-1">
              &copy; {currentYear} {personalInfo.name || 'CyberSec Portfolio'}. Built with
              <Heart className="w-4 h-4 text-cyber-danger inline mx-1" />
              and
              <span className="text-cyber-primary font-mono">{'<code/>'}</span>
            </p>
            <p className="text-cyber-muted text-sm font-mono">
              <span className="text-cyber-primary">$</span> echo "Secure by design"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
