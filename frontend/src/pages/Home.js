import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Terminal, 
  Code, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  Lock,
  Scan,
  Bug,
  Server
} from 'lucide-react';
import { personalInfo, projectsData, learningJournalData } from '../data/portfolioData';
import EmailProviderMenu from '../components/EmailProviderMenu';
import profileImage from '../assets/profile/profile.jpg';

// Animated background particles
const CyberParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyber-primary/30 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, Math.random() * -500],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
);

// Terminal-style typing effect component
const TypingText = ({ text, className }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text}
      <motion.span
        className="inline-block w-3 h-5 bg-cyber-primary ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
};

// Featured project card for homepage
const FeaturedProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="card-cyber group p-6"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover:bg-cyber-primary/20 transition-colors">
        <Shield className="w-6 h-6 text-cyber-primary" />
      </div>
      <span className="text-xs font-mono text-cyber-primary bg-cyber-primary/10 px-2 py-1 rounded">
        {project.status}
      </span>
    </div>
    <h3 className="text-xl font-bold text-cyber-text mb-2 group-hover:text-cyber-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-sm text-cyber-primary font-mono mb-3">{project.subtitle}</p>
    <p className="text-cyber-muted text-sm leading-relaxed mb-4 line-clamp-3">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.slice(0, 4).map((tech) => (
        <span key={tech} className="skill-badge text-xs">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

// Stats counter
const StatItem = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-center"
  >
    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-card border border-cyber-border rounded-lg mb-3">
      <Icon className="w-6 h-6 text-cyber-primary" />
    </div>
    <div className="text-2xl md:text-3xl font-bold text-cyber-text mb-1">{value}</div>
    <div className="text-sm text-cyber-muted">{label}</div>
  </motion.div>
);

const Home = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 2);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CyberParticles />
        
        {/* Background decorations */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyber-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyber-secondary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Terminal-style intro aligned to full hero width */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-fit mx-auto items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse" />
            <span className="font-mono text-sm text-cyber-muted">
              <span className="text-cyber-primary">$</span> ./welcome.sh --status=
              <span className="text-cyber-primary">active</span>
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start lg:col-span-3"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-primary/70 via-cyber-secondary/70 to-cyber-accent/70 p-[1px]">
                  <img
                    src={profileImage}
                    alt="Pratik Barbudhe profile"
                    className="w-full h-full rounded-full object-cover bg-cyber-card"
                  />
                </div>
                <div className="absolute inset-0 rounded-full blur-2xl bg-cyber-primary/15 -z-10" />
                <div className="absolute inset-0 rounded-full shadow-[0_10px_35px_rgba(0,255,136,0.18)] -z-10" />
              </div>
            </motion.div>

            <div className="text-center lg:col-span-7 lg:max-w-4xl lg:mx-auto">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-5"
            >
              <span className="text-cyber-text">Hi, I’m </span>
              <br />
              <span className="text-cyber-text">Pratik Barbudhe</span>
              <br />
              <span className="gradient-text">CyberSecurity Enthusiast</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-cyber-muted max-w-2xl mx-auto leading-relaxed">
                <span className="text-cyber-primary font-mono">MCA Cyber Security Student</span>
                {' | '}
                <span className="text-cyber-secondary">SOC Analyst Aspirant</span>
                {' | '}
                <span className="text-cyber-accent">Security Projects Builder</span>
              </p>
            </motion.div>

            {/* Terminal command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-cyber-darker border border-cyber-border rounded-lg p-4 max-w-xl mx-auto mb-7 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-cyber-danger" />
                <span className="w-3 h-3 rounded-full bg-cyber-warning" />
                <span className="w-3 h-3 rounded-full bg-cyber-primary" />
                <span className="ml-2 text-cyber-muted text-xs">terminal</span>
              </div>
              <div className="text-left">
                <span className="text-cyber-primary">→</span>{' '}
                <span className="text-cyber-secondary">~/portfolio</span>{' '}
                <span className="text-cyber-muted">$</span>{' '}
                <TypingText 
                  text="scanning for opportunities..." 
                  className="text-cyber-text"
                />
              </div>
            </motion.div>

            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            {/* CTA Buttons - centered relative to full hero container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Link to="/projects" className="btn-cyber-filled flex items-center gap-2">
                <Shield className="w-4 h-4" />
                View My Projects
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links - centered relative to full hero container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-card border border-cyber-border rounded-lg text-cyber-muted hover:text-cyber-primary hover:border-cyber-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-card border border-cyber-border rounded-lg text-cyber-muted hover:text-cyber-secondary hover:border-cyber-secondary transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <EmailProviderMenu
                email={personalInfo.email}
                subject="Portfolio Contact"
                body="Hi Pratik,"
                iconOnly
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-cyber-muted"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-cyber-darker/50 border-y border-cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={Shield} value="3+" label="Security Projects" delay={0} />
            <StatItem icon={Bug} value="0+" label="Vulnerabilities Found" delay={0.1} />
            <StatItem icon={Code} value="5+" label="Tech Stacks" delay={0.2} />
            <StatItem icon={Lock} value="3+" label="Certifications" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-cyber-muted mt-4 max-w-2xl mx-auto">
              Security-focused projects demonstrating practical skills in vulnerability
              assessment, secure development, and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="btn-cyber inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-cyber-darker/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What I Focus On</h2>
            <p className="text-cyber-muted mt-4 max-w-2xl mx-auto">
              Building expertise in key areas of cyber security to protect organizations
              from evolving threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scan,
                title: 'Vulnerability Assessment',
                description: 'Identifying security weaknesses in web applications using industry-standard methodologies.',
              },
              {
                icon: Terminal,
                title: 'Security Tooling',
                description: 'Proficient with Burp Suite, Nmap, Wireshark, and other essential security tools.',
              },
              {
                icon: Code,
                title: 'Secure Development',
                description: 'Building applications with security-first mindset and OWASP best practices.',
              },
              {
                icon: Server,
                title: 'SOC Operations',
                description: 'Learning threat detection, incident response, and security monitoring fundamentals.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cyber-primary/10 rounded-xl mb-4 group-hover:bg-cyber-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-cyber-primary" />
                </div>
                <h3 className="text-lg font-semibold text-cyber-text mb-2">{item.title}</h3>
                <p className="text-cyber-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journal Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Learning Journal</h2>
            <p className="text-cyber-muted mt-4 max-w-2xl mx-auto">
              A quick view of my latest daily learning updates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {learningJournalData.slice(0, 3).map((entry, index) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-6"
              >
                <p className="text-xs font-mono text-cyber-primary mb-2">{entry.date}</p>
                <h3 className="text-lg font-semibold text-cyber-text mb-2">{entry.topic}</h3>
                <p className="text-sm text-cyber-muted">{entry.notes}</p>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <Link to="/learning-journal" className="btn-cyber inline-flex items-center gap-2">
              View Full Journal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-cyber p-10 md:p-16 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
              Ready to <span className="text-cyber-primary">Secure</span> With Your Team?
            </h2>
            <p className="text-cyber-muted mb-8 max-w-xl mx-auto">
              I'm actively seeking internships and entry-level positions in Cyber Security.
              Let's discuss how I can contribute to your organization's security posture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-cyber-filled">
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
