import React from 'react';

const NavigationTabs: React.FC = () => {
  const tabs = [
    { name: 'Videos', active: true },
    { name: 'People', active: false },
    { name: 'Documents', active: false },
    { name: 'Events', active: false },
    { name: 'Communities', active: false },
    { name: 'Favorites', active: false },
    { name: 'Channels', active: false },
  ];

  return (
    <nav className="border-b border-burgundy-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <ul className="flex whitespace-nowrap md:flex-wrap md:whitespace-normal">
            {tabs.map((tab) => (
              <li key={tab.name} className="flex-none">
                <a
                  href={`#${tab.name.toLowerCase()}`}
                  className={`inline-block py-3 px-3 md:px-4 text-sm border-b-2 ${
                    tab.active
                      ? 'border-cream text-cream'
                      : 'border-transparent text-cream text-opacity-80 hover:text-opacity-100 hover:border-cream hover:border-opacity-50'
                  } transition-colors duration-200`}
                >
                  {tab.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTabs;