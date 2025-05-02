import React from 'react';
import { Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    { name: 'About', href: '#' },
    { name: 'For Business', href: '#' },
    { name: 'Suggestions', href: '#' },
    { name: 'Help & FAQs', href: '#' },
    { name: 'Contacts', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <footer className="border-t border-burgundy-light py-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Social Media */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-cream flex items-center justify-center hover:bg-cream hover:bg-opacity-10 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-cream flex items-center justify-center hover:bg-cream hover:bg-opacity-10 transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-cream flex items-center justify-center hover:bg-cream hover:bg-opacity-10 transition-colors"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cream text-opacity-80 hover:text-opacity-100 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-cream text-opacity-70">
          <p>© Copyright 2023 YourCompany Inc.</p>
          <div className="mt-1 space-x-4">
            <a href="#" className="hover:text-opacity-100 transition-opacity">
              Privacy
            </a>
            <a href="#" className="hover:text-opacity-100 transition-opacity">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;