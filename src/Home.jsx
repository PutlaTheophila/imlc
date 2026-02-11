import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, Users, Heart, Menu, X, 
  Sparkles, Rocket, CheckCircle2, ChevronRight,
  Zap, Star, Mail, User, MessageSquare, Loader2,
  Phone, Search, Compass, ArrowUpRight, Globe
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* SHARED COMPONENTS                                                          */
/* -------------------------------------------------------------------------- */

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { scrollY } = useScroll();

//   const islandWidth = useTransform(scrollY, [0, 100], ['auto', '400px']);
//   const islandY = useTransform(scrollY, [0, 100], [0, 10]);

//   const links = [
//     { name: 'Home', id: 'home' },
//     { name: 'Programs', id: 'microschool' },
//     { name: 'Team', id: 'aboutus' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);

//     const observerOptions = { rootMargin: '-20% 0px -70% 0px', threshold: 0 };
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) setActiveSection(entry.target.id);
//       });
//     }, observerOptions);

//     links.forEach((link) => {
//       const el = document.getElementById(link.id);
//       if (el) observer.observe(el);
//     });

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       observer.disconnect();
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = element.getBoundingClientRect().top;
//       const elementPosition = elementRect - bodyRect;
//       const offsetPosition = elementPosition - offset;

//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div 
//           className="flex items-center space-x-3 group cursor-pointer pointer-events-auto bg-white backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm"
//           onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//         >
//           <img src="/logo3.png" alt="IMLC Logo" className="h-10 w-auto object-contain group-hover:rotate-12 transition-transform " />
//           {/* <div className="flex flex-col">
//              <span className="font-['Atkinson_Hyperlegible'] text-[10px] uppercase tracking-[0.2em] text-[#1f2a5a] font-bold">IMLC</span>
//           </div> */}
//         </div>

//         <motion.nav 
//           style={{ width: islandWidth, y: islandY }}
//           className={`hidden md:flex items-center justify-center px-6 py-3 pointer-events-auto transition-all duration-500 rounded-full border border-white/10 ${
//             isScrolled ? 'bg-[#1f2a5a]/90 backdrop-blur-xl shadow-2xl' : 'bg-white/5 backdrop-blur-md'
//           }`}
//         >
//           <div className="flex items-center space-x-1">
//             {links.map((link) => (
//               <button 
//                 key={link.name} 
//                 onClick={() => scrollToSection(link.id)} 
//                 className={`px-4 py-2 rounded-full font-['Poppins'] text-[11px] font-bold transition-all uppercase tracking-widest ${
//                   activeSection === link.id ? 'text-[#88cca4] bg-white/10' : 'text-white/70 hover:text-white'
//                 }`}
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>
//         </motion.nav>

//         <div className="flex items-center space-x-4 pointer-events-auto">
//           <button 
//             onClick={() => scrollToSection('contact')}
//             className="hidden sm:block bg-[#88cca4] text-[#1f2a5a] px-8 py-3 rounded-full font-['Poppins'] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg active:scale-95"
//           >
//             Inquiry
//           </button>
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-3 bg-[#1f2a5a] text-white rounded-xl border border-white/10">
//             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-24 left-6 right-6 bg-[#1f2a5a] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl md:hidden pointer-events-auto">
//             <div className="flex flex-col space-y-3">
//               {links.map((link) => (
//                 <button key={link.name} onClick={() => scrollToSection(link.id)} className={`flex items-center justify-between p-5 rounded-2xl font-['Poppins'] font-bold text-lg ${activeSection === link.id ? 'bg-[#88cca4] text-[#1f2a5a]' : 'bg-white/5 text-white'}`}>
//                   {link.name} <ChevronRight size={20} />
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };




