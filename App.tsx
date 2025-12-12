import React, { useState, useEffect } from 'react';
import { cvData } from './data';
import { Reveal } from './components/Reveal';
import { Modal } from './components/Modal';
import { ChatWidget } from './components/ChatWidget';

// Navigation Item Component
const NavItem: React.FC<{ href: string; label: string; icon: string; active: boolean }> = ({ href, label, icon, active }) => (
  <a
    href={href}
    className={`
      flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.85rem] font-medium transition-all duration-300
      ${active 
        ? 'bg-teal-400/15 text-teal-400 border border-teal-400/20 shadow-[0_0_15px_rgba(45,212,191,0.1)]' 
        : 'text-slate-400 hover:text-white hover:bg-white/5'
      }
    `}
    onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <span className="hidden md:inline">{label}</span>
    <i className={`fas ${icon} md:hidden text-lg`}></i>
  </a>
);

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, content: React.ReactNode}>({ title: '', content: null });

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'education', 'projects', 'publications', 'contact'];
      const offset = 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title: string, content: React.ReactNode) => {
    // Only open if text is not selected (UX best practice from original)
    if (window.getSelection()?.toString().length === 0) {
      setModalContent({ title, content });
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-midnight-gradient bg-fixed text-slate-50 font-sans selection:bg-teal-400/30 selection:text-teal-200 pb-32">
      
      {/* Ambient Light Background */}
      <div className="fixed top-0 left-0 w-full h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.1),transparent_60%)] -z-10 pointer-events-none"></div>

      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-[600px] md:top-6 bottom-6 md:bottom-auto">
        <nav className="glass-nav flex items-center justify-between px-2 py-2 rounded-full shadow-2xl">
          <NavItem href="#hero" label="Profile" icon="fa-user" active={activeSection === 'hero'} />
          <NavItem href="#experience" label="Experience" icon="fa-briefcase" active={activeSection === 'experience'} />
          <NavItem href="#projects" label="Projects" icon="fa-code" active={activeSection === 'projects'} />
          <NavItem href="#publications" label="Publications" icon="fa-book" active={activeSection === 'publications'} />
          <NavItem href="#contact" label="Contact" icon="fa-envelope" active={activeSection === 'contact'} />
        </nav>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 md:px-8 pt-20">
        
        {/* HERO */}
        <section id="hero" className="min-h-[85vh] flex items-center justify-center py-24 scroll-mt-32">
          <div className="grid md:grid-cols-[1fr_350px] gap-12 md:gap-20 items-center w-full">
            <Reveal>
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">
                  {cvData.profile.name}
                </h1>
                <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl">
                  {cvData.profile.subtitle}
                </p>
                
                <div 
                  className="glass-panel p-6 border-l-4 border-l-teal-400 rounded-xl mb-8 cursor-default hover:translate-y-[-2px] transition-transform duration-300 w-full"
                >
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {cvData.profile.summary}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {cvData.profile.tags.map(tag => (
                    <span key={tag} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] mx-auto md:mx-0 group">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-[0_0_50px_-10px_rgba(45,212,191,0.3)]"></div>
                <img 
                  src={cvData.profile.image} 
                  alt={cvData.profile.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-[30px] p-2.5 filter contrast-110 saturate-[1.05]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/450x450/1e293b/64748b?text=JAEG';
                  }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 scroll-mt-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-slate-50 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-teal-400 after:to-transparent after:opacity-30">
              Professional Log
            </h2>
          </Reveal>

          <div className="space-y-12 pl-4">
            {cvData.experience.map((exp, index) => (
              <Reveal key={index}>
                <div className="relative border-l-2 border-white/10 pl-10">
                  <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_15px_var(--tw-shadow-color)] shadow-teal-400"></div>
                  
                  <div 
                    className="glass-panel p-8 rounded-2xl group hover:bg-white/5 hover:border-teal-400/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
                    onClick={() => openModal(
                        `${exp.role} @ ${exp.company}`, 
                        <div>
                            <p className="mb-4 text-teal-400 font-bold uppercase tracking-widest text-sm">{exp.period}</p>
                            <p className="text-lg">{exp.description}</p>
                        </div>
                    )}
                  >
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-200 mb-1">{exp.role}</h3>
                    <span className="text-lg text-white font-medium mb-4 block">{exp.company}</span>
                    <p className="text-slate-400 mb-6 flex-grow">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.badges.map(badge => (
                        <span key={badge} className="px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-400 border border-teal-400/20 text-xs font-medium">
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-6 right-6 text-xs text-teal-400 uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      ↗ Expand
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION & SKILLS */}
        <section id="education" className="py-24 scroll-mt-32">
            <Reveal>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-slate-50 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-teal-400 after:to-transparent after:opacity-30">
                Credentials
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <div className="glass-panel p-8 rounded-2xl h-full hover:bg-white/5 transition-all duration-300">
                  <i className="fas fa-graduation-cap text-3xl text-teal-400 mb-6 opacity-90"></i>
                  <h3 className="text-xl font-semibold text-slate-200 mb-6">Education</h3>
                  
                  <div className="space-y-6">
                    {cvData.education.map((edu, idx) => (
                      <div key={idx}>
                        <strong className="text-white block font-semibold text-lg">{edu.degree}</strong>
                        <span className="text-slate-400 text-sm">{edu.institution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="glass-panel p-8 rounded-2xl h-full hover:bg-white/5 transition-all duration-300">
                  <i className="fas fa-layer-group text-3xl text-teal-400 mb-6 opacity-90"></i>
                  <h3 className="text-xl font-semibold text-slate-200 mb-6">Competencies</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cvData.competencies.map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-teal-400/10 text-teal-400 border border-teal-400/20 text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-200 mb-2">Languages</h3>
                  <p className="text-slate-400 text-sm">{cvData.languages}</p>
                </div>
              </Reveal>
            </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 scroll-mt-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-slate-50 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-teal-400 after:to-transparent after:opacity-30">
              Selected Projects
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvData.projects.map((project, idx) => (
              <Reveal key={idx}>
                <div 
                  className="glass-panel p-8 rounded-2xl h-full group hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col relative overflow-hidden"
                  onClick={() => openModal(project.title, <p className="text-lg">{project.longDescription || project.description}</p>)}
                >
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <i className={`fas ${project.icon} text-3xl text-teal-400 mb-6 opacity-90`}></i>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="px-2 py-1 rounded-md bg-teal-400/10 text-teal-400 border border-teal-400/20 text-[10px] font-bold uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <span className="text-[10px] text-teal-400 uppercase tracking-widest opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      View Details ↗
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="py-24 scroll-mt-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-slate-50 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-teal-400 after:to-transparent after:opacity-30">
              Publications
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {cvData.publications.map((pub, idx) => (
              <Reveal key={idx}>
                <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-teal-400 hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{pub.title}</h3>
                  <span className="block text-sm italic text-slate-400 mb-4">{pub.journal}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{pub.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="pt-32 pb-12 border-t border-white/5 text-center">
            <Reveal>
              <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-slate-400 mb-10 max-w-md mx-auto">
                Open for roles in AI in Healthcare & Clinical Research.
              </p>
              
              <div className="flex justify-center gap-8 mb-16">
                {cvData.contact.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url}
                    className="text-3xl text-slate-500 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <i className={`fab ${link.icon} ${link.icon === 'fa-envelope' ? 'fas' : ''}`}></i>
                  </a>
                ))}
              </div>

              <div className="text-xs text-slate-600 font-medium tracking-wide">
                &copy; {new Date().getFullYear()} {cvData.profile.name}. {cvData.contact.location}.
              </div>
            </Reveal>
        </footer>

      </main>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title={modalContent.title}
        content={modalContent.content}
      />

      <ChatWidget />
    </div>
  );
}

export default App;