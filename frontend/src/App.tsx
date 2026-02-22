import React from 'react';

const App: React.FC = () => {
  // function App() {
  //   useEffect(() => {
  //     fetch("/api/test")
  //       .then(res => res.json())
  //       .then(data => console.log(data));
  //   }, []);
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans">
      
      {/* 1. NAVBAR (Fixed to the top) */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-400">Adrian.dev</span>
          <div className="space-x-8 text-sm font-medium">
            {/* These hrefs match the IDs of the sections below! */}
            <a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      {/* The id="hero" allows the navbar to scroll here */}
      <section id="hero" className="pt-20 min-h-screen flex items-center justify-center max-w-5xl mx-auto px-6">
        <div className="text-left w-full">
          <p className="text-emerald-400 font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Adrian Diaz.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">I build things for the web.</h2>
          <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed">
            I'm a Full-Stack Developer based in Germany, specializing in building exceptional digital experiences using <span className="text-emerald-400">React, TypeScript, and Django</span>. Currently focused on production management software.
          </p>
          
          <div className="flex space-x-4">
            <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all">
              Check out my work!
            </a>
            <a href="#about" className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-8 py-3 rounded-lg font-medium transition-all">
              About me
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      {/* Added pt-24 (padding-top) so the fixed navbar doesn't cover the title when scrolling */}
      <section id="about" className="pt-24 min-h-screen max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-2 inline-block">
          About Me
        </h3>
        <div className="text-slate-400 space-y-4 text-lg max-w-2xl">
          <p>
            Hello! My name is Adrian and I enjoy creating things that live on the internet. My interest in web development started back when I wanted to build interactive tools...
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working on manufacturing software, building serializers, and designing APIs.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm text-emerald-400">
            <li>▹ React</li>
            <li>▹ TypeScript</li>
            <li>▹ Django (Python)</li>
            <li>▹ Tailwind CSS</li>
          </ul>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="pt-24 min-h-screen max-w-5xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-2 inline-block">
          Some Things I've Built
        </h3>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card 1 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Production Path Editor</h4>
            <p className="text-slate-400 mb-4">A web application built to serialize factory steps and manage production lots efficiently.</p>
            <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Django</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Portfolio Website</h4>
            <p className="text-slate-400 mb-4">A custom portfolio designed from scratch to showcase my skills and projects.</p>
            <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TypeScript</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;

