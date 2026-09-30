import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Contact = () => {
  const hireMeGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muskanlohar0@gmail.com&su=MERN%20Stack%20Developer%20Opportunity`;
  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muskanlohar0@gmail.com`;

  return (
    <section id="contact" className="py-20 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3 shadow-sm shadow-cyan-500/5">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
            Interested in hiring or discussing an opportunity? Choose your preferred way to reach out below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Recruiter CTA Card (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 relative overflow-hidden flex flex-col justify-between h-full shadow-2xl shadow-cyan-500/5 hover:border-cyan-500/40 transition-all duration-300">
              
              {/* Subtle Ambient Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{personalInfo.status || 'Open to Work'} • Immediate Joiner</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Let's Work Together
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 max-w-xl font-normal">
                  Interested in working with me? I'd love to discuss a MERN Stack Developer opportunity.
                </p>

                {/* Recruiter Quick Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-800/80">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>MERN Stack Expertise</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full-Time Role Ready</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>REST API & Cloud Dev</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Clean Code & Architecture</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Primary "Hire Me" Button */}
                  <a
                    href={hireMeGmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hire Me via Gmail"
                    className="inline-flex items-center justify-center gap-2.5 py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Hire Me</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* Secondary "Email Me" Button */}
                  <a
                    href={directGmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Me Directly"
                    className="inline-flex items-center justify-center gap-2.5 py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 rounded-xl shadow-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email Me</span>
                  </a>

                </div>

                {/* Direct Email Address & Gmail Fallback Link */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px] text-slate-400 font-mono">
                  <p>
                    Direct email: <a href={directGmailUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-semibold hover:underline">muskanlohar0@gmail.com</a>
                  </p>

                  <a
                    href={hireMeGmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Gmail Web Client"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Gmail</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Information Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between h-full space-y-8 shadow-xl">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>CONTACT INFORMATION</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Direct Details
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
                  Feel free to contact me directly via email, call, or connect on social platforms.
                </p>
              </div>

              {/* Information Items */}
              <div className="space-y-5">
                
                {/* Email */}
                <a
                  href={directGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send direct email to muskanlohar0@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800/80 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 group transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-400 group-hover:border-cyan-500/50 group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors break-all">
                      muskanlohar0@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:6261507425"
                  aria-label="Call phone number 6261507425"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800/80 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 group transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-emerald-400 group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      6261507425
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-slate-300">
                  <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Indore, Madhya Pradesh, India
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-6 border-t border-slate-800/80">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Social Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/muskan-lohar-fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all duration-300 cursor-pointer"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/MuskanLohar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all duration-300 cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
