import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';

export type SectionConfig = {
  id: string;
  label: string;
  Component: React.FC<{ id: string }>;
};

export const sections: SectionConfig[] = [
  { id: 'hero', label: 'Home', Component: Hero },
  { id: 'about', label: 'About', Component: About },
  { id: 'projects', label: 'Projects', Component: Projects },
];

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans">
      <Navbar sections={sections} />
      {sections.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
    </div>
  );
};

export default App;