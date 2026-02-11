import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, Users, Heart, Menu, X, 
  Sparkles, Rocket, ChevronRight,
  Zap, Star, Mail, Phone, User, MessageSquare, Clock
} from 'lucide-react';

/**
 * IMLC BRAND IMPLEMENTATION
 * Palette: Navy #1f2a5a (Anchor), Indigo #606eb4, Aqua #6bafc0, Mint #88cca4 [cite: 17]
 * Type: Poppins Bold (Headings), Atkinson Hyperlegible (Body) [cite: 28, 30]
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Dynamic Island scaling effect (only for the link container)
  const islandWidth = useTransform(scrollY, [0, 100], ['auto', '420px']);
  const islandY = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Active Section Observer for Nav Highlighting
    const observerOptions = { rootMargin: '-20% 0px -70% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    const sections = ['home', 'microschool', 'aboutus', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Programs', id: 'microschool' },
    { name: 'Team', id: 'aboutus' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. SEPARATED LOGO */}
        <div 
          className="flex items-center space-x-3 group cursor-pointer pointer-events-auto bg-[#1f2a5a]/90 backdrop-blur-md p-3 rounded-2xl border border-white/10"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="h-10 w-10 bg-[#88cca4] rounded-xl flex items-center justify-center font-bold text-[#1f2a5a]">i.</div>
          <div className="flex flex-col">
            <span className="font-['Poppins'] font-bold text-lg text-white leading-none tracking-tight">IMLC</span>
            <span className="font-['Atkinson_Hyperlegible'] text-[9px] uppercase tracking-[0.3em] text-[#88cca4] font-black">Collective</span>
          </div>
        </div>

        {/* 2. DYNAMIC ISLAND (LINKS ONLY) */}
        <motion.nav 
          style={{ width: islandWidth, y: islandY }}
          className={`hidden md:flex items-center justify-center px-6 py-3 pointer-events-auto transition-all duration-500 rounded-full border border-white/10 ${
            isScrolled ? 'bg-[#1f2a5a]/90 backdrop-blur-xl shadow-2xl' : 'bg-white/5 backdrop-blur-md'
          }`}
        >
          <div className="flex items-center space-x-1">
            {links.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)} 
                className={`px-4 py-2 rounded-full font-['Poppins'] text-xs font-bold transition-all uppercase tracking-widest ${
                  activeSection === link.id ? 'text-[#88cca4] bg-white/10' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.nav>

        {/* 3. SEPARATED APPLY NOW BUTTON */}
        <div className="flex items-center space-x-4 pointer-events-auto">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block bg-[#88cca4] text-[#1f2a5a] px-8 py-3 rounded-full font-['Poppins'] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg active:scale-95"
          >
            Apply Now
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-3 bg-[#1f2a5a] text-white rounded-xl border border-white/10">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-24 left-6 right-6 bg-[#1f2a5a] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl md:hidden pointer-events-auto">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.id)} className={`flex items-center justify-between p-5 rounded-2xl font-['Poppins'] font-bold text-lg ${activeSection === link.id ? 'bg-[#88cca4] text-[#1f2a5a]' : 'bg-white/5 text-white'}`}>
                  {link.name} <ChevronRight size={20} />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ProgramCard = ({ title, description, icon: Icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative bg-white p-10 rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col h-full overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-5 rounded-bl-[5rem] transition-all group-hover:scale-150`} />
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl`}><Icon size={32} /></div>
    <h3 className="font-['Poppins'] font-bold text-[32px] text-[#1f2a5a] mb-4 leading-tight">{title}</h3>
    <p className="font-['Atkinson_Hyperlegible'] text-[18px] text-gray-500 leading-relaxed mb-10 flex-grow">{description}</p>
    <button className="flex items-center text-[#1f2a5a] font-['Poppins'] font-bold text-lg group/btn">Explore <ArrowRight size={20} className="ml-3 group-hover/btn:translate-x-2 transition-transform text-[#88cca4]" /></button>
  </motion.div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#FCFCFC] font-['Atkinson_Hyperlegible'] text-[#1f2a5a] selection:bg-[#88cca4]/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#88cca4] origin-left z-[110]" style={{ scaleX }} />
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center bg-[#1f2a5a] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#606eb4]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="max-w-5xl">
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full mb-10">
              <Sparkles size={18} className="text-[#88cca4]" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-white font-['Poppins']">Strength-Based Excellence</span>
            </div>
            <h1 className="font-['Poppins'] font-bold text-[48px] md:text-[52px] lg:text-[82px] leading-[0.95] mb-10 tracking-tighter text-white uppercase">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88cca4] to-[#6bafc0]">Neurodivergent</span> <br /> Minds Flourish.
            </h1>
            <p className="text-[24px] md:text-[30px] text-white/70 mb-14 leading-[1.3] max-w-3xl font-medium">
              We replace "deficits" with passions, transforming unique traits into lifelong functional strengths[cite: 83].
            </p>
            <div className="flex flex-wrap gap-8">
              <button onClick={() => scrollToSection('microschool')} className="px-14 py-7 bg-[#88cca4] text-[#1f2a5a] rounded-[2rem] font-['Poppins'] font-bold text-[22px] hover:bg-white hover:scale-105 transition-all shadow-lg">Our Programs</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS BENTO */}
      <section id="microschool" className="py-32 px-6">
        <div className="container mx-auto text-center mb-24">
          <h2 className="text-[#606eb4] font-['Poppins'] font-bold tracking-[0.4em] uppercase text-sm mb-6">Our Offerings</h2>
          <h3 className="font-['Poppins'] font-bold text-[36px] md:text-[52px] text-[#1f2a5a] tracking-tight">Tailored to the Learner.</h3>
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">
            <ProgramCard title="Microschool" description="Small-group pods (4-8 learners) centered on individuality and confidence-building." icon={Zap} color="bg-[#1f2a5a]" delay={0.1} />
            <ProgramCard title="After School" description="Interest-based clubs and social mentorship in a safe, neuro-affirming atmosphere." icon={Star} color="bg-[#606eb4]" delay={0.2} />
            <ProgramCard title="Summer Camp" description="Adventure weeks centered around collective passions and inclusive skill-building." icon={Rocket} color="bg-[#88cca4]" delay={0.3} />
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 bg-[#1f2a5a] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[#88cca4] font-['Poppins'] font-bold tracking-[0.4em] uppercase text-sm mb-8">Foundation</h2>
              <h3 className="font-['Poppins'] font-bold text-[42px] mb-10 leading-tight">An Architecture of <br />Belonging.</h3>
              <div className="grid gap-8">
                {[
                  { t: 'Inclusion', d: 'Welcoming learners for who they are, not who they "should" be[cite: 77].', i: <Users /> },
                  { t: 'Empathy', d: 'Acting as an understanding mentor ensuring no one feels isolated[cite: 81].', i: <Heart /> },
                  { t: 'Strengths', d: 'Focusing on unique abilities and interests rather than deficits[cite: 83].', i: <Sparkles /> }
                ].map((val, idx) => (
                  <div key={idx} className="flex space-x-6 p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-[#88cca4] mt-1">{val.i}</div>
                    <div>
                      <h4 className="font-['Poppins'] font-bold text-xl mb-2">{val.t}</h4>
                      <p className="text-white/60 text-lg leading-relaxed">{val.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square bg-gradient-to-tr from-[#606eb4] to-[#88cca4] rounded-[5rem] rotate-6 flex items-center justify-center shadow-2xl overflow-hidden group">
               <h2 className="text-8xl font-['Poppins'] font-black text-white/10">IMLC</h2>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="aboutus" className="py-32 px-6">
        <div className="container mx-auto text-center mb-24">
          <h2 className="text-[#606eb4] font-['Poppins'] font-bold tracking-[0.4em] uppercase text-sm mb-6">Our Experts</h2>
          <h3 className="font-['Poppins'] font-bold text-[36px] md:text-[52px] text-[#1f2a5a]">Led by our Team</h3>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">
            {[
              { name: 'Midhun Noble', title: 'CEO', overlay: 'Visionary Lead', img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
              { name: 'Dr Bindiya Shaijith', title: 'Inclusion Head', overlay: 'Expert Clinician', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
              { name: 'Sindhuri Ananth', title: 'Learning Architect', overlay: 'Curriculum Expert', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg' },
            ].map((member, i) => (
              <motion.div key={i} whileHover={{ y: -15 }} className="group relative rounded-[4rem] overflow-hidden shadow-2xl bg-[#1f2a5a]">
                <img src={member.img} alt={member.name} className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a5a] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-left">
                  <span className="bg-[#88cca4] text-[#1f2a5a] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">{member.overlay}</span>
                  <h4 className="text-white font-['Poppins'] font-bold text-3xl mb-1">{member.name}</h4>
                  <p className="text-white/60 font-bold tracking-widest uppercase text-xs">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="py-32 px-6 bg-[#f8fafc]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[#606eb4] font-['Poppins'] font-bold tracking-[0.4em] uppercase text-sm mb-6">Contact Us</h2>
              <h3 className="font-['Poppins'] font-bold text-[52px] text-[#1f2a5a] leading-[1.1] mb-10">Start Your <br /> Journey Today.</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-[#88cca4]/10 rounded-2xl flex items-center justify-center text-[#88cca4]"><Mail size={24} /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</p>
                    <p className="text-lg font-bold text-[#1f2a5a]">hello@imlc.co.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-[#1f2a5a]/10 rounded-2xl flex items-center justify-center text-[#1f2a5a]"><Clock size={24} /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Working Hours</p>
                    <p className="text-lg font-bold text-[#1f2a5a]">10 AM — 6 PM (IST)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center"><User size={14} className="mr-2" /> Parent Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-[#88cca4] outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center"><Mail size={14} className="mr-2" /> Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-[#88cca4] outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center"><MessageSquare size={14} className="mr-2" /> Your Message</label>
                  <textarea rows="4" placeholder="Tell us about your learner's unique strengths..." className="w-full bg-gray-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-[#88cca4] outline-none resize-none"></textarea>
                </div>
                <button className="w-full py-6 bg-[#1f2a5a] text-white rounded-[2rem] font-['Poppins'] font-bold text-lg hover:bg-[#606eb4] shadow-2xl transition-all flex items-center justify-center space-x-3">
                  <span>Send Application</span> <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

       <footer className="py-20 bg-white border-t border-gray-100 text-center">
         <img src="/logo2.png" alt="IMLC" className="h-12 mx-auto mb-8 opacity-40 grayscale" />
         <p className="font-['Poppins'] text-gray-400 text-[14px] font-bold uppercase tracking-[0.5em] mb-4">
           InclusiveMinds Learning Collective Private Ltd.
         </p>
         <div className="flex justify-center space-x-8 text-gray-300 font-bold text-xs uppercase tracking-widest">
           <a href="#" className="hover:text-[#1f2a5a] transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-[#1f2a5a] transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-[#1f2a5a] transition-colors">Contact</a>
        </div>      </footer>
    </div>
  );
};

export default Home;