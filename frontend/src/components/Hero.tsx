const Hero = ({id}: {id: string}) => {
  return (
    <section id={id} className="pt-20 min-h-screen flex items-center justify-center max-w-5xl mx-auto px-6">
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
  );
}

export default Hero;