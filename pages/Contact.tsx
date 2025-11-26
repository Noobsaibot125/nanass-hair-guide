import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="font-serif text-4xl font-bold text-center mb-16">Contactez-nous</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="bg-black text-white p-10 rounded-2xl shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-gold-400 mb-8">Restons en contact</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-gold-500" />
              <span>hello@nanass-guide.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-gold-500" />
              <span>+33 6 12 34 56 78</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-gold-500" />
              <span>Paris, France</span>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-gray-400 text-sm">Nous répondons généralement sous 24h.</p>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Nom complet</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:outline-none" placeholder="Votre nom" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:outline-none" placeholder="votre@email.com" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold-500 focus:outline-none h-32" placeholder="Comment pouvons-nous vous aider ?"></textarea>
          </div>
          <button className="w-full bg-gold-500 text-black font-bold py-4 rounded-lg hover:bg-gold-600 transition">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;