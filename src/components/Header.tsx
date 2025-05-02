import React, { useState } from 'react';
import { Search, Upload, Bell } from 'lucide-react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="px-4 py-3 bg-burgundy text-cream border-b border-burgundy-light md:px-6">
      <div className="container mx-auto flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center w-full sm:w-auto">
          <h1 className="text-xl font-semibold mr-4">SocialNetwork</h1>
          <div className="relative flex-1 sm:max-w-md">
            <input
              type="text"
              placeholder="Find..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-1.5 px-3 pr-8 bg-cream bg-opacity-90 text-burgundy rounded focus:outline-none focus:ring-2 focus:ring-cream text-sm"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-burgundy" />
          </div>
        </div>
        
        <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
          <button className="flex items-center py-1.5 px-3 bg-cream bg-opacity-20 hover:bg-opacity-30 rounded transition text-sm">
            <Upload className="h-4 w-4 mr-1.5" />
            <span>Upload</span>
          </button>
          
          <div className="relative">
            <Bell className="h-5 w-5 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-cream text-burgundy text-xs rounded-full h-4 w-4 flex items-center justify-center">
              1
            </span>
          </div>
          
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-cream text-burgundy flex items-center justify-center text-sm font-semibold">
              WA
            </div>
            <span className="ml-2 text-sm hidden md:block">Waseem Arshad</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;