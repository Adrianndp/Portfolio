import ModelViewer from "../CNCModel.tsx";
import Pipeline from "../Pipeline.tsx";

const Projects = ({id}: {id: string}) => {
    return (
          <section id={id} className="pt-24 min-h-screen max-w-5xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-2 inline-block">
          Some Things I've Built
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Daedalus</h4>
            <p className="text-slate-400 mb-4">Software enginner in AI-driven precision manufacturing.</p>
             <ModelViewer />
             <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TypeScript</span>
            </div>
          </div>


           <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">OTEC</h4>
            <p className="text-slate-400 mb-4">Full stack Engineer.</p>
            {/* here i wanted to put a graph of chart js */}
            <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Energiekoppler</h4>
            <p className="text-slate-400 mb-4">Working Student Full stack.</p>
            {/* here i wanted to put a graph of chart js */}
            <div className="text-emerald-400 text-sm font-mono space-x-3">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-2">Watttron</h4>
            <p className="text-slate-400 mb-4">Working Student Test Designer in cleantech.</p>
            <img src="/heaters.png" alt="Heaters" className="w-full h-48 object-cover mb-4 rounded" />

            <Pipeline />
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