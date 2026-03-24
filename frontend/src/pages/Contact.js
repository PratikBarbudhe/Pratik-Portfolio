import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  User,
  AtSign,
  X,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import EmailProviderMenu from '../components/EmailProviderMenu';

// Input validation utilities
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const sanitizeInput = (input) => {
  // Basic XSS prevention - escape HTML entities
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const contactColorClassMap = {
  'cyber-primary': { bg: 'bg-cyber-primary/10', text: 'text-cyber-primary' },
  'cyber-secondary': { bg: 'bg-cyber-secondary/10', text: 'text-cyber-secondary' },
  'cyber-accent': { bg: 'bg-cyber-accent/10', text: 'text-cyber-accent' },
  'cyber-warning': { bg: 'bg-cyber-warning/10', text: 'text-cyber-warning' },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState('');
  const [isComposerModalOpen, setIsComposerModalOpen] = useState(false);
  const [pendingDraft, setPendingDraft] = useState(null);

  const buildGmailComposeUrl = ({ subject, body }) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      personalInfo.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const buildOutlookComposeUrl = ({ subject, body }) =>
    `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
      personalInfo.email
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name is too long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'Subject is too long';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message is too long (max 2000 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const openComposer = (provider) => {
    if (!pendingDraft) return;
    const composeUrl =
      provider === 'gmail'
        ? buildGmailComposeUrl(pendingDraft)
        : buildOutlookComposeUrl(pendingDraft);

    // Open only in a single new tab/window.
    window.open(composeUrl, '_blank', 'noopener,noreferrer');

    setIsComposerModalOpen(false);
    setSubmitStatus('success');
    setSubmitMessage('Composer opened. Please review and send your email.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setPendingDraft(null);
  };

  // Validate and prepare message draft, then show provider chooser.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus(null);

    // Sanitize inputs before sending
    const sanitizedData = {
      name: sanitizeInput(formData.name.trim()),
      email: sanitizeInput(formData.email.trim().toLowerCase()),
      subject: sanitizeInput(formData.subject.trim()),
      message: sanitizeInput(formData.message.trim()),
    };

    setPendingDraft({
      subject: sanitizedData.subject,
      body: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\n${sanitizedData.message}`,
    });
    setIsComposerModalOpen(true);
  };

  // Contact info items
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: null,
      color: 'cyber-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      color: 'cyber-secondary',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: personalInfo.github,
      color: 'cyber-accent',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'cyber-warning',
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <AnimatePresence>
        {isComposerModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Choose email provider"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="card-cyber w-full max-w-md p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-cyber-text">Choose Email Provider</h3>
                  <p className="text-sm text-cyber-muted mt-1">
                    Select where to compose your message.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsComposerModalOpen(false)}
                  className="text-cyber-muted hover:text-cyber-text transition-colors"
                  aria-label="Close provider dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => openComposer('gmail')}
                  className="btn-cyber-filled w-full"
                >
                  Gmail
                </button>
                <button
                  type="button"
                  onClick={() => openComposer('outlook')}
                  className="btn-secondary w-full"
                >
                  Outlook
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-cyber-card border border-cyber-border rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm text-cyber-muted">Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6">
              Let's <span className="text-cyber-primary">Connect</span>
            </h1>

            <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
              I'm actively seeking internship and entry-level opportunities in Cyber Security.
              Whether you have a question, want to discuss a project, or just want to say hi,
              feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-cyber p-8">
                <h2 className="text-2xl font-bold text-cyber-text mb-6">
                  Send a Message
                </h2>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-cyber-primary/10 border border-cyber-primary rounded-lg mb-6"
                  >
                    <CheckCircle className="w-5 h-5 text-cyber-primary flex-shrink-0" />
                    <p className="text-cyber-primary">{submitMessage}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-cyber-danger/10 border border-cyber-danger rounded-lg mb-6"
                  >
                    <AlertCircle className="w-5 h-5 text-cyber-danger flex-shrink-0" />
                    <p className="text-cyber-danger">{submitMessage}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-cyber-text mb-2"
                    >
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-cyber ${errors.name ? 'border-cyber-danger' : ''}`}
                      placeholder="John Doe"
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-cyber-danger flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-cyber-text mb-2"
                    >
                      <AtSign className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-cyber ${errors.email ? 'border-cyber-danger' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-cyber-danger flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-cyber-text mb-2"
                    >
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input-cyber ${errors.subject ? 'border-cyber-danger' : ''}`}
                      placeholder="Internship Opportunity / Project Discussion"
                      maxLength={200}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-cyber-danger flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-cyber-text mb-2"
                    >
                      <Mail className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`input-cyber resize-none ${
                        errors.message ? 'border-cyber-danger' : ''
                      }`}
                      placeholder="Tell me about the opportunity or your project..."
                      maxLength={2000}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-sm text-cyber-danger flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-cyber-muted">
                        {formData.message.length}/2000
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-cyber-filled w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {item.label === 'Email' ? (
                      <EmailProviderMenu
                        email={personalInfo.email}
                        label={item.label}
                        className="w-full"
                        subject="Portfolio Contact"
                        body="Hi Pratik,"
                      />
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="card-cyber p-5 flex items-start gap-4 group hover:border-cyber-primary/50 transition-all"
                      >
                        <div className={`p-3 ${contactColorClassMap[item.color].bg} rounded-lg`}>
                          <item.icon className={`w-5 h-5 ${contactColorClassMap[item.color].text}`} />
                        </div>
                        <div>
                          <p className="text-sm text-cyber-muted mb-1">{item.label}</p>
                          <p className="text-cyber-text font-medium group-hover:text-cyber-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="card-cyber p-5 flex items-start gap-4">
                        <div className={`p-3 ${contactColorClassMap[item.color].bg} rounded-lg`}>
                          <item.icon className={`w-5 h-5 ${contactColorClassMap[item.color].text}`} />
                        </div>
                        <div>
                          <p className="text-sm text-cyber-muted mb-1">{item.label}</p>
                          <p className="text-cyber-text font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="card-cyber p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-primary"></span>
                  </span>
                  <span className="text-cyber-primary font-semibold">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-cyber-muted text-sm">
                  I'm currently open to internship and entry-level positions in:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    'SOC Analyst',
                    'Security Analyst',
                    'IT Audit',
                    'Cyber Security Consultant',
                    'Vulnerability Assessment',
                  ].map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-sm text-cyber-text"
                    >
                      <span className="text-cyber-primary">→</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="card-cyber p-6 bg-cyber-darker/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-cyber-text font-semibold">Quick Response</span>
                </div>
                <p className="text-cyber-muted text-sm">
                  I typically respond within 24-48 hours. For urgent matters,
                  feel free to connect on LinkedIn.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-cyber-darker/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What type of opportunities are you looking for?",
                a: "I'm seeking internships and entry-level positions in Cyber Security, particularly in SOC operations, IT Audit, Vulnerability Assessment, and Security Consulting roles.",
              },
              {
                q: "Are you open to remote work?",
                a: "Yes, I'm open to both remote and on-site opportunities. I'm flexible and can adapt to different work arrangements.",
              },
              {
                q: "What's your availability?",
                a: "I'm currently available to start immediately. As an MCA student, I can also accommodate part-time internships alongside my studies.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-cyber p-6"
              >
                <h3 className="text-lg font-semibold text-cyber-text mb-2">
                  {faq.q}
                </h3>
                <p className="text-cyber-muted">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
