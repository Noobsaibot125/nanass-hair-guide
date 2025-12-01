import React from 'react';
import { ArrowLeft, Check, X, Clock, Calendar, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleNails: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition">
                    <ArrowLeft className="mr-2" size={20} />
                    Retour à l'accueil
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Comment renforcer des ongles fragiles en 7 jours
                </h1>

                {/* Hero Background Section */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <img
                        src="/images/nail_care_bg.png"
                        alt="Nail Care Background"
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                Dites adieu aux ongles cassants avec cette routine express.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Routine 7 Jours */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-pink-800">
                        <span className="text-2xl">📅</span> Routine sur 7 jours
                    </h2>
                    <p className="text-gray-700 mb-8 text-lg font-medium bg-pink-50 p-4 rounded-lg border border-pink-100 inline-block">
                        🔸 Jour 1 à 7 (matin + soir)
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-xl mb-3 text-pink-900 flex items-center gap-2">
                                <span className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                Trempage fortifiant
                            </h3>
                            <div className="ml-10">
                                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                                    <li>1 cuillère d'huile d'olive tiède</li>
                                    <li>1 cuillère de jus de citron</li>
                                </ul>
                                <p className="text-gray-600 italic mb-2">👉 Tremper les ongles 10–15 minutes</p>
                                <p className="text-sm font-bold text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">
                                    ➤ Renforce + blanchit + stimule la pousse.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-xl mb-3 text-pink-900 flex items-center gap-2">
                                <span className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                Massage à l'huile
                            </h3>
                            <div className="ml-10">
                                <p className="text-gray-700 mb-2">Huile de ricin ou huile de coco</p>
                                <p className="text-gray-600 italic mb-2">👉 Masser chaque ongle 2–3 minutes</p>
                                <p className="text-sm font-bold text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">
                                    ➤ Hydrate, évite la casse, accélère la croissance.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <h3 className="font-bold text-xl mb-3 text-pink-900 flex items-center gap-2">
                                <span className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                Éviter l'eau prolongée
                            </h3>
                            <div className="ml-10">
                                <p className="text-gray-700 mb-2">Porter des gants pour vaisselle, lessive ou nettoyage.</p>
                                <p className="text-sm font-bold text-red-500 bg-red-50 inline-block px-3 py-1 rounded-full">
                                    ➤ L'eau fragilise et ramollit les ongles.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Astuces Supplementaires */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-purple-800">
                        <span className="text-2xl">💅</span> Astuces supplément + puissantes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h3 className="font-bold text-purple-900 mb-2">Vernis durcissant</h3>
                            <p className="text-sm text-gray-700">1 couche tous les 2 jours → forme une barrière protectrice.</p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h3 className="font-bold text-purple-900 mb-2">Couper si abîmé</h3>
                            <p className="text-sm text-gray-700">Un ongle trop cassé se répare difficilement. Repartir sur une base saine.</p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <h3 className="font-bold text-purple-900 mb-2">Karité sur cuticules</h3>
                            <p className="text-sm text-gray-700">Chaque soir avant de dormir → ongles plus résistants et brillants.</p>
                        </div>
                    </div>
                </section>

                {/* Alimentation */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-green-800">
                        <span className="text-2xl">🍲</span> Aliments qui renforcent les ongles
                    </h2>
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-6">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead className="bg-green-50">
                                <tr>
                                    <th className="py-3 px-6 font-bold text-green-900 border-b border-green-200">Nutriment</th>
                                    <th className="py-3 px-6 font-bold text-green-900 border-b border-green-200">Aliments</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="py-3 px-6 font-medium text-gray-800">Vitamine E</td>
                                    <td className="py-3 px-6 text-gray-600">Arachide, amande, avocat</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-6 font-medium text-gray-800">Zinc</td>
                                    <td className="py-3 px-6 text-gray-600">Haricots, œufs, poisson</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-6 font-medium text-gray-800">Biotine (Vit. B7)</td>
                                    <td className="py-3 px-6 text-gray-600">Banane, tomate, oeufs, noix</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-green-800 font-medium text-center">
                        💡 1 banane + 1 œuf + arachides 3 fois/semaine → très bon pour la pousse.
                    </div>
                </section>

                {/* A eviter */}
                <section className="mb-16 bg-red-50 p-8 rounded-2xl border border-red-100">
                    <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3 text-red-900">
                        <span className="text-2xl">🚫</span> À éviter absolument
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <X className="text-red-500" /> <span className="text-gray-800">Arracher les cuticules</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <X className="text-red-500" /> <span className="text-gray-800">Vernis + dissolvant trop fréquents</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <X className="text-red-500" /> <span className="text-gray-800">Produits trop chimiques</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <X className="text-red-500" /> <span className="text-gray-800">Ongles en gel trop souvent</span>
                        </div>
                    </div>
                </section>

                {/* Resultats */}
                <section className="mb-12">
                    <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                        <span className="text-2xl">💎</span> Résultats attendus
                    </h2>
                    <div className="relative border-l-4 border-gold-300 ml-4 pl-8 space-y-8">
                        <div className="relative">
                            <div className="absolute -left-[42px] bg-gold-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                            <h3 className="font-bold text-lg text-gray-900">3–4 jours</h3>
                            <p className="text-gray-600">Ongles moins cassants, plus lisses</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[42px] bg-gold-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                            <h3 className="font-bold text-lg text-gray-900">7 jours</h3>
                            <p className="text-gray-600">Plus solides + meilleur aspect</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[42px] bg-gold-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                            <h3 className="font-bold text-lg text-gray-900">2–3 semaines</h3>
                            <p className="text-gray-600">Ongles longs, forts et brillants</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gold-600 font-bold text-xl animate-pulse">
                        ✨ Avec constance → transformation garantie.
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Voir les soins ongles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleNails;
