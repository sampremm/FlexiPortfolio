import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import MinimalNav from './components/layout/MinimalNav';
import EditorialHero from './components/sections/EditorialHero';
import SelectedWork from './components/sections/SelectedWork';
import EditorialResearch from './components/sections/EditorialResearch';
import TechnicalManifest from './components/sections/TechnicalManifest';
import EditorialAbout from './components/sections/EditorialAbout';
import EditorialContact from './components/sections/EditorialContact';
import CLITerminal from './components/ui/CLITerminal';

const MainApp = () => {
  const [cliOpen, setCliOpen] = useState(false);

  // Global Easter Egg keyboard shortcuts (Cmd/Ctrl + K or ` to launch CLI)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCliOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        setCliOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F0] dark:bg-[#0D0E11] text-[#111111] dark:text-[#EDEDED] font-body selection:bg-[#111111] selection:text-[#F4F4F0] dark:selection:bg-[#EDEDED] dark:selection:text-[#0D0E11] transition-colors duration-200">
      
      {/* Minimal Sticky Navigation */}
      <MinimalNav onCLIOpen={() => setCliOpen(true)} />

      {/* Editorial Main Flow */}
      <main>
        <EditorialHero />
        <EditorialAbout />
        <SelectedWork />
        <EditorialResearch />
        <TechnicalManifest />
      </main>

      {/* Dramatic Closing Section */}
      <EditorialContact />

      {/* Hidden Easter Egg CLI Modal */}
      <CLITerminal
        isOpen={cliOpen}
        onClose={() => setCliOpen(false)}
      />

    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
