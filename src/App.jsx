import { ArrowRight, Users, Heart, Lightbulb, BookOpen, Sparkles, Target, Award, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#88cca4] via-[#6bafc0] to-[#1f2a5a] flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg viewBox="0 0 100 100" className="w-8 h-8">
                  <circle cx="50" cy="35" r="4" fill="white"/>
                  <circle cx="35" cy="50" r="4" fill="white"/>
                  <circle cx="65" cy="50" r="4" fill="white"/>
                  <circle cx="50" cy="65" r="4" fill="white"/>
                </svg>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#1f2a5a] to-[#606eb4] bg-clip-text text-transparent">
                  InclusiveMinds
                </h1>
                <p className="text-xs text-[#606eb4]">Learning Collective Pvt. Ltd.</p>
              </div>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Programs', 'Values', 'Team'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-[#1f2a5a] hover:text-[#606eb4] transition-colors font-medium group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#606eb4] to-[#6bafc0] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-[#6bafc0] to-[#88cca4] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#1f2a5a] via-[#606eb4] to-[#6bafc0] overflow-hidden">
        {/* Decorative floating shapes */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#88cca4] opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#6bafc0] opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Empowering Neurodiversity</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-[#88cca4] to-white bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                Neurodivergent
                <br />
                Learners
              </h2>

              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Creating inclusive and interest-driven learning environments where every learner flourishes and is valued for their strengths.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="bg-[#88cca4] text-[#1f2a5a] px-8 py-4 rounded-full hover:bg-white transition-all font-bold flex items-center gap-2 text-lg shadow-lg hover:shadow-xl hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#1f2a5a] transition-all font-bold text-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-full aspect-square max-w-md mx-auto relative">
                {/* Animated outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Logo SVG */}
                <motion.svg
                  viewBox="0 0 400 400"
                  className="w-full h-full relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Main Circle Background */}
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="#88cca4"
                    opacity="0.3"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* V-shaped pattern */}
                  <path d="M 200 80 L 80 200 L 200 320 L 320 200 Z" fill="#6bafc0" opacity="0.4"/>
                  <path d="M 200 100 L 100 200 L 200 300 L 300 200 Z" fill="#606eb4" opacity="0.4"/>

                  {/* People dots with animation */}
                  <motion.circle
                    cx="200"
                    cy="120"
                    r="15"
                    fill="white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.circle
                    cx="140"
                    cy="180"
                    r="15"
                    fill="white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="260"
                    cy="180"
                    r="15"
                    fill="white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.circle
                    cx="200"
                    cy="240"
                    r="15"
                    fill="white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                </motion.svg>

                {/* Decorative dots */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-[#88cca4] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: '500+', label: 'Learners Empowered', icon: Users },
              { number: '95%', label: 'Success Rate', icon: Award },
              { number: '50+', label: 'Expert Educators', icon: Star },
              { number: '10+', label: 'Years Experience', icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#606eb4] to-[#6bafc0] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1f2a5a] to-[#606eb4] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-[#f5f5f5] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#88cca4] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#606eb4] opacity-5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1f2a5a] via-[#606eb4] to-[#6bafc0] bg-clip-text text-transparent">
                Our Foundation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by purpose and driven by passion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6bafc0] to-[#88cca4] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-[#6bafc0]">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[#6bafc0] to-[#88cca4] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lightbulb className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#1f2a5a] mb-4">Our Mission</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#6bafc0] to-[#88cca4] rounded-full mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create inclusive and interest-driven learning environments for neurodivergent children and young adults, where they can flourish and are valued for their strengths.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#606eb4] to-[#1f2a5a] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-[#606eb4]">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[#606eb4] to-[#1f2a5a] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#1f2a5a] mb-4">Our Vision</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#606eb4] to-[#1f2a5a] rounded-full mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  A future where neurodivergent individuals are recognised, supported, and empowered as valuable contributors to society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="30" r="5" fill="#1f2a5a"/>
              <circle cx="30" cy="50" r="5" fill="#606eb4"/>
              <circle cx="70" cy="50" r="5" fill="#6bafc0"/>
              <circle cx="50" cy="70" r="5" fill="#88cca4"/>
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="30" r="5" fill="#88cca4"/>
              <circle cx="30" cy="50" r="5" fill="#6bafc0"/>
              <circle cx="70" cy="50" r="5" fill="#606eb4"/>
              <circle cx="50" cy="70" r="5" fill="#1f2a5a"/>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-[#606eb4] to-[#6bafc0] rounded-full text-white font-semibold shadow-lg">
                What Drives Us
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1f2a5a] via-[#606eb4] to-[#6bafc0] bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Our values guide everything we do at InclusiveMinds Learning Collective
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Heart,
                title: 'Inclusion',
                description: 'A commitment to creating environments where neurodivergent learners feel welcomed, respected, and valued for who they are.',
                gradient: 'from-[#606eb4] to-[#1f2a5a]',
                accent: '#606eb4'
              },
              {
                icon: Users,
                title: 'Community Building',
                description: 'Nurturing belonging by connecting learners, parents, educators, and caregivers through shared practice and collective growth.',
                gradient: 'from-[#88cca4] to-[#6bafc0]',
                accent: '#88cca4'
              },
              {
                icon: Heart,
                title: 'Empathy & Support',
                description: 'Acting as an understanding mentor and ally to learners, families, and educators, ensuring no one feels isolated or uncertain.',
                gradient: 'from-[#6bafc0] to-[#606eb4]',
                accent: '#6bafc0'
              },
              {
                icon: BookOpen,
                title: 'Interest-Based Learning',
                description: 'Focusing on learners\' unique strengths, interests, and abilities rather than deficits, enabling them to flourish with confidence.',
                gradient: 'from-[#606eb4] to-[#6bafc0]',
                accent: '#606eb4'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-100 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h4 className="text-2xl font-bold text-[#1f2a5a] mb-4 group-hover:text-[#606eb4] transition-colors">
                      {value.title}
                    </h4>

                    {/* Decorative line */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${value.gradient} rounded-full mb-4`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '60px' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    />

                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${value.gradient} opacity-10 rounded-tl-3xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Purpose Statement */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#6bafc0] via-[#88cca4] to-[#6bafc0] overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#606eb4] opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="purpose-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="20" r="3" fill="white"/>
                <circle cx="30" cy="50" r="3" fill="white"/>
                <circle cx="70" cy="50" r="3" fill="white"/>
                <circle cx="50" cy="80" r="3" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#purpose-pattern)"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Why We Exist</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Our Purpose
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white opacity-5 rounded-3xl blur-2xl" />
              <p className="relative text-xl md:text-2xl text-white leading-relaxed backdrop-blur-sm bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
                To empower neurodivergent young people to thrive by creating inclusive, strength-based learning experiences that celebrate individuality, nurture confidence, and build supportive communities where every learner feels seen, valued, and capable of shaping their own future.
              </p>
            </motion.div>

            {/* Decorative dots */}
            <div className="flex justify-center gap-3 mt-10">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-gradient-to-b from-white to-[#f5f5f5] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#606eb4] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#88cca4] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-[#1f2a5a] to-[#606eb4] rounded-full text-white font-semibold shadow-lg">
                The Faces Behind Our Mission
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1f2a5a] via-[#606eb4] to-[#6bafc0] bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Meet the passionate individuals behind InclusiveMinds Learning Collective
            </p>
          </motion.div>

          {/* Founder & Co-founder Row */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: 'Founder Name',
                role: 'Founder',
                desc: 'Passionate about creating inclusive learning environments and empowering neurodivergent individuals.',
                gradient: 'from-[#606eb4] to-[#1f2a5a]',
                initial: 'F'
              },
              {
                name: 'Co-Founder Name',
                role: 'Co-Founder',
                desc: 'Dedicated to building supportive communities and strength-based learning experiences.',
                gradient: 'from-[#6bafc0] to-[#88cca4]',
                initial: 'C'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-100 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Avatar */}
                  <motion.div
                    className="relative inline-block mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 border-4 border-white/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="text-white text-5xl font-bold relative z-10">{member.initial}</span>
                    </div>
                    {/* Decorative dots around avatar */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-[#88cca4] rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#606eb4] rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1f2a5a] mb-2">{member.name}</h3>
                    <p className="text-[#606eb4] font-bold text-lg mb-4">{member.role}</p>
                    <div className={`h-1 w-24 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-6`} />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Team Members Row */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { name: 'Team Member 1', role: 'Role Title', desc: 'Expert in neurodiversity and inclusive education practices.', gradient: 'from-[#88cca4] to-[#6bafc0]', initial: 'T1' },
              { name: 'Team Member 2', role: 'Role Title', desc: 'Specialist in interest-based learning and curriculum development.', gradient: 'from-[#606eb4] to-[#6bafc0]', initial: 'T2' },
              { name: 'Team Member 3', role: 'Role Title', desc: 'Focused on community building and family engagement.', gradient: 'from-[#88cca4] to-[#606eb4]', initial: 'T3' }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 h-full border-2 border-transparent hover:border-gray-100">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                  {/* Avatar */}
                  <motion.div
                    className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg relative`}
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white text-3xl font-bold">{member.initial}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#1f2a5a] mb-2">{member.name}</h3>
                    <p className="text-[#606eb4] font-semibold mb-4">{member.role}</p>
                    <div className={`h-1 w-16 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-4`} />
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-[#1f2a5a] via-[#606eb4] to-[#1f2a5a] overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#88cca4] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-[#6bafc0] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="20" r="2" fill="white"/>
                <circle cx="20" cy="40" r="2" fill="white"/>
                <circle cx="60" cy="40" r="2" fill="white"/>
                <circle cx="40" cy="60" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)"/>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#88cca4] to-[#6bafc0] rounded-2xl flex items-center justify-center mx-auto shadow-2xl rotate-6 hover:rotate-0 transition-transform">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join us in creating an inclusive learning environment for neurodivergent learners
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="group relative bg-[#88cca4] text-[#1f2a5a] px-12 py-5 rounded-full font-bold text-lg shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us Today
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#1f2a5a] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Contact Us Today <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>

              <motion.button
                className="group relative border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg backdrop-blur-sm bg-white/10 hover:bg-white hover:text-[#1f2a5a] transition-all shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Programs
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#88cca4]" />
                <span className="font-medium">Expert Educators</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#88cca4]" />
                <span className="font-medium">Proven Results</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#88cca4]" />
                <span className="font-medium">Community Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#1f2a5a] via-[#1f2a5a] to-[#606eb4] py-16 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6bafc0] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#88cca4] opacity-5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#88cca4] via-[#6bafc0] to-[#606eb4] flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 100 100" className="w-9 h-9">
                    <circle cx="50" cy="35" r="4" fill="white"/>
                    <circle cx="35" cy="50" r="4" fill="white"/>
                    <circle cx="65" cy="50" r="4" fill="white"/>
                    <circle cx="50" cy="65" r="4" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl">InclusiveMinds</h3>
                  <p className="text-white/70 text-sm">Learning Collective Pvt. Ltd.</p>
                </div>
              </motion.div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Empowering neurodivergent learners through inclusive, interest-driven education and supportive communities.
              </p>
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#88cca4] transition-colors group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-5 h-5 bg-white/70 group-hover:bg-white rounded-full" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#88cca4] to-[#6bafc0] rounded-full" />
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                {['About Us', 'Programs', 'Core Values', 'Our Team'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#88cca4] group-hover:w-4 transition-all" />
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#6bafc0] to-[#606eb4] rounded-full" />
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                {['Email Us', 'Call Us', 'Visit Us', 'Social Media'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/70 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#6bafc0] group-hover:w-4 transition-all" />
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; 2024 InclusiveMinds Learning Collective Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-white/30">|</span>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App