const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Change 1: Logo fades out as user scrolls down
  const logoOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  
  const islandWidth = useTransform(scrollY, [0, 100], ['auto', '400px']);
  const islandY = useTransform(scrollY, [0, 100], [0, 10]);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Programs', id: 'microschool' },
    { name: 'Team', id: 'aboutus' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  const sections = links.map(link => document.getElementById(link.id));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "", // center-based activation
      threshold: 0.1,
    }
  );

  sections.forEach(section => {
    if (section) observer.observe(section);
  });

  return () => {
    sections.forEach(section => {
      if (section) observer.unobserve(section);
    });
  };
}, []);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    setActiveSection(id)
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Change 1 & 2: Logo container with opacity transform and matched height */}
        <motion.div 
          style={{ opacity: logoOpacity }}
          className="flex items-center space-x-3 group cursor-pointer pointer-events-auto bg-white backdrop-blur-md p-1 rounded-2xl border border-white/10 shadow-sm"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="/logo3.png" 
            alt="IMLC Logo" 
            className="h-12 w-auto object-contain transition-transform" 
          />
        </motion.div>

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
                className={`px-4 py-2 rounded-full font-['Poppins'] text-[11px] font-bold transition-all uppercase tracking-widest ${
                  activeSection === link.id ? 'text-[#88cca4] bg-white/10' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.nav>

        <div className="flex items-center space-x-4 pointer-events-auto">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block bg-[#88cca4] text-[#1f2a5a] px-8 py-3 rounded-full font-['Poppins'] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg active:scale-95"
          >
            Inquiry
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-3 bg-[#1f2a5a] text-white rounded-xl border border-white/10">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-24 left-6 right-6 bg-[#1f2a5a] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl md:hidden pointer-events-auto">
            <div className="flex flex-col space-y-3">
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


const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("phone" , form.phone);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwMyfnzC77LEkLjQda2f_Wweljy0EvZU9usp_gPbAk6vTxAnFf-yr_zw9qqwxJ_pXSC/exec",
        {
          method: "POST",
          body: formData
        }
      );
      setLoading(false);
      setShowSuccess(true);
      setForm({ name: "", email: "", message: "" ,phone:"" });
    } catch (error) {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#FCFCFC] font-['Poppins'] text-[#1f2a5a] selection:bg-[#88cca4]/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#88cca4] origin-left z-[110]" style={{ scaleX }} />
      <Navbar />

      {/* HERO SECTION */}
<section id="home" className="relative min-h-screen flex items-center justify-center bg-[#1f2a5a] pt-32 pb-20 px-6 overflow-hidden">
  {/* Background Decor */}
  <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#606eb4]/20 rounded-full blur-[140px] animate-pulse pointer-events-none" />
  <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#88cca4]/10 rounded-full blur-[120px] pointer-events-none" />
  
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
       style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

  <div className="container mx-auto relative z-10 min-h-[80vh] flex items-center">
    <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[70vh] w-full">
      
      {/* Subheading: Poppins Bold / Title Case (Change #2) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full mb-12 self-start"
      >
        <div className="flex -space-x-2 items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-[#1f2a5a] bg-[#88cca4] flex items-center justify-center">
              <Star size={10} className="text-[#1f2a5a]" />
            </div>
          ))}
        </div>
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#88cca4] font-['Poppins']">
          We are a SINE IIT Bombay incubated startup
        </span>
      </motion.div>
      
      {/* Main Heading: Poppins Bold / Title Case (Change #2) */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="font-['Poppins'] font-bold text-[72px] md:text-[45px] lg:text-[48px] leading-[1.24] mb-12 tracking-tight text-white">
          
          <motion.span 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            className="block mb-4"
          >
            Nurturing Possibilities
          </motion.span>

          <motion.span 
            initial={{ x: 20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#88cca4] via-[#6bafc0] to-[#88cca4] bg-[length:200%_auto] animate-gradient-x"
          >
            creating learning environments where neurodivergent children thrive
          </motion.span>
{/* 
          <motion.span 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6 }} 
            className="block"
          >
            to learn, grow, and flourish
          </motion.span>

          <motion.span 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.8 }} 
            className="block text-[#88cca4]"
          >
            in ways that work for them.
          </motion.span> */}

        </h1>
      </motion.div>

      
      {/* Body Text: Atkinson Hyperlegible (Change #3) */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-[20px] md:text-[26px] text-white/60 mb-16 leading-relaxed max-w-4xl font-['Atkinson_Hyperlegible'] font-medium"
      >
    We are an organisation for neurodivergent children to learn, grow, and flourish in ways that work for them
      </motion.p>
    </div>
  </div>

  {/* Side Logo: Removed animation to keep Static (Change #23) */}
  <div className="absolute right-[5%] bottom-[15%] hidden lg:block">
    <div className="w-64 h-64 bg-gradient-to-br from-[#88cca4]/20 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-3xl flex items-center justify-center p-8 rotate-12">
      <img src="/logo2.png" alt="IMLC Icon" className="w-full h-full object-contain opacity-40 rounded-full" />
    </div>
  </div>
</section>

      {/* PROGRAMS SECTION */}
<section id="microschool" className="py-32 px-6 bg-white">
  <div className="container mx-auto max-w-7xl">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
      <div className="max-w-3xl">
        <h2 
          style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
          className="text-[#606eb4] font-bold tracking-[0.4em] uppercase text-[12px] mb-6"
        >
          Our Offerings
        </h2>
        
        {/* Change #10: Added the age group box next to the title */}
        <div className="flex flex-wrap items-center gap-6">
          <h3 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="font-bold text-[40px] md:text-[56px] text-[#1f2a5a] leading-none tracking-tight"
          >
            Tailored to the Learner.
          </h3>
          <div 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="bg-[#f8f9fa] px-6 py-3 rounded-2xl border border-gray-200 font-bold text-[#1f2a5a] text-sm md:text-base whitespace-nowrap shadow-sm"
          >
            10-15 Yr Old Children
          </div>
        </div>
      </div>
      
      <p 
        style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
        className="text-gray-400 font-bold italic text-lg lg:max-w-xs border-l-4 border-[#88cca4] pl-6"
      >
        After school programs, summer/winter break camps.
      </p>
    </div>

    {/* Change #4: Spark Sessions on Left, Affinity Pathways on Right */}
    <div className="grid md:grid-cols-2 gap-10">
      {[
        { 
          title: "Spark Sessions", 
          desc: "An exploratory entry program that helps us understand how a learner engages and explores.", 
          icon: Zap, 
          color: "bg-[#88cca4]" 
        },
        { 
          title: "Affinity Pathways", 
          desc: "personalized learning journeys built around what draws each learner in.", 
          icon: Star, 
          color: "bg-[#606eb4]" 
        },
      ].map((card, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -10 }} 
          className="p-12 rounded-[4rem] bg-[#f8f9fa] border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-xl transition-all"
        >
          <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg`}>
            <card.icon size={28} />
          </div>
          <h4 
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="text-2xl font-bold mb-4 text-[#1f2a5a]"
          >
            {card.title}
          </h4>
          <p 
            style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
            className="text-gray-500 text-[18px] leading-relaxed font-medium"
          >
            {card.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* PHILOSOPHY & JOURNEY SECTION */}
     {/* PHILOSOPHY & JOURNEY SECTION */}
