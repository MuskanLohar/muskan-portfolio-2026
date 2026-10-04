import React, { useState } from 'react';
import { 
  Download, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Terminal, 
  Sparkles,
  Briefcase,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = ({ onDownloadResume }) => {
  const [imgError, setImgError] = useState(false);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 absolute"></span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide pl-2">
                Hi, I'm Muskan
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-xs text-cyan-400 font-mono flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {personalInfo.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Building Web Apps with{' '}
              <span className="text-gradient block mt-1">
                MERN Stack
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Full-stack developer specializing in engineering clean, scalable, and responsive web applications using{' '}
              <span className="text-cyan-400 font-medium">React.js</span>,{' '}
              <span className="text-emerald-400 font-medium">Node.js</span>,{' '}
              <span className="text-indigo-400 font-medium">Express.js</span>, and{' '}
              <span className="text-amber-400 font-medium">MongoDB</span>. Focused on intuitive UI design and robust API architecture.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mb-8 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>BCA Graduate & MCA Candidate</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              
              {/* Prominent Download Resume Button */}
              <a
                href={personalInfo.resumePath}
                download="muskanlohar-mern-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-300 rounded-xl hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* View My Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:border-slate-600 transition-all duration-200 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900/60 rounded-xl border border-transparent hover:border-slate-800 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                Connect:
              </span>
              
              {/* GitHub Link */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 transition-all cursor-pointer group"
              >
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/30 transition-all cursor-pointer group"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              {/* Email Direct Link */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Send email to ${personalInfo.email}`}
                aria-label="Email Muskan"
                className="p-2.5 rounded-xl bg-slate-900/90 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/30 transition-all cursor-pointer group flex items-center gap-2 text-xs font-mono"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-slate-300">{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Hero Visual: Dedicated Profile Photo Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header terminal bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>muskan.dev</span>
                  </div>
                </div>

                {/* Profile Photo Area */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                  
                  {!imgError ? (
                    <img
                      src={personalInfo.profilePhoto}
                      alt="Muskan - MERN Stack Developer"
                      loading="eager"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : null}

                  {/* Fallback stylized developer graphic if image not placed yet */}
                  {imgError && (
                    <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 to-slate-950">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                        <Code2 className="w-12 h-12 text-cyan-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-1">Muskan</h4>
                      <p className="text-xs text-cyan-400 font-mono mb-3">MERN Stack Developer</p>
                      <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
                        Profile Photo Ready
                      </div>
                    </div>
                  )}

                  {/* Overlay Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-card border border-slate-700/60 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                      <span className="text-xs font-semibold text-white">Open to Opportunities</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Indore, MP
                    </span>
                  </div>

                </div>

                {/* Card Tech Footer Tags */}
                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-cyan-400">#React</span>
                  <span className="text-emerald-400">#NodeJS</span>
                  <span className="text-indigo-400">#Express</span>
                  <span className="text-amber-400">#MongoDB</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
