import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Leaf, Instagram, Play } from 'lucide-react';
import { LATEST_ARTICLES } from '../constants';
import ArticleCard from '../components/ArticleCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="images/Accueil.png"
            alt="Femme africaine beauté naturelle"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Révèle ta beauté <span className="text-gold-400">naturelle</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light text-gray-200">
            Conseils experts pour tes cheveux, ton corps et tes ongles.
          </p>
          <Link
            to="/cheveux"
            className="inline-block bg-gold-500 text-black font-bold py-3 px-8 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1"
          >
            Découvrir les conseils
          </Link>
        </div>
      </div>

      {/* Section 1: Latest Tips */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold mb-12 relative inline-block left-1/2 transform -translate-x-1/2">
            Les dernières astuces
            <span className="block h-1 w-20 bg-gold-500 mt-2 mx-auto"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LATEST_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} buttonText="Lire" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Expertise */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">Pourquoi me faire confiance ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-zinc-800 p-6 rounded-full mb-6 text-gold-400">
                <Scissors size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">10+ ans d'expérience</h3>
              <p className="text-gray-400 text-sm">Expertise confirmée dans la coiffure afro et les soins.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-zinc-800 p-6 rounded-full mb-6 text-gold-400">
                <Sparkles size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Conseils économiques</h3>
              <p className="text-gray-400 text-sm">Des astuces accessibles sans se ruiner.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-zinc-800 p-6 rounded-full mb-6 text-gold-400">
                <Leaf size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Naturel</h3>
              <p className="text-gray-400 text-sm">Adapté à tous les types de peaux et cheveux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Videos / Reels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-8 flex items-center justify-center gap-2">
            <Instagram className="text-pink-600" /> En vidéo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* Video 1: Pose de lace */}
            <div className="relative group cursor-pointer aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <video
                src="/video/Pose de lace.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <Play className="text-white fill-white" size={48} />
              </div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-left text-sm drop-shadow-lg">
                Pose de lace
              </div>
            </div>

            {/* Video 2: Gommage maison */}
            <div className="relative group cursor-pointer aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <video
                src="/video/Gommage maison.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <Play className="text-white fill-white" size={48} />
              </div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-left text-sm drop-shadow-lg">
                Gommage maison
              </div>
            </div>

            {/* Video 3: Soin des ongles */}
            <div className="relative group cursor-pointer aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <video
                src="/video/Vidéo_de_soin_d_ongles_africain.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <Play className="text-white fill-white" size={48} />
              </div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-left text-sm drop-shadow-lg">
                Soin des ongles
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition">
            Voir plus sur Instagram
          </button>
        </div>
      </section>

      {/* Section 4: Newsletter */}
      <section className="py-20 bg-gold-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-gray-900">Reçois les secrets beauté</h2>
          <p className="text-gray-600 mb-8">Inscris-toi pour recevoir nos astuces exclusives chaque semaine.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Ton adresse email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gold-500"
            />
            <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;