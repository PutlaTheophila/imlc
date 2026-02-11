import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, Users, Heart, Menu, X, 
  Sparkles, Rocket, Globe, ChevronRight,
  ShieldCheck, Zap, Star, Camera, Eye, Target,
  CheckCircle2, Smile
} from 'lucide-react';

/**
 * IMLC PREMIUM ABOUT US - FINAL BUILD
 * --------------------------------
 * Typography: Poppins (Exclusive)
 * Images: Integrated Unsplash Placeholders
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 100], ['95%', '85%']);
  const y = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', id: '/' },
    { name: 'Philosophy', id: '#philosophy' },
    { name: 'Gallery', id: '#gallery' },
    { name: 'Values', id: '#values' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav 
        style={{ width, y }}
        className={`flex items-center justify-between px-8 py-3 pointer-events-auto transition-all duration-500 rounded-[3rem] border border-white/10 ${
          isScrolled ? 'bg-[#1f2a5a]/95 backdrop-blur-xl shadow-2xl' : 'bg-white/5 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center space-x-3 group cursor-pointer">
          <img src="/logo2.png" alt="Logo" className="h-10 w-10 object-cover rounded-full border border-[#88cca4]/30" />
          <div className="flex flex-col">
            <span className="font-['Poppins'] font-bold text-lg text-white leading-none tracking-tight">IMLC</span>
            <span className="font-['Poppins'] text-[9px] uppercase tracking-[0.3em] text-[#88cca4] font-black">Collective</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          {links.map((link) => (
            <a key={link.name} href={link.id} className="px-5 py-2 rounded-full text-white/80 font-['Poppins'] text-sm font-bold hover:text-[#88cca4] hover:bg-white/5 transition-all uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>

        <button className="hidden lg:block bg-[#88cca4] text-[#1f2a5a] px-6 py-2.5 rounded-full font-['Poppins'] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg active:scale-95">
          Join Us
        </button>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>
    </header>
  );
};

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const galleryItems = [
    { 
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop", 
      title: "Collaborative Pods", 
      category: "Microschool", 
      span: "md:col-span-2 md:row-span-2" 
    },
    { 
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", 
      title: "Creative Arts", 
      category: "After School", 
      span: "col-span-1" 
    },
    { 
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", 
      title: "Sensory Design", 
      category: "Environment", 
      span: "md:row-span-2" 
    },
    { 
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop", 
      title: "Community Growth", 
      category: "Social", 
      span: "col-span-1" 
    },
    // { 
    //   url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", 
    //   title: "Skills Mentorship", 
    //   category: "Vocational", 
    //   span: "md:col-span-2" 
    // },
  ];

  return (
    <div className="bg-[#FCFCFC] font-['Poppins'] text-[#1f2a5a] selection:bg-[#88cca4]/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#88cca4] origin-left z-[110]" style={{ scaleX }} />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1f2a5a] pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#606eb4]/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8">
              <Sparkles size={16} className="text-[#88cca4]" />
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">Where Every Mind Belongs</span>
            </div>
            <h1 className="font-bold text-[52px] md:text-[92px] leading-[0.9] mb-8 tracking-tighter text-white uppercase">
              Inclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88cca4] to-[#6bafc0]">Voices</span>. <br /> Collective Growth.
            </h1>
            <p className="text-[20px] md:text-[28px] text-white/70 mb-12 leading-tight max-w-4xl mx-auto font-medium">
              We replace "deficits" with passions, building a future where neurodivergent individuals are celebrated as essential contributors to society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section id="values" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                t: 'Inclusion', 
                d: 'Environments where learners feel welcomed and valued for their unique traits.', 
                i: <Users />, 
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop' 
              },
              { 
                t: 'Community', 
                d: 'Nurturing belonging by connecting parents, educators, and mentors.', 
                i: <Globe />, 
                img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop' 
              },
              { 
                t: 'Empathy', 
                d: 'Acting as an ally to ensure no family navigates this journey alone.', 
                i: <Heart />, 
                img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop' 
              }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }} 
                className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-50 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden">
                  <img src={v.img} alt={v.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10 text-center">
                  <div className="w-16 h-16 bg-[#1f2a5a] text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    {v.i}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{v.t}</h4>
                  <p className="text-gray-500 leading-relaxed">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MASONRY GALLERY */}
      <section id="gallery" className="py-32 px-6 bg-[#f8fafb]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#606eb4] font-bold tracking-[0.4em] uppercase text-sm mb-4">Visual Journey</h2>
              <h3 className="text-[42px] md:text-[52px] font-bold leading-none tracking-tight">Moments Inside IMLC.</h3>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-[#1f2a5a] text-white rounded-full font-bold text-sm hover:bg-[#88cca4] hover:text-[#1f2a5a] transition-all shadow-lg">
              <Camera size={18} /> Explore More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {galleryItems.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`${item.span} rounded-[3rem] overflow-hidden relative group cursor-pointer shadow-xl`}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a5a]/90 via-[#1f2a5a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                  <span className="text-[#88cca4] font-bold text-[10px] uppercase tracking-widest mb-2">{item.category}</span>
                  <h4 className="text-white font-bold text-2xl tracking-tight">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMBOLISM & LOGO EXPLANATION */}
      <section className="py-32 px-6 bg-[#1f2a5a] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#88cca4] font-bold tracking-[0.4em] uppercase text-sm mb-8">The Symbolism</h2>
            <h3 className="text-[42px] font-bold leading-tight mb-10 text-white">More Than a Logo.</h3>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              The "V" pattern in our logo represents a bird flying toward better horizons. It reflects individuals coming together as a collective to lift one another toward growth and independence.
            </p>
            <div className="grid gap-6">
              {[
                { t: "The Individual", d: "Represented at the core, supported by mentors." },
                { t: "The Horizon", d: "A future of functional strengths and empowerment." }
              ].map((point, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-[3rem] border border-white/10">
                  <CheckCircle2 className="text-[#88cca4] shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg mb-1">{point.t}</h5>
                    <p className="text-white/40 text-sm">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-[5rem] overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center p-20">
               <motion.img 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 src="/logo2.png" 
                 alt="IMLC Symbol" 
                 className="w-full object-contain rounded-full shadow-[0_0_100px_rgba(136,204,164,0.3)]" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[48px] font-bold mb-10 tracking-tighter uppercase">Start Your <span className="text-[#606eb4]">Flight</span>.</h2>
          <button className="px-16 py-7 bg-[#1f2a5a] text-white rounded-[2.5rem] font-bold text-xl hover:bg-[#88cca4] hover:text-[#1f2a5a] transition-all shadow-2xl mb-24">
            Connect With Us
          </button>
          
          <div className="border-t border-gray-100 pt-16">
            <div className="flex justify-center items-center space-x-3 mb-8">
              <img src="/logo2.png" alt="IMLC" className="h-8 w-8 grayscale" />
              <span className="font-bold tracking-widest text-gray-300 uppercase">IMLC Collective</span>
            </div>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
              InclusiveMinds Learning Collective Private Ltd.
            </p>
            <div className="flex justify-center space-x-10 text-gray-300 font-bold text-[11px] uppercase tracking-widest">
              <a href="#" className="hover:text-[#1f2a5a]">Privacy</a>
              <a href="#" className="hover:text-[#1f2a5a]">Terms</a>
              <a href="#" className="hover:text-[#1f2a5a]">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;