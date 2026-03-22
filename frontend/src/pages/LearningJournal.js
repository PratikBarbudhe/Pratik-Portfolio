import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarDays } from 'lucide-react';
import { learningJournalData } from '../data/portfolioData';

const LearningJournal = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm text-cyber-muted">Continuous Learning</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6">
              Learning <span className="text-cyber-primary">Journal</span>
            </h1>

            <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
              A simple log of topics I study regularly. I use this section to
              track progress and keep my security learning journey transparent.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-cyber-border" />

            {learningJournalData.map((entry, index) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full border border-cyber-primary bg-cyber-card flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyber-primary" />
                </div>

                <div className="card-cyber p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h2 className="text-lg font-semibold text-cyber-text">
                      {entry.topic}
                    </h2>
                    <p className="text-sm text-cyber-muted inline-flex items-center gap-2 font-mono">
                      <CalendarDays className="w-4 h-4" />
                      {entry.date}
                    </p>
                  </div>
                  <p className="text-cyber-muted leading-relaxed">{entry.notes}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningJournal;
