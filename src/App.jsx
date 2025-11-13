import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Droplets,
  Sprout,
  Waves,
  Cpu,
  Gauge,
  LineChart,
  Zap,
  CloudSun,
  Smartphone,
  Sun,
  Bot,
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  CircleChevronRight,
  Radio,
  Ruler,
} from 'lucide-react'

const colors = {
  green: '#38b000',
  blue: '#0077b6',
}

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full py-24 md:py-32 ${className}`}>
    {children}
  </section>
)

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
    className={`rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${className}`}
  >
    {children}
  </motion.div>
)

const Background = () => {
  // Subtle flowing particles and gradient wash
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-emerald-50" />
      <div className="absolute inset-0 opacity-[0.35]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38b000" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#0077b6" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      {/* soft parallax water waves bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 overflow-hidden">
        <WavesSVG />
      </div>

      {/* floating particles */}
      <div className="absolute inset-0">{
        Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="absolute block w-2 h-2 rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              background: i % 3 === 0 ? colors.green : colors.blue,
              opacity: 0.12,
              transform: 'translateZ(0)',
              animation: `float${i % 4} ${12 + (i % 5)}s ease-in-out ${i * 0.6}s infinite`,
            }}
          />
        ))
      }</div>

      <style>{`
        @keyframes float0 { 0%{transform:translateY(0)} 50%{transform:translateY(-16px)} 100%{transform:translateY(0)} }
        @keyframes float1 { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
        @keyframes float2 { 0%{transform:translateY(0)} 50%{transform:translateY(-22px)} 100%{transform:translateY(0)} }
        @keyframes float3 { 0%{transform:translateY(0)} 50%{transform:translateY(-14px)} 100%{transform:translateY(0)} }
      `}</style>
    </div>
  )
}

const WavesSVG = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
    <svg className="absolute bottom-0 left-0 w-[200%] animate-[drift_18s_linear_infinite] opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill={colors.blue} fillOpacity="0.10" d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,122.7C672,107,768,149,864,181.3C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <svg className="absolute bottom-0 left-0 w-[200%] animate-[drift_28s_linear_infinite_reverse]" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill={colors.green} fillOpacity="0.12" d="M0,224L40,208C80,192,160,160,240,138.7C320,117,400,107,480,106.7C560,107,640,117,720,117.3C800,117,880,107,960,106.7C1040,107,1120,117,1200,144C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg>
    <style>{`@keyframes drift { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
  </div>
)

const Navbar = () => {
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#workflow', label: 'How It Works' },
    { href: '#features', label: 'Features' },
    { href: '#roadmap', label: 'Future' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <div className="backdrop-blur-xl bg-white/70 border border-white/60 rounded-full shadow-lg px-3 py-2">
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm md:text-[0.95rem] px-3 py-1.5 rounded-full text-slate-700 hover:text-white transition-colors duration-200"
              style={{
                background: 'transparent',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.blue)
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -60])
  return (
    <Section id="hero" className="pt-36 md:pt-44">
      <div className="absolute inset-0 -z-10">
        <WavesSVG />
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-800"
            >
              BlueRive: Smart Irrigation. Smarter Future.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-slate-600"
            >
              AI + IoT powered precision irrigation and groundwater monitoring system.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#solution" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                style={{ background: colors.green }}>
                Explore Project <CircleChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-slate-300 text-slate-700 hover:bg-white/70 backdrop-blur">
                Try Dashboard <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
          <motion.div style={{ y }} className="relative h-[340px] md:h-[420px]">
            <ESP32Illustration />
            <SoilSensorIllustration />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

const ESP32Illustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="absolute right-6 top-4"
  >
    <GlassCard className="p-4">
      <div className="relative w-56 h-40">
        <div className="absolute inset-2 rounded-xl bg-slate-900" />
        <div className="absolute top-3 left-3 w-10 h-10 rounded-md bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center">
          <Cpu className="text-white" />
        </div>
        <div className="absolute right-3 top-4 space-y-2">
          <div className="w-2 h-2 rounded-full" style={{ background: colors.green }} />
          <div className="w-2 h-2 rounded-full" style={{ background: colors.blue }} />
        </div>
        <div className="absolute bottom-3 left-3 right-3 h-2 bg-slate-700 rounded" />
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-10 rounded-b-xl bg-slate-800 shadow"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </div>
      <p className="mt-3 text-sm text-slate-600">ESP32 Controller</p>
    </GlassCard>
  </motion.div>
)

const SoilSensorIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.35 }}
    className="absolute left-6 bottom-2"
  >
    <GlassCard className="p-4">
      <div className="relative w-56 h-40">
        <div className="absolute inset-3 rounded-xl bg-gradient-to-b from-amber-900/60 via-amber-800/60 to-emerald-700/60" />
        <div className="absolute left-6 top-6 w-2 h-24 bg-slate-800 rounded" />
        <div className="absolute left-6 top-6 w-2 h-8 bg-emerald-400 rounded" />
        <div className="absolute left-8 top-6 w-2 h-24 bg-slate-700/80 rounded" />
        <Droplets className="absolute right-6 top-6 text-sky-500 w-7 h-7" />
        <Sprout className="absolute right-5 bottom-6 text-emerald-500 w-7 h-7" />
      </div>
      <p className="mt-3 text-sm text-slate-600">Soil Moisture Sensor</p>
    </GlassCard>
  </motion.div>
)

