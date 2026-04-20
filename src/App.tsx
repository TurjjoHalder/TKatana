/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journey from './pages/Journey';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <footer className="bg-surface-low py-12 px-6 border-t border-surface-high">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <div className="font-headline font-bold text-primary tracking-tighter uppercase">
                TH
              </div>
              <div className="text-text-dim">
                © {new Date().getFullYear()} Turjjo Halder.
              </div>
              <div className="flex gap-8">
                
                <a href="https://www.linkedin.com/in/turjjo/" className="text-text-dim hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/TurjjoHalder" className="text-text-dim hover:text-primary transition-colors">Github</a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}
