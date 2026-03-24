import React, { useEffect, useRef, useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';

const buildGmailUrl = (email, subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const buildOutlookUrl = (email, subject = '', body = '') =>
  `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
    email
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const EmailProviderMenu = ({
  email,
  subject = '',
  body = '',
  className = '',
  iconOnly = false,
  label = 'Email',
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openCompose = (provider) => {
    const url =
      provider === 'gmail'
        ? buildGmailUrl(email, subject, body)
        : buildOutlookUrl(email, subject, body);
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={
          iconOnly
            ? 'p-3 bg-cyber-card border border-cyber-border rounded-lg text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]'
            : 'card-cyber p-5 flex items-start gap-4 group hover:border-cyber-primary/50 transition-all w-full text-left'
        }
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose email provider"
      >
        {iconOnly ? (
          <Mail className="w-5 h-5" />
        ) : (
          <>
            <div className="p-3 bg-cyber-primary/10 rounded-lg">
              <Mail className="w-5 h-5 text-cyber-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-cyber-muted mb-1">{label}</p>
              <p className="text-cyber-text font-medium group-hover:text-cyber-primary transition-colors break-all">
                {email}
              </p>
            </div>
            <ChevronDown className="w-4 h-4 text-cyber-muted mt-1" />
          </>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute z-50 mt-2 right-0 min-w-[180px] bg-cyber-card border border-cyber-border rounded-lg shadow-lg overflow-hidden"
        >
          <button
            type="button"
            onClick={() => openCompose('gmail')}
            className="w-full text-left px-4 py-3 text-cyber-text hover:bg-cyber-primary/10 transition-colors"
          >
            Gmail
          </button>
          <button
            type="button"
            onClick={() => openCompose('outlook')}
            className="w-full text-left px-4 py-3 text-cyber-text hover:bg-cyber-secondary/10 transition-colors border-t border-cyber-border"
          >
            Outlook
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailProviderMenu;
