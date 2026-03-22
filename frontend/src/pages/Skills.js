import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Terminal,
  Code,
  Globe,
  Database,
  Briefcase,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping
const iconMap = {
  Shield,
  Terminal,
  Code,
  Globe,
  Database,
  Briefcase,
};

// Skill progress bar component
const SkillBar = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group"
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-cyber-text font-medium">{skill.name}</span>
      <span className="text-cyber-primary font-mono text-sm">{skill.level}%</span>
    </div>
    <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        className="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full relative"
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </div>
  </motion.div>
);

// Skill category card
const SkillCategory = ({ category, index }) => {
  const Icon = iconMap[category.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-cyber p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-cyber-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-cyber-primary" />
        </div>
        <h3 className="text-xl font-bold text-cyber-text">{category.name}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={index * 0.1 + skillIndex * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Tool/Technology badge
const ToolBadge = ({ name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.05 }}
    className="px-4 py-2 bg-cyber-card border border-cyber-border rounded-lg text-cyber-text hover:border-cyber-primary hover:text-cyber-primary transition-all duration-300 cursor-default"
  >
    {name}
  </motion.div>
);

const Skills = () => {
  // All tools/technologies list
  const allTools = [
    'Python',
    'Java',
    'JavaScript',
    'React.js',
    'Flask',
    'HTML/CSS',
    'Tailwind CSS',
    'MongoDB',
    'MySQL',
    'Burp Suite',
    'Nmap',
    'Wireshark',
    'Linux',
    'Git',
    'VS Code',
    'Metasploit',
    'OWASP ZAP',
    'Kali Linux',
  ];

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
              <Zap className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm text-cyber-muted">Technical Expertise</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6">
              Skills & <span className="text-cyber-primary">Technologies</span>
            </h1>

            <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills across cyber security,
              programming, and development. Continuously learning and expanding my toolkit.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillsData.categories.map((category, index) => (
              <SkillCategory key={category.name} category={category} index={index} />
            ))}
          </div>

          {/* All Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="section-title">Tools & Technologies</h2>
            <p className="text-cyber-muted mt-4 max-w-xl mx-auto">
              Technologies and tools I work with regularly in my security projects and development.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allTools.map((tool, index) => (
              <ToolBadge key={tool} name={tool} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-cyber-primary" />
              Currently Learning
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Advanced Penetration Testing',
                description: 'Deepening knowledge of exploitation techniques and red team operations.',
                progress: 40,
              },
              {
                title: 'Cloud Security (AWS/Azure)',
                description: 'Understanding cloud infrastructure security and best practices.',
                progress: 30,
              },
              {
                title: 'SIEM & Log Analysis',
                description: 'Learning to work with security information and event management systems.',
                progress: 35,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-6"
              >
                <h3 className="text-lg font-semibold text-cyber-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cyber-muted mb-4">{item.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-cyber-muted">Progress</span>
                  <span className="text-xs text-cyber-primary font-mono">
                    {item.progress}%
                  </span>
                </div>
                <div className="h-1.5 bg-cyber-darker rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyber-accent to-cyber-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Beyond Technical Skills</h2>
            <p className="text-cyber-muted mt-4 max-w-xl mx-auto">
              Soft skills that complement my technical abilities and make me a better team member.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Problem Solving',
                icon: '🧩',
                description: 'Analytical approach to breaking down complex security challenges.',
              },
              {
                title: 'Communication',
                icon: '💬',
                description: 'Clear documentation and ability to explain technical concepts.',
              },
              {
                title: 'Team Collaboration',
                icon: '🤝',
                description: 'Experience working in team projects and agile environments.',
              },
              {
                title: 'Continuous Learning',
                icon: '📚',
                description: 'Self-motivated learner staying updated with security trends.',
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-6 text-center group hover:border-cyber-primary/50"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-cyber-text mb-2 group-hover:text-cyber-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-cyber-muted">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
