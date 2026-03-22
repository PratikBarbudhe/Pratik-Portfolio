import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle,
  Star,
  BookOpen,
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

// Certification card component
const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card-cyber p-6 relative overflow-hidden group"
  >
    {/* Featured badge */}
    {cert.featured && (
      <div className="absolute top-4 right-4">
        <span className="flex items-center gap-1 px-2 py-1 bg-cyber-warning/10 text-cyber-warning text-xs font-mono rounded">
          <Star className="w-3 h-3" />
          Featured
        </span>
      </div>
    )}

    {/* Certificate image */}
    <div className="mb-4 rounded-lg overflow-hidden border border-cyber-border">
      <img
        src={cert.image}
        alt={`${cert.title} certificate`}
        className="w-full h-44 object-cover"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src =
            'https://placehold.co/1000x650/0f172a/94a3b8?text=Certificate';
        }}
      />
    </div>

    {/* Title + issuer */}
    <div className="flex items-start gap-4 mb-4">
      <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover:bg-cyber-primary/20 transition-colors">
        <Award className="w-8 h-8 text-cyber-primary" />
      </div>
      <div className="flex-1 pr-16">
        <h3 className="text-xl font-bold text-cyber-text group-hover:text-cyber-primary transition-colors">
          {cert.title}
        </h3>
        <p className="text-cyber-secondary font-medium">{cert.issuer}</p>
      </div>
    </div>

    {/* Date and ID */}
    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-cyber-muted">
      <span className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        {cert.date}
      </span>
      {cert.credentialId && cert.credentialId !== 'XXXXX' && (
        <span className="font-mono text-xs bg-cyber-darker px-2 py-1 rounded">
          ID: {cert.credentialId}
        </span>
      )}
    </div>

    {/* Optional description */}
    {cert.description && (
      <p className="text-sm text-cyber-muted mb-4 leading-relaxed">{cert.description}</p>
    )}

    {/* Key learnings */}
    {cert.keyLearnings?.length > 0 && (
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-cyber-text mb-2">Key Learnings</h4>
        <ul className="space-y-1">
          {cert.keyLearnings.map((learning) => (
            <li key={learning} className="text-sm text-cyber-muted flex items-start gap-2">
              <span className="text-cyber-primary mt-1">•</span>
              <span>{learning}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* Skills/tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {cert.skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-cyber-darker border border-cyber-border rounded-full text-xs text-cyber-text"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Verify Link */}
    {cert.credentialUrl && cert.credentialUrl !== '#' && (
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyber-primary hover:text-cyber-secondary transition-colors text-sm font-medium"
      >
        <CheckCircle className="w-4 h-4" />
        View Certificate
        <ExternalLink className="w-3 h-3" />
      </a>
    )}
  </motion.div>
);

// Timeline item component
const TimelineItem = ({ cert, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative pl-8 pb-8"
  >
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-[11px] top-6 w-0.5 h-full bg-gradient-to-b from-cyber-primary to-cyber-border" />
    )}

    {/* Timeline dot */}
    <div className="absolute left-0 top-1 w-6 h-6 bg-cyber-card border-2 border-cyber-primary rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-cyber-primary rounded-full" />
    </div>

    {/* Content */}
    <div className="card-cyber p-5 ml-4">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-lg font-bold text-cyber-text">{cert.title}</h3>
          <p className="text-cyber-secondary text-sm">{cert.issuer}</p>
        </div>
        <span className="text-cyber-muted text-sm font-mono whitespace-nowrap">
          {cert.date}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {cert.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-cyber-darker text-xs text-cyber-text rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const featuredCerts = certificationsData.filter((c) => c.featured);

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
              <Award className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm text-cyber-muted">Credentials</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6">
              Certifications & <span className="text-cyber-primary">Training</span>
            </h1>

            <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
              Professional certifications and training programs completed to validate
              my knowledge and skills in cyber security and related domains.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-primary mb-1">
                {certificationsData.length}
              </div>
              <div className="text-cyber-muted text-sm">Total Certifications</div>
            </div>
            <div className="w-px bg-cyber-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-secondary mb-1">
                {featuredCerts.length}
              </div>
              <div className="text-cyber-muted text-sm">Key Certifications</div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certificationsData.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>

          {/* Timeline View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-title text-center mb-12">
              Certification Timeline
            </h2>
            <div className="relative">
              {certificationsData.map((cert, index) => (
                <TimelineItem
                  key={cert.id}
                  cert={cert}
                  index={index}
                  isLast={index === certificationsData.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* In Progress / Planned Section */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-cyber-primary" />
              Upcoming Certifications
            </h2>
            <p className="text-cyber-muted mt-4 max-w-xl mx-auto">
              Certifications I'm currently preparing for or planning to pursue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'CompTIA Security+',
                status: 'Preparing',
                description: 'Industry-standard certification for security professionals.',
              },
              {
                title: 'CEH (Certified Ethical Hacker)',
                status: 'Planned',
                description: 'EC-Council certification for ethical hacking and penetration testing.',
              },
              {
                title: 'AWS Cloud Security',
                status: 'Planned',
                description: 'Cloud security fundamentals and best practices.',
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-6 border-dashed"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-mono rounded ${
                      cert.status === 'Preparing'
                        ? 'bg-cyber-warning/10 text-cyber-warning'
                        : 'bg-cyber-muted/10 text-cyber-muted'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-cyber-text mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-cyber-muted">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-cyber p-8 md:p-12 text-center"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">
              Commitment to Continuous Learning
            </h2>
            <p className="text-cyber-muted leading-relaxed max-w-2xl mx-auto">
              I believe certifications complement practical experience by providing
              structured knowledge and industry-recognized validation of skills.
              Combined with my hands-on project work, these certifications demonstrate
              my dedication to becoming a well-rounded security professional.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
