import heroImage from './assets/Purple Modern Real Estate.png';
import Waterwise from './assets/Water-wise.png';
import React, { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Github, Linkedin, Mail, MapPin, ExternalLink, ArrowDown, GraduationCap, Award, FileDown, Phone } from 'lucide-react'

const profile = {
  name: "Kunal Thakur",
  role: "UI/UX Designer · Front‑End Developer",
  tagline: "Designing intuitive interfaces that solve real problems",
  location: "Kharar, Punjab, India",
  email: "Kunalt258@gmail.com",
  phone: "+91 98778 37754",
  github: "https://github.com/Kunalthakur1234",
  linkedin: "http://linkedin.com/in/kunal-rajput-86a27128b",
  resumeUrl: "https://drive.google.com/file/d/1yG6lfsVHW6D5fZwwQLYEStgm0b5t-4iV/view?usp=drivesdk", 
}

const projects = [
  {
    id: "water-wise",
    title: "Water‑Wise",
    role: "Front‑End Developer (R&D)",
    stack: ["React.js", "JavaScript", "MongoDB", "Firebase Functions", "Google Maps API"],
    teamSize: 6,
    summary: "A community‑driven mobile app that crowdsources water issues (leaks, scarcity) and visualizes them on an interactive map for public awareness and action.",
    highlights: [
      "Interactive map with cluster markers for reports",
      "Mobile‑first UI with clear reporting flows",
      "Open‑sourced geodata for public dashboards",
    ],
    image: Waterwise,
    links: { demo: "#", repo: "#", caseStudy: "#", figma: "https://www.figma.com/proto/HwYCL5HuvAzUBzTihlETiV/WATERWISE?type=design&node-id=1-2&t=4xIC2eCsYWNdU4Kw-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1" },
  },
  {
    id: "yogi-app",
    title: "Yogi‑App",
    role: "Front‑End Developer",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    teamSize: 3,
    summary: "A responsive platform for yoga instructors and customers featuring class discovery, scheduling, booking, and secure checkout.",
    highlights: [
      "Instructor & customer dashboards",
      "Schedule management and booking flows",
      "Payment‑ready UI with order history",
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    links: { demo: "#", repo: "#", caseStudy: "#", figma: "#" },
  },
]

const skills = {
  design: ["UI/UX", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
  dev: ["HTML", "CSS", "JavaScript", "React.js", "Java", "C++"],
  tools: ["Figma", "VS Code", "Git", "Firebase", "MongoDB", "MySQL"],
}

const achievements = [
  { year: "2024", text: "Filed patent for the idea ‘Three Pointer System’ (Water‑Wise) – Application No. 202411043133." },
  { year: "2024", text: "3rd place – National Science Day (Project Display)." },
  { year: "2024", text: "Inter‑College Finalist – Smart India Hackathon 2023 & 2024." },
  { year: "2023", text: "3rd place – college coding competition; 2nd place – singing event." },
]

const certifications = [
  "AWS Cloud Computing",
  "Udemy – React (2024)",
  "NPTEL – Database Management",
  "TCIL‑IT – MERN Stack Training",
]

function useDarkMode(){
  const [dark, setDark] = useState(true)
  useEffect(()=>{
    const html = document.documentElement
    if(dark) html.classList.add('dark'); else html.classList.remove('dark')
  }, [dark])
  return [dark, setDark]
}
function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 mt-16 ${className}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  )
}


function Pill({ children }){
  return <span className="px-3 py-1 rounded-full border text-sm whitespace-nowrap">{children}</span>
}

