import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Shield,
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Code,
  Folder,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const ProjectImage = ({ project }) => (
  <div className="relative w-full aspect-video overflow-hidden border-b border-cyber-border">
    {/* <div className="relative w-full overflow-hidden border-b border-cyber-border"> */}
    <img
      src={project.image}
      alt={`${project.title} preview`}
      className="w-full h-full object-contain"
      loading="lazy"
      onError={(event) => {
        event.currentTarget.src =
          'https://placehold.co/1200x700/0f172a/94a3b8?text=Project+Preview';
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/70 via-transparent to-transparent" />
  </div>
);

const ProjectCard = ({ project, index, isExpanded, onToggle, isHighlighted }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card-cyber overflow-hidden transition-all duration-500 ${
        isHighlighted ? 'ring-2 ring-cyber-primary shadow-[0_0_24px_rgba(0,255,136,0.25)]' : ''
      }`}
    >
      {/* Project visual helps visitors quickly evaluate the project */}
      <ProjectImage project={project} />

      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-lg ${
                project.featured
                  ? 'bg-cyber-primary/10'
                  : 'bg-cyber-secondary/10'
              }`}
            >
              {project.featured ? (
                <Shield className="w-6 h-6 text-cyber-primary" />
              ) : (
                <Folder className="w-6 h-6 text-cyber-secondary" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyber-text">
                {project.title}
              </h3>
              <p className="text-sm text-cyber-primary font-mono">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="px-2 py-1 bg-cyber-warning/10 text-cyber-warning text-xs font-mono rounded">
                Featured
              </span>
            )}
            <span className="px-2 py-1 bg-cyber-primary/10 text-cyber-primary text-xs font-mono rounded">
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-cyber-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-3 py-1 bg-cyber-darker border border-cyber-border rounded-full text-xs text-cyber-text"
            >
              <Code className="w-3 h-3 text-cyber-secondary" />
              {tech}
            </span>
          ))}
        </div>

        {/* University Badge (if applicable) */}
        {project.university && (
          <div className="flex items-center gap-2 text-sm text-cyber-muted mb-4">
            <span className="text-cyber-accent">🎓</span>
            <span>{project.university}</span>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <button
          type="button"
          onClick={onToggle}
          className="relative z-10 flex items-center gap-2 text-cyber-primary hover:text-cyber-secondary transition-colors text-sm font-medium"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Details
            </>
          )}
        </button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-cyber-border">
              {/* Features */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-cyber-text mb-3">
                  <CheckCircle className="w-4 h-4 text-cyber-primary" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-cyber-muted"
                    >
                      <span className="text-cyber-primary mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security Relevance */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-cyber-text mb-3">
                  <AlertTriangle className="w-4 h-4 text-cyber-warning" />
                  Security Relevance
                </h4>
                <p className="text-sm text-cyber-muted bg-cyber-darker p-4 rounded-lg border-l-2 border-cyber-warning">
                  {project.securityRelevance}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber text-xs py-2 px-4 inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="btn-cyber text-xs py-2 px-4 inline-flex items-center gap-2 opacity-50 cursor-not-allowed"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-2 opacity-50 cursor-not-allowed"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const [expandedProjectIds, setExpandedProjectIds] = useState({});
  const [highlightedProjectId, setHighlightedProjectId] = useState(null);
  const projectRefs = useRef({});

  const focusedProjectId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const fromQuery = Number(params.get('project'));
    const fromState = Number(location.state?.focusProjectId);
    return Number.isFinite(fromQuery) && fromQuery > 0
      ? fromQuery
      : Number.isFinite(fromState) && fromState > 0
      ? fromState
      : null;
  }, [location.search, location.state]);

  useEffect(() => {
    if (!focusedProjectId) return;
    // Ensure the target project is visible even if user last selected another filter.
    setFilter('all');
    // Auto-expand and highlight the selected project from homepage cards.
    setExpandedProjectIds((prev) => ({ ...prev, [focusedProjectId]: true }));
    setHighlightedProjectId(focusedProjectId);

    // Retry briefly so scroll works reliably after route transition/render.
    const scrollWithOffset = (element) => {
      const navbarOffsetPx = 110; // fixed navbar + breathing room
      const top = element.getBoundingClientRect().top + window.scrollY - navbarOffsetPx;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    let attempts = 0;
    const maxAttempts = 30;
    const scrollTimer = setInterval(() => {
      const element = projectRefs.current[focusedProjectId];
      attempts += 1;
      if (element) {
        scrollWithOffset(element);
        clearInterval(scrollTimer);
      } else if (attempts >= maxAttempts) {
        clearInterval(scrollTimer);
      }
    }, 60);

    const highlightTimer = setTimeout(() => setHighlightedProjectId(null), 3000);
    return () => {
      clearInterval(scrollTimer);
      clearTimeout(highlightTimer);
    };
  }, [focusedProjectId]);

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : filter === 'featured'
      ? projectsData.filter((p) => p.featured)
      : projectsData;

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-2 mb-6">
              <Folder className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm text-cyber-muted">My Work</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6">
              Security <span className="text-cyber-primary">Projects</span>
            </h1>

            <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
              A collection of security-focused projects demonstrating practical
              skills in vulnerability assessment, secure development, and
              automation. Each project addresses real-world security challenges.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-cyber-primary text-cyber-dark'
                  : 'bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-text'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-cyber-primary text-cyber-dark'
                  : 'bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-text'
              }`}
            >
              Featured
            </button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} ref={(el) => { projectRefs.current[project.id] = el; }}>
                <ProjectCard
                  project={project}
                  index={index}
                  isExpanded={Boolean(expandedProjectIds[project.id])}
                  onToggle={() =>
                    setExpandedProjectIds((prev) => ({
                      ...prev,
                      [project.id]: !prev[project.id],
                    }))
                  }
                  isHighlighted={highlightedProjectId === project.id}
                />
              </div>
            ))}
          </div>

          {/* More Projects Coming */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card-cyber p-8 max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-cyber-text mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-cyber-muted">
                I'm constantly working on new security projects and tools.
                Follow me on GitHub to stay updated!
              </p>
              <a
                href="https://github.com/PratikBarbudhe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber mt-6 inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Follow on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Projects', value: projectsData.length },
              { label: 'Featured', value: projectsData.filter((p) => p.featured).length },
              { label: 'Technologies Used', value: '10+' },
              { label: 'Security Focus', value: '100%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyber-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-cyber-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
