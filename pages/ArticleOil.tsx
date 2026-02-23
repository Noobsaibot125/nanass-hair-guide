import React from 'react';
import { ArrowLeft, Beaker, Check, Clock, Droplets, Info, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleOil: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <Link to="/cheveux" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux articles
                </Link>

                <div className="mb-10 text-center">
                    <span className="inline-block px-3 py-1 bg-gold-50 text-gold-600 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                        Do It Yourself (DIY)
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Recette Huile de Croissance Maison
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
                        "Une recette simple, naturelle et très efficace pour faire une huile de croissance maison pour cheveux crépus, afro ou cassés ❤️"
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative h-64 md:h-[450px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <img
                        src="/images/hair_growth_oil.png"
                        alt="Huile de croissance maison"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Ingredients */}
                    <div className="lg:col-span-1">
                        <div className="bg-gold-50 p-8 rounded-3xl border border-gold-100 sticky top-8">
                            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                                <Beaker className="text-gold-500" /> Ingrédients
                            </h2>
                            <p className="text-sm text-gold-700 font-bold mb-6 uppercase tracking-wider">Simples et puissants</p>

                            <ul className="space-y-4">
                                <IngredientItem
                                    text="3 cuillères d'huile de ricin"
                                    benefit="Pousse + épaisseur"
                                />
                                <IngredientItem
                                    text="3 cuillères d'huile de coco ou olive"
                                    benefit="Hydrate + adoucit"
                                />
                                <IngredientItem
                                    text="2 cuillères d'huile de jojoba ou amande douce"
                                    benefit="Nourrit le cuir chevelu"
                                />
                                <IngredientItem
                                    text="1 cuillère d'huile de pépins de raisin"
                                    benefit="Allège le mélange"
                                />
                                <IngredientItem
                                    text="1 cuillère de clous de girofle"
                                    benefit="Stimule la pousse"
                                />
                                <IngredientItem
                                    text="1 branche de romarin"
                                    benefit="Active circulation"
                                />
                                <li className="pt-2 border-t border-gold-200">
                                    <p className="text-xs text-gold-600 italic">Optionnel: 5 gouttes d'huile essentielle de menthe poivrée (boost pousse)</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Steps & Usage */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Preparation */}
                        <section>
                            <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 border-b pb-4">
                                <span className="bg-gold-500 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl">🥣</span>
                                Préparation
                            </h2>
                            <div className="space-y-6">
                                <Step number={1} content="Mets toutes les huiles dans une petite casserole ou un bol résistant à la chaleur." />
                                <Step number={2} content="Ajoute les clous de girofle et le romarin." />
                                <Step number={3} content="Fais chauffer à feu doux 5–7 minutes, sans faire bouillir." />
                                <Step number={4} content="Laisse complètement refroidir." />
                                <Step number={5} content="Filtre pour retirer les plantes." />
                                <Step number={6} content="Verse dans un flacon propre (un ancien flacon d'huile fait l'affaire)." />
                            </div>
                        </section>

                        {/* Usage */}
                        <section>
                            <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 border-b pb-4">
                                <span className="bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl">💆🏽‍♀️</span>
                                Comment utiliser
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                                        <Zap className="text-gold-500" size={18} /> 1. Sur le cuir chevelu
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-3">
                                        <li className="flex gap-2"><Check size={16} className="text-green-500 mt-1 flex-shrink-0" /> Applique 2 à 3 fois par semaine</li>
                                        <li className="flex gap-2">
                                            <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>Masse avec les doigts 2 minutes pour stimuler la circulation <strong>(c’est le massage qui active vraiment la pousse !)</strong></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                                        <Droplets className="text-blue-500" size={18} /> 2. Sur les longueurs
                                    </h3>
                                    <ul className="text-sm text-gray-600 space-y-3">
                                        <li className="flex gap-2"><Check size={16} className="text-green-500 mt-1 flex-shrink-0" /> 1 fois par semaine : mets un peu sur tes pointes</li>
                                        <li className="flex gap-2"><Check size={16} className="text-green-500 mt-1 flex-shrink-0" /> Ou utilise pour sceller l'hydratation (méthode LOC/LCO)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Results */}
                        <section className="bg-black text-white p-8 rounded-3xl shadow-xl">
                            <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3 text-gold-400">
                                <Clock size={24} /> Résultats à attendre
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ResultCard icon={<Sparkles className="text-gold-400" />} text="Accélération de la pousse dé l'huile (2-4 sem)" />
                                <ResultCard icon={<Sparkles className="text-gold-400" />} text="Cuir chevelu plus sain" />
                                <ResultCard icon={<Sparkles className="text-gold-400" />} text="Cheveux plus épais et résistants" />
                                <ResultCard icon={<Sparkles className="text-gold-400" />} text="Réduction de la casse" />
                            </div>
                        </section>
                    </div>
                </div>

                <div className="mt-20 text-center border-t border-gray-100 pt-10">
                    <p className="text-gray-500 text-sm mb-6 flex items-center justify-center gap-2">
                        <Info size={16} /> Toujours faire un test sur une petite mèche avant de généraliser.
                    </p>
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Acheter les huiles prêtes à l'emploi
                    </Link>
                </div>
            </div>
        </div>
    );
};

const IngredientItem: React.FC<{ text: string; benefit: string }> = ({ text, benefit }) => (
    <li className="group">
        <p className="text-gray-900 font-medium group-hover:text-gold-600 transition-colors">{text}</p>
        <p className="text-xs text-gold-600 font-bold uppercase tracking-tighter opacity-80">{benefit}</p>
    </li>
);

const Step: React.FC<{ number: number; content: string }> = ({ number, content }) => (
    <div className="flex gap-4 items-start group">
        <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gold-200 flex items-center justify-center text-gold-600 font-bold text-sm group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all">
            {number}
        </div>
        <div className="pt-1">
            <p className="text-gray-700 leading-relaxed font-medium">{content}</p>
        </div>
    </div>
);

const ResultCard: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl border border-zinc-800">
        <div className="flex-shrink-0">{icon}</div>
        <span className="text-sm font-medium text-gray-200">{text}</span>
    </div>
);

export default ArticleOil;
