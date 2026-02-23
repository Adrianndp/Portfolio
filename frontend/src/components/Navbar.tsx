import React from 'react';
import { SectionConfig } from '../App';

type NavbarProps = {
  sections: SectionConfig[];
};

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-emerald-400">
          Adrian.dev
        </span>

        <div className="space-x-8 text-sm font-medium">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-emerald-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;