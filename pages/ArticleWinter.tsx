import React from 'react';
import { ArrowLeft, Wind, Droplets, ThermometerSnowflake, Check, GlassWater, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleWinter: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/corps" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux conseils corps
                </Link>

                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest w-fit mb-4">
                    Guide Saisonnier
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Hydratation intense : <br />Comment sauver sa peau de l'hiver
                </h1>

                <p className="text-xl text-gray-600 mb-12 italic border-l-4 border-blue-200 pl-6 lg:max-w-3xl">
                    "Protégez votre peau lorsque le froid la rend sèche, rugueuse et inconfortable."
                </p>

                {/* Hero Section */}
                <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl h-[450px]">
                    <img
                        src="/images/winter_skin_hydration.png"
                        alt="Hydratation d'hiver"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                        <div className="flex gap-4 mb-6">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 text-white border border-white/20">
                                <ThermometerSnowflake size={24} />
                                <div>
                                    <p className="text-xs uppercase font-bold opacity-70">Froid</p>
                                    <p className="font-bold">Protection</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 text-white border border-white/20">
                                <Wind size={24} />
                                <div>
                                    <p className="text-xs uppercase font-bold opacity-70">Vent</p>
                                    <p className="font-bold">Barrière</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Points */}
                <div className="space-y-16">
                    <section>
                        <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                            <Sparkles className="text-gold-500" /> Les secrets d'une peau protégée
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">1. Textures Riches</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    En hiver, vos laits habituels ne suffisent plus. Passez aux baumes et aux beurres (Karité, Cacao).
                                </p>
                                <div className="text-sm font-bold text-gold-600 flex items-center gap-2">
                                    <Check size={16} /> Karité 100% pur recommandé
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">2. Le Scellage</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Applique ton huile juste après la douche, quand ta peau est encore un peu humide.
                                </p>
                                <div className="text-sm font-bold text-gold-600 flex items-center gap-2">
                                    <Check size={16} /> Sceller pour 24h d'hydratation
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Don't List */}
                    <section className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-xl">
                        <h2 className="text-2xl font-bold mb-8">⚠️ À éviter absolument</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <span>L'eau trop chaude au bain (assèche)</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <span>Oublier de boire de l'eau</span>
                                </li>
                            </ul>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <span>Attendre que la peau "gratte" pour hydrater</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <span>Zapper les zones sensibles (ongles, lèvres)</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Action Items */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900">Le Plan d'Action Hiver</h2>
                        <div className="space-y-4">
                            <ActionItem icon={<Droplets className="text-blue-500" />} text="Hydratation externe systématique après chaque contact avec l'eau." />
                            <ActionItem icon={<GlassWater className="text-blue-500" />} text="Boire 1.5L d'eau par jour pour hydrater les tissus profonds." />
                            <ActionItem icon={<Sparkles className="text-gold-500" />} text="Gommage doux 1 fois par semaine pour que les crèmes pénètrent mieux." />
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Boutique : Beurre de Karité & Soins Riches
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ActionItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:bg-gold-50 transition">
        <div className="flex-shrink-0">{icon}</div>
        <p className="text-gray-700 font-medium">{text}</p>
    </div>
);

export default ArticleWinter;