const Problem = () => {
  const { scrollYProgress } = useScroll()
  const greenReveal = useTransform(scrollYProgress, [0.1, 0.25], [0, 1])
  return (
    <Section id="problem" className="">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-100" />
          <motion.div style={{ opacity: greenReveal }} className="absolute inset-0 bg-gradient-to-b from-emerald-200 to-emerald-100 mix-blend-multiply" />
          <div className="relative p-8 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">The Problem We’re Solving</h2>
            <ul className="mt-6 grid gap-3 text-slate-700 text-lg list-disc pl-6">
              <li>Manual irrigation causes water wastage & crop stress.</li>
              <li>Farmers lack soil moisture insights.</li>
              <li>Groundwater levels are depleting globally.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Solution = () => (
  <Section id="solution">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">Our Solution: BlueRive</h2>
      <p className="text-slate-600 text-center mt-3">AI + IoT working together to save water and boost yields.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { icon: Droplets, title: 'Smart Soil Monitoring', desc: 'Real-time soil moisture detection.' },
          { icon: Zap, title: 'Automated Irrigation', desc: 'Relay + Solenoid valve control via ESP32.' },
          { icon: LineChart, title: 'AI Predictions', desc: 'Future irrigation forecast using machine learning.' },
        ].map((c, i) => (
          <GlassCard key={c.title} className="p-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="flex items-center gap-3">
                <c.icon className="w-6 h-6" style={{ color: i === 0 ? colors.blue : i === 1 ? colors.green : '#0ea5e9' }} />
                <h3 className="text-xl font-semibold text-slate-800">{c.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{c.desc}</p>
            </motion.div>
          </GlassCard>
        ))}
      </div>
    </div>
  </Section>
)

const Workflow = () => (
  <Section id="workflow">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">System Workflow</h2>
      <p className="text-slate-600 text-center mt-3">From sensing to action to insights.</p>
      <div className="relative mt-10">
        <div className="absolute inset-0 -z-10 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line" x1="0" x2="1">
                <stop offset="0%" stopColor="#0077b6" />
                <stop offset="100%" stopColor="#38b000" />
              </linearGradient>
            </defs>
            <path d="M5,80 C180,40 360,120 540,80 C720,40 900,120 1080,80" stroke="url(#line)" strokeWidth="3" fill="none">
              <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="6s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: Cpu, label: 'ESP32' },
            { icon: Gauge, label: 'Sensors' },
            { icon: Radio, label: 'Relay' },
            { icon: Ruler, label: 'Solenoid' },
            { icon: LineChart, label: 'Dashboard' },
          ].map((n, i) => (
            <motion.div key={n.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <GlassCard className="p-5 text-center">
                <n.icon className="mx-auto w-7 h-7" style={{ color: i % 2 === 0 ? colors.blue : colors.green }} />
                <p className="mt-2 font-medium text-slate-700">{n.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
)

const Features = () => (
  <Section id="features">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">Key Features</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          'Real-time Soil Data Visualization',
          'Adaptive AI for different soil types (Clay, Loamy, Sandy)',
          'Ultrasonic Water Level Monitoring',
          'LED Status Indicators',
          'Low-cost & Scalable Design',
          'Secure, Cloud-ready Architecture',
        ].map((f, i) => (
          <motion.div key={f} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
            <GlassCard className="p-6 group">
              <div className="flex items-start gap-3">
                <Waves className="w-5 h-5 mt-1 text-sky-500" />
                <p className="text-slate-700 group-hover:text-slate-900 transition-colors">{f}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

const Roadmap = () => (
  <Section id="roadmap">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">The Road Ahead</h2>
      <div className="mt-10 relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-emerald-400 rounded-full" />
        <div className="space-y-10">
          {[
            { icon: CloudSun, title: 'Weather API Integration' },
            { icon: Smartphone, title: 'Farmer Mobile App' },
            { icon: Sun, title: 'Solar Power Integration' },
            { icon: Bot, title: 'AI-based Crop Health Prediction' },
          ].map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
              <GlassCard className="p-6 md:w-1/2 md:mx-auto md:translate-x-0">
                <div className="flex items-center gap-3">
                  <s.icon className="w-6 h-6" style={{ color: i % 2 === 0 ? colors.blue : colors.green }} />
                  <p className="font-medium text-slate-700">{s.title}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
)

const Team = () => (
  <Section id="team">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">Our Team</h2>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {['A', 'B', 'C', 'D'].map((n, i) => (
          <GlassCard key={i} className="p-6 text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 grid place-items-center text-white text-3xl font-bold shadow-lg" >{n}</div>
            <p className="mt-3 font-semibold text-slate-800">Member {i + 1}</p>
            <p className="text-sm text-slate-600">Role • Contribution</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </Section>
)

const Contact = () => (
  <Section id="contact">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Join Us in Building a Smarter Future for Agriculture</h2>
          <p className="mt-3 text-slate-600">Collaborate with us, contribute, or just say hello. We’d love to connect!</p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="px-5 py-3 rounded-full text-white font-semibold shadow" style={{ background: colors.green }}>Collaborate</a>
            <a href="#" className="px-5 py-3 rounded-full font-semibold border border-slate-300 text-slate-700 hover:bg-white/70">Contact Us</a>
          </div>
        </div>
        <GlassCard className="p-6">
          <form className="space-y-4">
            <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2" placeholder="Name" />
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2" placeholder="Email" />
            <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2" placeholder="Message" />
            <button type="submit" className="w-full px-5 py-3 rounded-xl text-white font-semibold" style={{ background: colors.blue }}>Send Message</button>
          </form>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" href="#"><Github className="w-4 h-4" /> GitHub</a>
            <a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" href="#"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" href="#"><ExternalLink className="w-4 h-4" /> Project Report</a>
            <a className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900" href="#"><ExternalLink className="w-4 h-4" /> Streamlit Dashboard</a>
          </div>
        </GlassCard>
      </div>
    </div>
  </Section>
)

const Footer = () => (
  <footer className="relative mt-20 py-10 text-center text-slate-600">
    <p>© 2025 BlueRive | Smart Irrigation for a Smarter Planet 🌍</p>
  </footer>
)

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Workflow />
      <Features />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