function ProjectCard({ item, onOpen }){
  return (
    <motion.div
      className="group rounded-2xl overflow-hidden border bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <img src={item.image} alt={item.title} className="w-full h-64 object-contain bg-black" />
        <button
          onClick={() => onOpen(item)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          View case study <ExternalLink size={16} />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{item.role}</p>
        <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-200">{item.summary}</p>
        <div className="flex flex-wrap gap-2">
          {item.stack.map((s)=>(<Pill key={s}>{s}</Pill>))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }){
  return (
    <AnimatePresence>
      {project && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <motion.div
            className="max-w-3xl w-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full max-h-64 object-contain mx-auto" />
              <button onClick={onClose} className="absolute top-3 right-3 rounded-full px-3 py-1.5 bg-white/80 dark:bg-black/50 border backdrop-blur text-sm">Close</button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{project.role} · Team size {project.teamSize}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Highlights</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.highlights.map((h)=>(<li key={h}>{h}</li>))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s)=>(<Pill key={s}>{s}</Pill>))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {project.links.demo !== "#" && (<a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={16} /></a>)}
                {project.links.repo !== "#" && (<a className="btn" href={project.links.repo} target="_blank" rel="noreferrer">GitHub <Github size={16} /></a>)}
                {project.links.caseStudy !== "#" && (<a className="btn" href={project.links.caseStudy} target="_blank" rel="noreferrer">Case Study <ExternalLink size={16} /></a>)}
                {project.links.figma !== "#" && (<a className="btn" href={project.links.figma} target="_blank" rel="noreferrer">Figma <ExternalLink size={16} /></a>)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App(){
  const [dark, setDark] = useDarkMode()
  const [openProject, setOpenProject] = useState(null)

  const nav = useMemo(()=>[
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ], [])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <header className="sticky top-0 z-40 backdrop-blur border-b bg-white/60 dark:bg-neutral-900/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="font-bold tracking-tight">KT</div>
          <nav className="hidden md:flex gap-6">
            {nav.map((n)=>(<a key={n.id} href={'#'+n.id} className="hover:opacity-80">{n.label}</a>))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a className="btn hidden sm:inline-flex" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Download Resume <FileDown size={16} />
            </a>
            <button className="icon-btn" onClick={()=>setDark(d=>!d)} aria-label="Toggle theme" title="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <section id="home" className="py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{profile.name}</h1>
            <p className="mt-2 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">{profile.role}</p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-200 leading-relaxed">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href="#projects">View My Work <ArrowDown size={16} /></a>
              <a className="btn" href="#contact">Contact Me <Mail size={16} /></a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <span className="inline-flex items-center gap-2"><MapPin size={16} />{profile.location}</span>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
              <a className="inline-flex items-center gap-2 hover:opacity-80" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
              <span className="inline-flex items-center gap-2"><Phone size={16} />{profile.phone}</span>
            </div>
          </motion.div>
          <motion.div className="rounded-3xl overflow-hidden border bg-white/60 dark:bg-neutral-900/60 p-6 shadow-sm"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={heroImage} alt="My photo" className="rounded-2xl object-contain w-full h-72 bg-black" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-sm">
              {["UI/UX", "React.js", "Figma", "Design Systems", "Maps API", "Prototyping"].map(t=>(
                <div key={t} className="px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border text-center">{t}</div>
              ))}
            </div>
          </motion.div>
        </section>

        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p=>(<ProjectCard key={p.id} item={p} onOpen={setOpenProject} />))}
          </div>
        </Section>

        <Section id="skills" title="Skills & Tools" className="skills-section">

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="card-title">Design</h3>
              <div className="flex flex-wrap gap-2 mt-3">{skills.design.map(s=>(<Pill key={s}>{s}</Pill>))}</div>
            </div>
            <div className="card">
              <h3 className="card-title">Development</h3>
              <div className="flex flex-wrap gap-2 mt-3">{skills.dev.map(s=>(<Pill key={s}>{s}</Pill>))}</div>
            </div>
            <div className="card">
              <h3 className="card-title">Tools</h3>
              <div className="flex flex-wrap gap-2 mt-3">{skills.tools.map(s=>(<Pill key={s}>{s}</Pill>))}</div>
            </div>
          </div>
        </Section>

        <Section id="achievements" title="Achievements & Milestones">
          <div className="space-y-4">
            {achievements.map((a, i)=>(
              <motion.div key={i} className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4 }}
              >
                <div className="mt-1">
                  {i % 2 === 0 ? <Award size={20} /> : <GraduationCap size={20} />}
                </div>
                <div>
                  <div className="text-sm opacity-70">{a.year}</div>
                  <div>{a.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let’s work together">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="card-title mb-3">Contact</h3>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-200">
                <li className="flex items-center gap-3"><Mail size={18} /><a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
                <li className="flex items-center gap-3"><Phone size={18} />{profile.phone}</li>
                <li className="flex items-center gap-3"><Linkedin size={18} /><a className="hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li className="flex items-center gap-3"><Github size={18} /><a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </div>
            <div className="card">
              <h3 className="card-title mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">{certifications.map(c=>(<Pill key={c}>{c}</Pill>))}</div>
              <p className="text-sm opacity-70 mt-4">Open to: UI/UX Design Intern · Front‑End (React) Intern — Remote/Hybrid or onsite near Mohali/Sector 82.</p>
            </div>
          </div>
        </Section>

        <footer className="py-10 text-center opacity-70 text-sm">
          © {new Date().getFullYear()} {profile.name}. Crafted with React, Tailwind & Framer Motion.
        </footer>
      </main>

      <ProjectModal project={openProject} onClose={()=>setOpenProject(null)} />
    </div>
  )
}
