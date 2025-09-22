import React, { useState, useEffect } from 'react';

// --- Component Imports ---
import Button from './components/Button';
import List from './components/List';
import { Item } from './components/Item/Item';
import Icon from './components/Icon';
import Combobox, { ComboboxOption } from './components/Combobox';
import Splitter from './components/Splitter';
import Tooltip from './components/Tooltip';

// --- Main App Component ---
const App: React.FC = () => {
  // --- State ---
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // State for the simple combobox
  const [selectedPerson, setSelectedPerson] = useState<ComboboxOption | null>({ id: 1, name: 'Wade Cooper' });

  // State for the dynamic project combobox
  const [projects, setProjects] = useState<ComboboxOption[]>([
    { id: 'proj-1', name: 'Cassidy' },
    { id: 'proj-2', name: 'Instant Labs' },
    { id: 'proj-3', name: 'Terradot' },
    { id: 'proj-4', name: 'Clay' },
  ]);
  const [selectedProject, setSelectedProject] = useState<ComboboxOption | null>(projects[0]);

  // --- Handlers ---
  const handleCreateNewProject = (query: string) => {
    const projectName = query.trim() === '' ? 'Untitled Project' : query.trim();
    
    // In a real app, this would come from a database after an API call
    const newProject: ComboboxOption = { 
      id: `proj-${Date.now()}`, 
      name: projectName 
    };

    setProjects(prevProjects => [...prevProjects, newProject]);
    setSelectedProject(newProject);
    alert(`Created new project: "${projectName}"`);
  };

  // --- Effects ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // --- Render ---
  return (
    <div className="p-8 space-y-12 bg-ink-0 text-ink-1000 min-h-screen font-sans">
      
      {/* --- HEADER & THEME TOGGLE --- */}
      <header className="flex justify-between items-center">
        <h1 className="h1">Component Showcase</h1>
        <Button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          variant="secondary"
          icon={isDarkMode ? 'Sun' : 'Moon'}
          tooltip={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          tooltipPosition="left"
        >
          {isDarkMode ? 'Light' : 'Dark'}
        </Button>
      </header>
      
      <Splitter />

      {/* --- TYPOGRAPHY --- */}
      <section className="space-y-4">
        <h2 className="h2">Typography</h2>
        <div className="p-6 bg-ink-100 rounded-lg space-y-4">
          <p className="h0 leading-none">H0 Title</p>
          <p className="h1">H1 Title</p>
          <p className="h2">H2 Title</p>
          <p className="body-strong">Body Strong: For important, concise text.</p>
          <p className="body">Body Regular: The quick brown fox jumps over the lazy dog.</p>
          <p className="body-small">Body Small: Used for less important details or captions.</p>
          <p className="label">Label: Used for form labels, tags, etc.</p>
        </div>
      </section>
      
      <Splitter />

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="h2">Buttons</h2>
        {/* Button showcase content here... */}
      </section>

      <Splitter />

      {/* --- LISTS & MENUS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* List & Menu showcase content here... */}
      </section>
      
      <Splitter />

      {/* --- FORM ELEMENTS --- */}
      <section className="space-y-4">
        <h2 className="h2">Form Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          
          <div>
            <label className="label block mb-2">Combobox (Simple)</label>
            <Combobox
              value={selectedPerson}
              onChange={setSelectedPerson}
            >
              <Combobox.Item value={{ id: 1, name: 'Wade Cooper' }}>Wade Cooper</Combobox.Item>
              <Combobox.Item value={{ id: 2, name: 'Arlene Mccoy' }}>Arlene Mccoy</Combobox.Item>
              <Combobox.Item value={{ id: 3, name: 'Devon Webb' }}>Devon Webb</Combobox.Item>
              <Combobox.Item value={{ id: 4, name: 'Tom Cook' }}>Tom Cook</Combobox.Item>
              <Combobox.Item value={{ id: 5, name: 'Tanya Fox' }}>Tanya Fox</Combobox.Item>
            </Combobox>
          </div>

          <div>
            <label className="label block mb-2">Combobox (w/ Direct Action)</label>
            <Combobox
              value={selectedProject}
              onChange={setSelectedProject}
              onCreateNew={handleCreateNewProject}
              placeholder="Search or create project..."
            >
              {projects.map(project => (
                <Combobox.Item
                  key={project.id}
                  value={project}
                  trailing={
                    <div className="flex gap-1">
                      <Button variant="icon" tooltip='rename' tooltipPosition="bottom" className="!w-6 !h-6" onClick={(e) => { e.stopPropagation(); alert(`Rename ${project.name}`); }}>
                        <Icon name="PenLine" />
                      </Button>
                      <Button variant="icon" tooltip='delete' tooltipPosition="bottom" className="!w-6 !h-6" onClick={(e) => { e.stopPropagation(); alert(`Delete ${project.name}`); }}>
                        <Icon name="Trash2" />
                      </Button>
                    </div>
                  }
                >
                  {project.name}
                </Combobox.Item>
              ))}
              
              <Combobox.Splitter />

              <Combobox.Action leading={<Icon name="Plus" />}>
                Create new project
              </Combobox.Action>

            </Combobox>
          </div>
        </div>
      </section>
      
      <Splitter />
      
      {/* --- TOOLTIPS --- */}
      <section className="space-y-4">
        <h2 className="h2">Tooltips</h2>
        <div className="flex items-center gap-6 p-6 bg-ink-100 rounded-lg">
          {/* Tooltip showcase content here... */}
        </div>
      </section>

    </div>
  );
};

export default App;