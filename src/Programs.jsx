import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Lightbulb, Shield, Heart, ArrowRight, 
  CheckCircle2, Compass, BookOpen, MessageCircle, Star 
} from 'lucide-react';

/** * IMLC BRAND CONSTANTS 
 */
const COLORS = {
  navy: "#1f2a5a",   // Anchor/Stability [cite: 87]
  indigo: "#606eb4", // Empathy/Balance [cite: 89]
  aqua: "#6bafc0",   // Clarity/Ease [cite: 89]
  mint: "#88cca4",   // Growth/Safety [cite: 91]
  bg: "#FDFDFD"
};

const SectionHeader = ({ subtitle, title, description, dark = false }) => (
  <div className="max-w-3xl mb-16">
    <motion.h4 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`font-bold tracking-[0.3em] uppercase text-xs mb-4 ${dark ? 'text-white/60' : 'text-[#606eb4]'}`}
    >
      {subtitle}
    </motion.h4>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`font-['Poppins'] text-4xl md:text-5xl font-bold mb-6 ${dark ? 'text-white' : 'text-[#1f2a5a]'}`}
    >
      {title}
    </motion.h2>
    <p className={`text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-gray-500'}`}>
      {description}
    </p>
  </div>
);

const ProgramsAndCommunity = () => {
  return (
    <div className="bg-[#FDFDFD] font-['Atkinson_Hyperlegible'] text-[#1f2a5a]">
      
      {/* --- PROGRAMS SECTION ---  */}
      <section className="py-32 px-8 md:px-12" id="programs">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            subtitle="The Learning Experience"
            title="Interest-Driven Environments"
            description="We move away from 'deficits' to focus on unique strengths. Our programs are designed for neurodivergent learners aged 10-25 to flourish with confidence[cite: 51, 58]."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Program 1: Skill Exploration */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl shadow-navy-900/5 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#6bafc0]/10 rounded-2xl flex items-center justify-center text-[#6bafc0] mb-8 group-hover:bg-[#6bafc0] group-hover:text-white transition-all">
                  <Compass size={28} />
                </div>
                <h3 className="font-['Poppins'] text-2xl font-bold mb-4">Strength-Based Mentorship</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  One-on-one and small group sessions focusing on personal interests to build practical life competencies[cite: 50, 51].
                </p>
                <ul className="space-y-3 mb-10">
                  {['Personalized Pace', 'Low-Sensory Design', 'Interest Alignment'].map(item => (
                    <li key={item} className="flex items-center text-sm font-bold text-[#1f2a5a]/70">
                      <CheckCircle2 size={16} className="text-[#88cca4] mr-3" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center font-black uppercase tracking-widest text-xs group-hover:text-[#606eb4] transition-colors">
                  View Syllabus <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Program 2: Social Collective */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-10 bg-[#1f2a5a] rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#88cca4] mb-8">
                  <Users size={28} />
                </div>
                <h3 className="font-['Poppins'] text-2xl font-bold mb-4">The Collective Hub</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  A sanctuary for social connection where young adults build a community based on mutual respect and shared interests.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <span className="block text-2xl font-bold text-[#88cca4]">10-25</span>
                    <span className="text-[10px] uppercase font-black opacity-40">Target Age [cite: 58]</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <span className="block text-2xl font-bold text-[#6bafc0]">100%</span>
                    <span className="text-[10px] uppercase font-black opacity-40">Inclusive [cite: 44]</span>
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#606eb4] rounded-full blur-[100px] opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMMUNITY ECOSYSTEM SECTION --- [cite: 47, 60] */}
      <section className="py-32 px-8 md:px-12 bg-[#f8fafb]" id="community">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <SectionHeader 
              subtitle="The Collective"
              title="A Sanctuary for Families"
              description="Nurturing belonging by connecting learners, parents, and educators through shared practice and growth[cite: 47]."
            />
            <button className="mb-16 px-10 py-5 bg-[#1f2a5a] text-white rounded-2xl font-bold hover:bg-[#606eb4] transition-all flex items-center group">
              Join the Community <MessageCircle className="ml-3 group-hover:rotate-12 transition-transform" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stakeholder 1: For Parents */}
            <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm text-center group">
              <div className="mx-auto w-20 h-20 bg-[#606eb4]/5 rounded-full flex items-center justify-center text-[#606eb4] mb-8 group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <h4 className="font-['Poppins'] text-xl font-bold mb-4">Parent Allies</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Support for families seeking alternatives to traditional systems[cite: 59]. No parent should feel isolated or uncertain[cite: 49].
              </p>
            </div>

            {/* Stakeholder 2: For Educators */}
            <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm text-center group">
              <div className="mx-auto w-20 h-20 bg-[#88cca4]/5 rounded-full flex items-center justify-center text-[#88cca4] mb-8 group-hover:scale-110 transition-transform">
                <BookOpen size={32} />
              </div>
              <h4 className="font-['Poppins'] text-xl font-bold mb-4">Educator Network</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering secondary caregivers with neuro-inclusive tools and shared insights[cite: 61].
              </p>
            </div>

            {/* Stakeholder 3: For Learners */}
            <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm text-center group">
              <div className="mx-auto w-20 h-20 bg-[#6bafc0]/5 rounded-full flex items-center justify-center text-[#6bafc0] mb-8 group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h4 className="font-['Poppins'] text-xl font-bold mb-4">Learner Voices</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Creating space where neurodivergent contributors are recognized as society's valuable assets[cite: 41].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFOGRAPHIC: THE IMLC MODEL --- */}
      <section className="py-32 px-8 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-[#1f2a5a] rounded-[5rem] p-16 md:p-24 relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Poppins'] text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Our Anchor <br /> Philosophy
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                The IMLC model uses Deep Navy for stability and Fresh Mint for growth, ensuring every sensory need is met with calm and reassurance[cite: 87, 92].
              </p>
              <div className="space-y-6">
                <div className="flex items-center p-6 bg-white/5 rounded-3xl border border-white/10">
                  <Shield className="text-[#88cca4] mr-6" size={32} />
                  <div>
                    <h5 className="text-white font-bold">Psychological Safety</h5>
                    <p className="text-white/40 text-sm">Predictable and inclusive environments[cite: 45].</p>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white/5 rounded-3xl border border-white/10">
                  <Lightbulb className="text-[#6bafc0] mr-6" size={32} />
                  <div>
                    <h5 className="text-white font-bold">Empowerment</h5>
                    <p className="text-white/40 text-sm">Shaping a future through individual strengths[cite: 54].</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Brand Metaphor: The Bird [cite: 72] */}
            <div className="relative flex justify-center">
              <div className="w-full aspect-square max-w-md bg-gradient-to-tr from-[#606eb4] to-[#88cca4] rounded-full blur-[100px] opacity-30 absolute" />
              <div className="relative p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/20 text-center">
                <img src="./logo.png" alt="IMLC Bird Logo" className="w-48 mx-auto mb-10" />
                <p className="text-white/80 font-['Poppins'] italic text-lg">
                  "The 'V' pattern symbolizes a bird flying towards better horizons"[cite: 72].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramsAndCommunity;