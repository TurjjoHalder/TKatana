import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const projects = [
  {
    id: '01',
    title: 'Video File Converter',
    description: 'a client-side video conversion tool using React and FFmpeg.wasm, enabling multithreaded .ts to .mp4 transcoding directly in the browser with real-time progress tracking and zero data transmission.',
    link: "https://ts-to-mp4-video-converter.vercel.app/",
    tags: ['React', 'JavaScript', 'FFmpeg'],
    
  },
  {
    id: '02',
    title: 'Flutter Mini-Cart',
    description: "A mobile application developed to explore Flutter's widget tree and UI layout principles. It provides a straightforward, user-friendly interface for adding and removing products within a functional checkout cart.",
    link: 'https://github.com/TurjjoHalder/Flutter_CSC464_Flutter_Final_Project-Group3-Section1-P003',
    tags: ['Flutter', 'Dart', 'Firestore', 'Provider'],
    
  },
  {
    id: '03',
    title: 'PetZilla',
    description: 'An online platform where pet owner can purchase food, medicine toys for their pet animal. Built with a user-friendly interface and scalable architecture, PetZilla is designed to cater to all pet owner out there.',
    link: "https://petzilla.onrender.com",
    tags: ['Flask', 'Python', 'MySql'],
  },
  {
    id: '04',
    title: 'Country & Climate Explorer',
    description: 'An interactive explorer that utilizes REST APIs to fetch and display information. I developed this to practice handling asynchronous data streams, mapping country-specific metadata with live weather forecasts to create a cohesive and informative user experience.',
    link: "https://myweather222.netlify.app",
    tags: ['JavaScript', 'REST API', 'HTML5', "CSS"],
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6 md:px-12 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-[11px] font-bold uppercase tracking-wider mb-6">
              Available for Projects
            </div>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-[64px] font-bold tracking-tight leading-[1] mb-8">
              Software Engineering Enthusiast. <br /> & <span className="text-primary">Software Developer.</span>
            </h1>
            <p className="text-text-dim text-lg md:text-xl max-w-xl font-normal mb-10 leading-relaxed">
              Final-year CSE student exploring mobile development and data science. Experienced in building personal projects with Flutter, Dart, Java, and Python, alongside a growing foundation in Machine Learning and its core libraries.</p>
            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/contact"
                className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-90 active:scale-95"
              >
                Start a Project
              </NavLink>
              <NavLink
                to="/journey"
                className="px-8 py-3.5 rounded-lg font-bold text-sm border border-surface-high text-text hover:bg-surface transition-colors active:scale-95"
              >
                View Journey
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="aspect-square rounded-full bg-secondary/10 absolute -inset-10 blur-3xl"></div>
            <div className="relative bg-surface p-4 rounded-xl border border-surface-high shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVEOK13tkK1VBIq4T1thzaXdwNanrJwBYQycNlvwfIn6u1GjcivmZEpec5oqFi4OBCOa_LRhJTvN-uRGfZdNmwGenJp3jmY3mF9vYWs29hYYI7aLLsCW7AM2viAS4JPtN57U2ICTEv4dcc_heH7bJSN7pqptMFkuP788lUUy9T9rWmGC8k7rCDGU4HzAg403ZlpcGlKJq_1-yHgMPWDpmq8KJOyBO4DYGfcNzASelw-gBqgo3b0IJZocKmLElT8zSTM1dGrphKqgMc"
                alt="Code Environment"
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 md:px-12 bg-surface-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-4">
                Selected <span className="text-secondary">Work</span>
              </h2>
              <p className="text-text-dim text-lg">Engineering solutions through Dart and mobile native layers.</p>
            </motion.div> */}
            <div className="font-headline font-bold text-surface-high/200 text-7xl hidden lg:block select-none leading-none">
              01 — 04
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface border border-surface-high p-8 rounded-2xl hover:border-primary transition-all duration-300"
              >
                <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-2">
                  Featured Project
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-text-dim text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-md border border-surface-high text-text-dim text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[11px] tracking-widest group/link">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[11px] tracking-widest group/link"
                  >
                    View Project
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
