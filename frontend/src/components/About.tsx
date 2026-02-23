const About = ({id}: {id: string}) => {
  return (
     <section id={id} className="pt-24 min-h-screen max-w-5xl mx-auto px-6">
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
    );
}

export default About;              