import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-lg border-b border-gold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-3 font-serif text-2xl md:text-3xl text-gold-400 font-bold tracking-wider">
              <img src="/images/logo.png" alt="Nanass Logo" className="h-10 w-auto object-contain" />
              <span>
                Nanass <span className="text-white text-lg font-light">Hair & Guide</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-200 ${isActive ? 'text-gold-400 font-bold border-b-2 border-gold-400 pb-1' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-gold-400 bg-zinc-800' : 'text-gray-300 hover:text-white hover:bg-zinc-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;