import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionGraphics = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');

  // Documentary scenes with newspaper/archival style
  const scenes = [
    {
      id: 1,
      type: 'newspaper-intro',
      headline: 'INCLUSIVEMINDS',
      subheadline: 'Learning Collective Pvt. Ltd.',
      date: 'Established 2024',
      theme: 'A New Era in Neurodivergent Education'
    },
    {
      id: 2,
      type: 'clipping',
      headline: 'WHERE NEURODIVERGENT',
      highlightText: 'MINDS FLOURISH',
      quote: '"Creating inclusive learning environments where every learner thrives"',
      source: '— IMLC Mission Statement'
    },
    {
      id: 3,
      type: 'documentary-facts',
      title: 'BY THE NUMBERS',
      facts: [
        { number: '500+', label: 'Learners Empowered', year: '2024' },
        { number: '95%', label: 'Success Rate', year: 'Annual Report' },
        { number: '50+', label: 'Expert Educators', year: 'Current Team' }
      ]
    },
    {
      id: 4,
      type: 'newspaper-grid',
      headline: 'CORE VALUES',
      articles: [
        { title: 'INCLUSION', content: 'Creating environments where neurodivergent learners feel welcomed and valued.' },
        { title: 'COMMUNITY', content: 'Connecting learners, parents, and educators through shared practice.' },
        { title: 'EMPATHY', content: 'Acting as understanding mentors, ensuring no one feels isolated.' },
        { title: 'INTEREST-BASED', content: 'Focusing on unique strengths and abilities rather than deficits.' }
      ]
    },
    {
      id: 5,
      type: 'documentary-ending',
      headline: 'JOIN THE MOVEMENT',
      subtext: 'Shape the Future of Inclusive Learning',
      stamp: 'APPROVED'
    }
  ];

  // Typewriter effect
  useEffect(() => {
    if (currentScene === 1 && isPlaying) {
      const text = scenes[1].quote;
      let index = 0;
      setTypewriterText('');

      const timer = setInterval(() => {
        if (index < text.length) {
          setTypewriterText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [currentScene, isPlaying]);

  // Auto-play scenes
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setCurrentScene((prev) => {
          if (prev < scenes.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, 4000); // 4 seconds per scene

      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentScene, scenes.length]);

  const handlePlay = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setCurrentScene(0);
    setIsPlaying(false);
    setTypewriterText('');
  };

  return (
    <div className="min-h-screen bg-[#2a2420] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Video Container - 9:16 Aspect Ratio */}
        <div className="relative bg-[#f4e8d8] rounded-lg overflow-hidden shadow-2xl border-8 border-[#3d3530]" style={{ aspectRatio: '9/16' }}>

          {/* Paper Texture Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none z-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
              mixBlendMode: 'multiply'
            }}
          />

          {/* Animated grain effect */}
          <motion.div
            className="absolute inset-0 opacity-10 pointer-events-none z-40"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: '200px 200px'
            }}
          />

          {/* Main Content */}
          <div className="relative h-full p-8 overflow-hidden">
            <AnimatePresence mode="wait">

              {/* Scene 1: Newspaper Intro */}
              {currentScene === 0 && (
                <motion.div
                  key="scene1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center"
                >
                  {/* Newspaper Header */}
                  <motion.div
                    className="border-t-4 border-b-4 border-[#1f2a5a] py-4 mb-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="text-center font-serif"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-xs tracking-[0.3em] text-[#1f2a5a] mb-1 font-['Montserrat']">EST. 2024</div>
                      <div className="text-sm text-[#1f2a5a]/60 font-['Montserrat']">—————— ◆ ——————</div>
                    </motion.div>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    className="text-6xl font-black text-center mb-4 font-serif text-[#1f2a5a] leading-none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    INCLUSIVE
                    <br />
                    MINDS
                  </motion.h1>

                  {/* Subheadline */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-lg font-bold text-[#606eb4] font-['Montserrat']">Learning Collective Pvt. Ltd.</div>
                    <div className="text-sm text-[#1f2a5a]/70 mt-2 italic font-['Montserrat']">"A New Era in Neurodivergent Education"</div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="flex justify-center gap-4 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-[#1f2a5a] rotate-45"
                        animate={{ rotate: [45, 135, 45] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </motion.div>

                  {/* Ink splatter effect */}
                  <motion.div
                    className="absolute bottom-10 right-10 w-32 h-32 bg-[#1f2a5a] opacity-10 blur-2xl rounded-full"
                    animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              )}

              {/* Scene 2: Newspaper Clipping with Typewriter */}
              {currentScene === 1 && (
                <motion.div
                  key="scene2"
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: 90 }}
                  transition={{ duration: 0.6 }}
                  className="h-full flex flex-col justify-center"
                  style={{ perspective: '1000px' }}
                >
                  {/* Torn paper effect */}
                  <motion.div
                    className="bg-white border-4 border-dashed border-[#1f2a5a] p-8 shadow-2xl relative"
                    initial={{ scale: 0.8, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{
                      clipPath: 'polygon(0% 2%, 3% 0%, 7% 2%, 12% 0%, 17% 2%, 22% 0%, 27% 2%, 32% 0%, 37% 2%, 42% 0%, 47% 2%, 52% 0%, 57% 2%, 62% 0%, 67% 2%, 72% 0%, 77% 2%, 82% 0%, 87% 2%, 92% 0%, 97% 2%, 100% 0%, 100% 100%, 97% 98%, 92% 100%, 87% 98%, 82% 100%, 77% 98%, 72% 100%, 67% 98%, 62% 100%, 57% 98%, 52% 100%, 47% 98%, 42% 100%, 37% 98%, 32% 100%, 27% 98%, 22% 100%, 17% 98%, 12% 100%, 7% 98%, 3% 100%, 0% 98%)'
                    }}
                  >
                    {/* Highlight marker effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#88cca4] opacity-20"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      style={{ transformOrigin: 'left' }}
                    />

                    {/* Headline */}
                    <motion.h2
                      className="text-4xl font-black text-[#1f2a5a] mb-3 relative z-10 text-center font-serif"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      WHERE NEURODIVERGENT
                    </motion.h2>

                    <motion.h2
                      className="text-5xl font-black text-[#606eb4] mb-6 relative z-10 text-center font-serif"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      MINDS FLOURISH
                    </motion.h2>

                    {/* Typewriter quote */}
                    <motion.div
                      className="text-lg text-[#1f2a5a] italic border-l-4 border-[#88cca4] pl-4 mb-4 relative z-10 font-mono"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {typewriterText}
                      <motion.span
                        className="inline-block w-2 h-5 bg-[#1f2a5a] ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Source */}
                    <motion.div
                      className="text-sm text-right text-[#1f2a5a]/70 relative z-10 font-['Montserrat']"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      — IMLC Mission Statement
                    </motion.div>
                  </motion.div>

                  {/* Tape effect */}
                  <motion.div
                    className="absolute top-20 right-10 w-24 h-8 bg-[#d4c5b0] opacity-60 rotate-12"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                  />
                </motion.div>
              )}

              {/* Scene 3: Documentary Facts/Stats */}
              {currentScene === 2 && (
                <motion.div
                  key="scene3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center"
                >
                  {/* Title Banner */}
                  <motion.div
                    className="bg-[#1f2a5a] text-white py-6 mb-8 relative overflow-hidden"
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    <motion.h2
                      className="text-4xl font-black text-center tracking-wider font-['Montserrat']"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      BY THE NUMBERS
                    </motion.h2>

                    {/* Scanning line effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Stats Cards */}
                  <div className="space-y-4">
                    {scenes[2].facts.map((fact, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: i % 2 === 0 ? -300 : 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 80 }}
                        className="relative"
                      >
                        {/* Stamp effect */}
                        <motion.div
                          className="absolute -top-3 -right-3 w-20 h-20 border-4 border-[#606eb4] rounded-full flex items-center justify-center bg-[#f4e8d8] z-10 rotate-12"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 12 }}
                          transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                        >
                          <span className="text-xs font-black text-[#606eb4] font-['Montserrat']">{fact.year}</span>
                        </motion.div>

                        <div className="bg-white border-l-8 border-[#88cca4] p-6 shadow-lg">
                          <motion.div
                            className="text-6xl font-black text-[#1f2a5a] mb-2 font-['Montserrat']"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.2, type: "spring", stiffness: 200 }}
                          >
                            {fact.number}
                          </motion.div>
                          <div className="text-lg font-bold text-[#606eb4] uppercase tracking-wide font-['Montserrat']">
                            {fact.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Scene 4: Newspaper Grid of Articles */}
              {currentScene === 3 && (
                <motion.div
                  key="scene4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center"
                >
                  {/* Header */}
                  <motion.div
                    className="text-center mb-6 border-b-4 border-t-4 border-[#1f2a5a] py-4"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-4xl font-black text-[#1f2a5a] font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                      CORE VALUES
                    </h2>
                  </motion.div>

                  {/* Grid of articles */}
                  <div className="grid grid-cols-2 gap-4">
                    {scenes[3].articles.map((article, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                        className="bg-white border-2 border-[#1f2a5a] p-4 shadow-md relative overflow-hidden"
                      >
                        {/* Corner fold effect */}
                        <div
                          className="absolute top-0 right-0 w-8 h-8 bg-[#d4c5b0]"
                          style={{
                            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                            boxShadow: '-2px 2px 4px rgba(0,0,0,0.2)'
                          }}
                        />

                        {/* Highlight marker */}
                        <motion.div
                          className="absolute top-0 left-0 h-full w-full bg-[#88cca4] opacity-10"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                          style={{ transformOrigin: 'left' }}
                        />

                        <h3 className="text-xl font-black text-[#1f2a5a] mb-2 relative z-10 font-['Montserrat']">
                          {article.title}
                        </h3>
                        <p className="text-xs text-[#1f2a5a]/80 relative z-10 font-['Montserrat']">
                          {article.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Scene 5: Documentary Ending with Stamp */}
              {currentScene === 4 && (
                <motion.div
                  key="scene5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center items-center relative"
                >
                  {/* Main headline */}
                  <motion.h1
                    className="text-6xl font-black text-center mb-6 text-[#1f2a5a] font-serif"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    JOIN THE
                    <br />
                    MOVEMENT
                  </motion.h1>

                  <motion.p
                    className="text-xl text-[#606eb4] text-center mb-8 font-bold font-['Montserrat']"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Shape the Future of Inclusive Learning
                  </motion.p>

                  {/* Stamp Effect */}
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -15 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-48 h-48 border-8 border-[#88cca4] rounded-full flex items-center justify-center bg-[#88cca4]/10 relative">
                      <div className="text-center">
                        <div className="text-4xl font-black text-[#88cca4] font-['Montserrat']">APPROVED</div>
                        <div className="text-sm font-bold text-[#88cca4] mt-2 font-['Montserrat']">IMLC</div>
                      </div>

                      {/* Rotating outer ring */}
                      <motion.div
                        className="absolute inset-0 border-4 border-dashed border-[#88cca4] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Ink splatter */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#88cca4] opacity-30 blur-xl rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Scrolling ticker */}
                  <motion.div
                    className="absolute bottom-8 left-0 right-0 bg-[#1f2a5a] py-3 overflow-hidden"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.div
                      className="text-white font-bold whitespace-nowrap font-['Montserrat']"
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      ★ EMPOWERING NEURODIVERGENT LEARNERS ★ SINE IIT BOMBAY INCUBATED ★ CONTACT: inclusiveminds.learning@gmail.com ★
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Film strip effect on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#1f2a5a] flex flex-col">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-1 border-b-2 border-[#f4e8d8]" />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-[#1f2a5a] flex flex-col">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-1 border-b-2 border-[#f4e8d8]" />
            ))}
          </div>

          {/* Scene Counter */}
          <div className="absolute top-4 right-8 bg-[#1f2a5a] text-white px-4 py-2 rounded-full font-mono text-sm font-bold">
            {String(currentScene + 1).padStart(2, '0')}/{String(scenes.length).padStart(2, '0')}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="px-10 py-4 bg-[#88cca4] text-[#1f2a5a] rounded-lg font-black text-lg disabled:opacity-50 hover:bg-[#6bafc0] transition-all shadow-lg font-['Montserrat'] uppercase tracking-wider"
          >
            {isPlaying ? '▶ Playing...' : '▶ Play Documentary'}
          </button>
          <button
            onClick={handleReset}
            className="px-10 py-4 bg-[#1f2a5a] text-white rounded-lg font-black text-lg hover:bg-[#606eb4] transition-all shadow-lg font-['Montserrat'] uppercase tracking-wider"
          >
            ↻ Reset
          </button>
        </div>

        {/* Info */}
        <div className="mt-4 text-center text-[#f4e8d8] text-sm font-mono">
          <p>Documentary-Style Motion Graphics • Scene {currentScene + 1} of {scenes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default MotionGraphics;
