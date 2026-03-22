import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  Target,
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
  BookOpen,
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-2 mb-6">
                <User className="w-4 h-4 text-cyber-primary" />
                <span className="text-sm text-cyber-muted">About Me</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6">
                Passionate About{' '}
                <span className="text-cyber-primary">Cyber Security</span>
              </h1>

              <p className="text-lg text-cyber-muted leading-relaxed mb-6">
                {aboutData.intro}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-cyber-muted">
                  <MapPin className="w-4 h-4 text-cyber-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-cyber-muted">
                  <GraduationCap className="w-4 h-4 text-cyber-secondary" />
                  <span>{aboutData.education.degree}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-cyber-filled flex items-center justify-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-cyber flex items-center justify-center gap-2">
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-cyber-card border border-cyber-border rounded-2xl p-8 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyber-secondary/10 rounded-full blur-2xl" />

                {/* Terminal window */}
                <div className="relative bg-cyber-darker rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyber-border">
                    <span className="w-3 h-3 rounded-full bg-cyber-danger" />
                    <span className="w-3 h-3 rounded-full bg-cyber-warning" />
                    <span className="w-3 h-3 rounded-full bg-cyber-primary" />
                    <span className="ml-2 text-cyber-muted text-xs">profile.sh</span>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <span className="text-cyber-secondary">const</span>{' '}
                      <span className="text-cyber-warning">student</span> ={' '}
                      <span className="text-cyber-muted">{'{'}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-cyber-accent">degree</span>:{' '}
                      <span className="text-cyber-primary">"MCA"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyber-accent">specialization</span>:{' '}
                      <span className="text-cyber-primary">"Cyber Security"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyber-accent">year</span>:{' '}
                      <span className="text-cyber-primary">"1st Year"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyber-accent">goal</span>:{' '}
                      <span className="text-cyber-primary">"SOC Analyst"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyber-accent">status</span>:{' '}
                      <span className="text-cyber-primary">"Learning & Building"</span>
                    </p>
                    <p>
                      <span className="text-cyber-muted">{'}'}</span>;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Objective Section */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-cyber p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-cyber-primary" />
              </div>
              <h2 className="text-2xl font-bold text-cyber-text">Career Objective</h2>
            </div>
            <p className="text-cyber-muted leading-relaxed text-lg">
              {aboutData.careerObjective}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-cyber-primary" />
              Education
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-cyber p-8 relative overflow-hidden"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-primary to-cyber-secondary" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-cyber-primary/10 text-cyber-primary text-xs font-mono rounded">
                    {aboutData.education.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-cyber-text mb-2">
                  {aboutData.education.degree}
                </h3>
                <p className="text-cyber-secondary font-medium mb-2">
                  Specialization: {aboutData.education.specialization}
                </p>
                <p className="text-cyber-muted">
                  Year: {aboutData.education.year}
                </p>
              </div>
              <div className="flex items-center gap-2 text-cyber-muted">
                <Calendar className="w-5 h-5" />
                <span>2024 - Present</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-cyber-darker/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-cyber-primary" />
              Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-cyber-card border border-cyber-border rounded-lg hover:border-cyber-primary/50 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-cyber-primary flex-shrink-0 mt-0.5" />
                <span className="text-cyber-text">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title flex items-center gap-3">
              <Heart className="w-8 h-8 text-cyber-primary" />
              Areas of Interest
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {aboutData.interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-cyber-card border border-cyber-border rounded-full text-cyber-text hover:border-cyber-primary hover:text-cyber-primary transition-all duration-300 cursor-default"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-cyber p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyber-secondary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-cyber-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-cyber-text">My Learning Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-cyber-darker rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-cyber-text mb-2">Project-Driven</h3>
                <p className="text-cyber-muted text-sm">
                  I believe in learning by building real-world projects that solve actual problems.
                </p>
              </div>
              <div className="text-center p-6 bg-cyber-darker rounded-lg">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-cyber-text mb-2">Documentation-Focused</h3>
                <p className="text-cyber-muted text-sm">
                  I document everything I learn, creating resources that help others on the same path.
                </p>
              </div>
              <div className="text-center p-6 bg-cyber-darker rounded-lg">
                <div className="text-3xl mb-3">🔄</div>
                <h3 className="font-semibold text-cyber-text mb-2">Continuous Improvement</h3>
                <p className="text-cyber-muted text-sm">
                  Always seeking feedback and iterating to become a better security professional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-cyber-text mb-4">
              Want to Know More?
            </h2>
            <p className="text-cyber-muted mb-8">
              Check out my projects to see my skills in action, or get in touch to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projects" className="btn-cyber-filled">
                View Projects
              </Link>
              <Link to="/skills" className="btn-cyber">
                See My Skills
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
