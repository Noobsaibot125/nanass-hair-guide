import React from 'react';
import { Instagram, Facebook, Video, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t-4 border-gold-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-gold-400 mb-4">Nanass Hair & Guide</h3>
            <p className="text-gray-400 text-sm mb-4">
              Révèle ta beauté naturelle avec nos conseils experts pour cheveux, corps et ongles.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition"><Video size={20} /></a> {/* TikTok alternative icon */}
              <a href="#" className="text-gray-400 hover:text-gold-400 transition"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-gold-400">À Propos</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400">Contact</Link></li>
              <li><Link to="/shop" className="hover:text-gold-400">Boutique</Link></li>
              <li><span className="cursor-pointer hover:text-gold-400">Politique de confidentialité</span></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Contact</h4>
            <p className="text-gray-400 mb-2">Email: hello@nanass-guide.com</p>
            <p className="text-gray-400">WhatsApp: +33 6 00 00 00 00</p>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 Nanass Beauty Guide. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;