<section className="py-20 md:py-32 bg-[#1f2a5a] text-white relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-[#88cca4]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
  
  <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24">
      
      {/* Left Column: Content */}
      <div className="lg:col-span-5 flex flex-col justify-between py-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          className="space-y-6 md:space-y-10"
        >
          <div>
            {/* Caption/Label: Atkinson Hyperlegible */}
            <h2 style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }} className="text-[#88cca4] font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px] mb-4 md:mb-6 flex items-center">
              <motion.span initial={{ width: 0 }} whileInView={{ width: 32 }} transition={{ duration: 0.8 }} className="hidden sm:block h-[1px] bg-[#88cca4] mr-4" /> 
              Philosophy
            </h2>
            {/* Heading 1: Poppins Bold (Digital 36-52px range) */}
            <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-[32px] sm:text-[44px] md:text-[52px] font-bold leading-[1.15] md:leading-[1.1] tracking-tight">
              Every learner’s journey begins with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88cca4] to-[#b4e3c8] italic">listening,</span> not labels.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 pt-4 max-w-xl">
            {["Agency", "Interest", "Choice", "Empathy", "Community", "Flexibility"].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
                className="px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-[#88cca4]"
              >
                {val}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="mt-12 lg:mt-32 flex justify-center lg:justify-start"
        >
          {/* <div className="bg-[#1f2a5a] px-8 py-8 md:px-12 md:py-10 rounded-[2rem] md:rounded-[2.9rem] border border-white/10 shadow-2xl inline-block text-center lg:text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#88cca4]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </div> */}
        </motion.div>
      </div>

      {/* Right Column: Pathway Journey Card */}
      <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-8 md:p-14 relative shadow-inner">
        {/* Subheading: Atkinson Hyperlegible */}
        <h4 style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }} className="text-white/20 uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-black mb-8 md:mb-12 text-center sm:text-left">The Pathway Journey</h4>
        
        <div className="space-y-4 md:space-y-6 relative">
          {[
            { title: "Parent Interview", sub: "Listening", desc: "Understanding context, interests, sensitivities, and family goals.", icon: <Users size={20}/> },
            { title: "Spark Sessions", sub: "Exploring", desc: "Observing how the learner engages and creates in real-time.", icon: <Zap size={20}/> },
            { title: "Discover Interests", sub: "Analyzing", desc: "Identifying interests and engagement patterns.", icon: <Search size={20}/> },
            { title: "Design a Pathway", sub: "Co-creating", desc: "Building a personalized plan with choice-based modules.", icon: <Compass size={20}/> },
            { title: "Affinity Pathways", sub: "Growing", desc: "Longer learning journeys built around sustained interests.", icon: <Rocket size={20}/> },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex items-start space-x-4 md:space-x-8 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#1f2a5a] border border-white/10 flex items-center justify-center text-[#88cca4] group-hover:bg-[#88cca4] group-hover:text-[#1f2a5a] transition-all duration-500 shadow-xl shrink-0">
                <div className="scale-75 md:scale-100">{item.icon}</div>
              </div>

              <div className="pt-1 md:pt-2">
                {/* Caption: Atkinson Hyperlegible */}
                <span style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }} className="text-[#88cca4]/60 text-[8px] md:text-[10px] font-black uppercase tracking-widest block mb-0.5 md:mb-1">
                  {item.sub}
                </span>
                {/* Heading 2: Poppins Bold (24-36px range) */}
                <h5 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-lg md:text-[24px] font-bold mb-1 md:mb-2">{item.title}</h5>
                {/* Body Text 2: Atkinson Hyperlegible (18-20px range) */}
                <p style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }} className="text-white/40 text-[14px] md:text-[18px] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
      {/* TEAM SECTION - ENHANCED */}
