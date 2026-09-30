import React from 'react';
import { Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-white block leading-none">
                Muskan
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                MERN Stack Developer • Indore, MP
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleScrollTo(e, '#skills')} className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" onClick={(e) => handleScrollTo(e, '#education')} className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Right Social Icon Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Address"
              title={`Send email to ${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-slate-800 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© {currentYear} Muskan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
