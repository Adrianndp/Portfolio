import ModelViewer from "../CNCModel.tsx";

const Projects = ({id}: {id: string}) => {
    return (
          <section id={id} className="pt-24 min-h-screen max-w-5xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-2 inline-block">
          Some Things I've Built
        </h3>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card 1 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Daedalus</h4>
            <p className="text-slate-400 mb-4">AI-driven precision manufacturing.</p>
             <ModelViewer />
             <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Watttron</h4>
            <p className="text-slate-400 mb-4">A custom portfolio designed from scratch to showcase my skills and projects.</p>
            <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TypeScript</span>
            </div>
          </div>

        </div>
      </section>
    );
}

export default Projects;