<section id="aboutus" className="py-32 px-6 bg-gradient-to-b from-white via-[#f8f9fa] to-white relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-20 left-10 w-32 h-32 bg-[#88cca4]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#606eb4]/10 rounded-full blur-3xl" />

  <div className="container mx-auto max-w-7xl relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
        className="inline-block mb-6"
      >
        <div className="px-6 py-3 bg-gradient-to-r from-[#1f2a5a] to-[#606eb4] rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-lg font-['Atkinson_Hyperlegible']">
          The Minds Behind Our Mission
        </div>
      </motion.div>

      <h3
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="font-bold text-[36px] md:text-[52px] mb-4 tracking-tight"
      >
        <span className="bg-gradient-to-r from-[#1f2a5a] via-[#606eb4] to-[#6bafc0] bg-clip-text text-transparent">
          Our Team
        </span>
      </h3>
      <p
        style={{ fontFamily: "'Atkinson_Hyperlegible', sans-serif" }}
        className="text-gray-500 text-lg max-w-2xl mx-auto"
      >
        Meet the passionate educators and experts dedicated to neurodivergent learners
      </p>
    </motion.div>

    {/* Founders Row - 2 Columns */}
    <motion.div
      className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      {[
        { name: 'Prof. Sridhar Iyer', title: 'Founder', img: "/Sridhar1.jpg", gradient: 'from-[#606eb4] to-[#1f2a5a]' },
        { name: 'Dr. Revathi Iyer', title: 'Co-Founder', img: '/Revathi1.jpeg', gradient: 'from-[#6bafc0] to-[#88cca4]' },
      ].map((member, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="group relative"
        >
          <div className="bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-100">
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-[3rem]`} />

            <div className="relative flex flex-col items-center text-center">
              {/* Avatar with animated ring */}
              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                  {/* Rotating gradient ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-20`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 relative z-10"
                  />
                </div>

                {/* Decorative dots */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#88cca4] rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-5 h-5 bg-[#606eb4] rounded-full shadow-lg"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Name and Title */}
              <h4
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-bold text-[26px] md:text-[28px] text-[#1f2a5a] mb-2"
              >
                {member.name}
              </h4>

              <p
                style={{ fontFamily: "'Atkinson_Hyperlegible', sans-serif" }}
                className="text-[#606eb4] font-bold text-[18px] mb-4"
              >
                {member.title}
              </p>

              {/* Decorative line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${member.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Other Team Members - 3 Columns */}
    <motion.div
      className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {[
        { name: 'Dr. Nandan P. A.', title: 'Head of Educational Services', img: '/NandanPA.png', gradient: 'from-[#88cca4] to-[#6bafc0]' },
        { name: 'Dr. T. G. Lakshmi', title: 'Program Consultant', img: '/lakshmi1.png', gradient: 'from-[#606eb4] to-[#6bafc0]' },
        { name: 'Aditya Iyer', title: 'Neurodiversity Consultant', img: '/Aditya2.jpg', gradient: 'from-[#88cca4] to-[#606eb4]' },
      ].map((member, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="group"
        >
          <div className="bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all duration-500 h-full border-2 border-transparent hover:border-gray-100">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-[2.5rem]`} />

            <div className="relative flex flex-col items-center text-center">
              {/* Avatar */}
              <motion.div
                className={`w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 relative`}
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-10`} />
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 relative z-10"
                />
              </motion.div>

              <h4
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="font-bold text-[22px] md:text-[24px] text-[#1f2a5a] mb-2"
              >
                {member.name}
              </h4>

              <p
                style={{ fontFamily: "'Atkinson_Hyperlegible', sans-serif" }}
                className="text-gray-400 text-[18px] mb-4"
              >
                {member.title}
              </p>

              {/* Decorative line */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${member.gradient} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
{/* UPGRADED CAREER / CTA SECTION */}
<section className="py-16 md:py-32 px-4 sm:px-6 font-['Poppins'] relative overflow-hidden">
  <div className="container mx-auto max-w-6xl">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group bg-[#1f2a5a] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(31,42,90,0.4)]"
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#88cca4] blur-[60px] md:blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#606eb4] blur-[60px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 items-stretch">
        {/* Left Side: Content */}
        <div className="p-8 sm:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center space-x-2 bg-[#88cca4]/10 border border-[#88cca4]/20 px-4 py-2 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#88cca4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#88cca4]"></span>
            </span>
            <span className="text-[#88cca4] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] font-['Atkinson_Hyperlegible']">We are hiring</span>
          </motion.div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-bold text-white leading-[1.2] lg:leading-[1.1] mb-6 tracking-tight">
            Shape the future of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88cca4] to-white italic">Inclusive Learning.</span>
          </h2>

          <p className="text-white/60 text-sm sm:text-base md:text-lg mb-8 max-w-md font-['Atkinson_Hyperlegible'] leading-relaxed">
           We're looking for passionate educators to help us build strength-based environments.
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {['Flexible Roles', 'Impact Driven'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-widest font-['Atkinson_Hyperlegible']">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Action Card */}
        <div className="bg-white/[0.02] backdrop-blur-xl p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <label className="text-[#88cca4] text-[10px] font-black uppercase tracking-[0.35em] font-['Atkinson_Hyperlegible'] block">Apply via Email</label>
              <div className="group/email relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#88cca4] to-[#606eb4] rounded-2xl blur opacity-10 group-hover/email:opacity-30 transition duration-500"></div>
                <div className="relative bg-[#1a234a]/80 border border-white/10 p-4 md:p-6 rounded-2xl flex items-center justify-between">
                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-sm font-['Poppins'] truncate mr-2">
                    inclusiveminds.learning@gmail.com
                  </span>
                  <button 
                    onClick={() => {
                        navigator.clipboard.writeText('inclusiveminds.learning@gmail.com');
                        alert('Email copied to clipboard!');
                    }}
                    className="p-2.5 bg-white/5 hover:bg-[#88cca4] hover:text-[#1f2a5a] text-white/50 rounded-xl transition-all shrink-0 active:scale-95"
                  >
                    <Mail size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-[#88cca4]/20 rounded-xl text-[#88cca4] shrink-0">
                  <Rocket size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs md:text-sm mb-1">Application Tip</h4>
                  <p className="text-white/40 text-[10px] md:text-xs font-['Atkinson_Hyperlegible'] leading-relaxed">
                    Use subject line <span className="text-[#88cca4] font-mono">"Joining IMLC"</span> and include your CV with a brief intro.
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="mailto:inclusiveminds.learning@gmail.com?subject=Joining%20IMLC"
              className="w-full py-4 md:py-6 bg-white text-[#1f2a5a] rounded-2xl font-bold text-center flex items-center justify-center space-x-3 hover:bg-[#88cca4] transition-all group/btn text-sm md:text-base active:scale-[0.98]"
            >
              <span>Send Your Application</span>
              <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* INQUIRY SECTION */}
<section id="contact" className="py-20 md:py-32 px-4 sm:px-6 bg-[#1f2a5a] text-white relative overflow-hidden font-['Poppins']">
  <div className="container mx-auto max-w-7xl relative z-10">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      {/* Left Side: Contact Info */}
      <div className="lg:col-span-5 w-full text-center lg:text-left space-y-8 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          {/* <h2 className="text-[#88cca4] font-bold tracking-[0.4em] uppercase text-[10px] md:text-[11px] font-['Atkinson_Hyperlegible']">Contact Inquiry</h2> */}
          <h3 className="text-[40px] sm:text-[54px] md:text-[70px] font-bold leading-[1.1] tracking-tight">
            Let's <br className="hidden lg:block" />Connect.
          </h3>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-6 bg-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/10 max-w-md mx-auto lg:mx-0">
          <div className="p-3 md:p-4 bg-[#88cca4]/10 rounded-2xl text-[#88cca4]">
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="text-left overflow-hidden">
            <p className="text-white/40 text-[9px] md:text-[10px] uppercase font-black tracking-widest font-['Atkinson_Hyperlegible'] mb-1">Email Address</p>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-sm font-['Poppins'] truncate mr-2">inclusiveminds.learning@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Side: Form Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        className="lg:col-span-7 w-full bg-white/[0.03] backdrop-blur-3xl p-6 sm:p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 shadow-3xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 font-['Poppins']">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#88cca4]/60 ml-2 font-['Atkinson_Hyperlegible']">Parent Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#88cca4]/40" size={18} />
                <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 pl-14 md:pl-16 pr-6 text-sm outline-none focus:border-[#88cca4] transition-all" placeholder="Full Name" />
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#88cca4]/60 ml-2 font-['Atkinson_Hyperlegible']">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-[#88cca4]/40" size={18} />
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 pl-14 md:pl-16 pr-6 text-sm outline-none focus:border-[#88cca4] transition-all" placeholder="Optional" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2 md:space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#88cca4]/60 ml-2 font-['Atkinson_Hyperlegible']">Email Address</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 px-6 md:px-8 text-sm outline-none focus:border-[#88cca4] transition-all" placeholder="name@email.com" />
          </div>

          <div className="space-y-2 md:space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#88cca4]/60 ml-2 font-['Atkinson_Hyperlegible']">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 px-6 md:px-8 text-sm resize-none outline-none focus:border-[#88cca4] transition-all" placeholder="Tell us about your learner..." />
          </div>

          <button disabled={loading} className="w-full py-5 md:py-6 bg-[#88cca4] text-[#1f2a5a] rounded-2xl md:rounded-3xl font-bold text-base md:text-lg flex items-center justify-center space-x-4 transition-all hover:bg-white active:scale-[0.98] disabled:opacity-50">
            {loading ? <Loader2 className="animate-spin" size={24} /> : <><span>Send Inquiry</span> <ArrowRight size={20} /></>}
          </button>
        </form>
      </motion.div>
    </div>
  </div>
</section>


      {/* FOOTER */}
<footer className="relative bg-white py-10 px-6 border-t border-gray-100">
  <div className="container mx-auto max-w-7xl relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
      
      {/* Left Column */}
      <div className="space-y-6 max-w-md">
        {/* <div className="space-y-3">
          
          <p 
            style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
            className="text-[#1f2a5a] text-[16px] font-semibold italic flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#88cca4]"></span>
            We are a SINE IIT Bombay incubated startup
          </p>
        </div> */}

        <div className="space-y-2">
          <p 
            style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
            className="text-[#88cca4] font-bold text-[9px] uppercase tracking-[0.3em]"
          >
            Address
          </p>

          <p 
            style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
            className="text-[#1f2a5a]/70 text-[16px] leading-relaxed font-medium"
          >
            SINE Office, 7th Floor, RBTIC Building, <br />
            IIT Bombay, Powai, Mumbai 400076.
          </p>

          <p 
            style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
            className="text-[#1f2a5a]/40 text-[14px]"
          >
            CIN: U85213MH2025PTC460403
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col md:items-end justify-end self-end w-full md:w-auto">
        <h4 
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="text-[#1f2a5a] font-bold text-[18px] mb-4 text-left md:text-right leading-snug"
        >
          InclusiveMinds Learning Collective Private Limited
        </h4>
        
        <div className="flex flex-col md:items-end space-y-4">
          <p 
            style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
            className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.35em]"
          >
            © 2026 All Rights Reserved
          </p>
          
          <nav className="flex items-center space-x-6 pt-3 border-t border-gray-100 w-full md:w-auto justify-start md:justify-end">
            {['Privacy', 'Terms & Conditions'].map((item) => (
              <a 
                key={item} 
                href="#" 
                style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}
                className="text-[16px] text-gray-400 font-semibold hover:text-[#1f2a5a] transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;








