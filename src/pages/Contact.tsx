import { motion } from 'motion/react';
import { Github, Linkedin, Mail, } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Let's build something <span className="text-primary-dim">extraordinary.</span>
            </h2>
            <p className="text-text-dim text-lg md:text-xl mb-12 leading-relaxed max-w-md">
              I'm currently looking for new opportunities and collaborations. Drop me a line or find me on socials!
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:2222589@iub.edu.bd" 
                className="flex items-center gap-4 text-primary font-headline font-bold text-xl hover:translate-x-2 transition-transform underline decoration-primary/20 underline-offset-8"
              >
                <Mail size={24} /> turjohalder41@gmail.com
              </a>
              
              <div className="flex gap-4 pt-8">
                {[
                  { icon: Github, href: 'https://github.com/TurjjoHalder' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/turjjo/' },
                  
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 flex items-center justify-center bg-surface-high/20 border border-surface-high rounded-xl text-primary hover:bg-primary hover:text-background transition-all"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form className="bg-surface p-8 md:p-10 rounded-2xl border border-surface-high shadow-2xl space-y-8">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-background border border-surface-high rounded-lg p-4 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-text-dim/30 text-text"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-background border border-surface-high rounded-lg p-4 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-text-dim/30 text-text"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-text-dim ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background border border-surface-high rounded-lg p-4 focus:border-primary focus:ring-0 outline-none transition-all placeholder:text-text-dim/30 resize-none text-text"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
