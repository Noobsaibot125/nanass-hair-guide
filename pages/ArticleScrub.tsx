import React from 'react';
import { ArrowLeft, Coffee, Droplets, Sparkles, Check, Info, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleScrub: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/corps" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux conseils corps
                </Link>

                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Gommage Café + Huile : Le secret pour une peau de bébé
                    </h1>
                    <p className="text-xl text-gray-600 italic">"Un gommage naturel, économique et d'une efficacité redoutable."</p>
                </div>

                {/* Hero section with image and key stats */}
                <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl h-[400px]">
                    <img
                        src="/images/coffee_body_scrub.png"
                        alt="Gommage au café"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                        <div className="p-8 md:p-12 text-white max-w-md">
                            <div className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">FAIT MAISON</div>
                            <h2 className="text-3xl font-bold mb-4">Peau lisse & lumineuse</h2>
                            <p className="text-gray-200">Élimine les impuretés et nourrit en profondeur avec seulement deux ingrédients.</p>
                        </div>
                    </div>
                </div>

                {/* Core Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <BenefitCard
                        icon={<Coffee className="text-amber-700" />}
                        title="Exfoliation Douce"
                        text="Le café élimine les peaux mortes et stimule la circulation sanguine."
                    />
                    <BenefitCard
                        icon={<Droplets className="text-blue-500" />}
                        title="Nutrition Intense"
                        text="L'huile (coco, olive ou amande) adoucit et protège la barrière cutanée."
                    />
                    <BenefitCard
                        icon={<Sparkles className="text-gold-500" />}
                        title="Éclat Naturel"
                        text="Réduit l'apparence des taches et rend le teint instantanément plus frais."
                    />
                </div>

                {/* Content Sections */}
                <div className="space-y-16">
                    <section>
                        <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3 border-b pb-4">
                            <span className="bg-amber-100 p-2 rounded-lg">🥣</span> La Recette
                        </h2>
                        <div className="bg-gray-50 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center border border-gray-100">
                            <div className="flex-grow space-y-4">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                    <p className="text-gray-800 font-medium">3 cuillères de café moulu</p>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="w-10 h-10 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                    <p className="text-gray-800 font-medium">2 cuillères de ton huile favorite</p>
                                </div>
                                <p className="text-sm text-gray-500 mt-4 italic">Mélange jusqu'à obtenir une pâte souple.</p>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-1/3 aspect-square rounded-2xl bg-amber-50 flex items-center justify-center">
                                <Coffee size={100} className="text-amber-800 opacity-20" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3 border-b pb-4">
                            <span className="bg-blue-100 p-2 rounded-lg">🚿</span> Comment l'utiliser
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <Zap className="text-gold-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Sous la douche</h3>
                                    <p className="text-gray-600">Applique sur peau humide en effectuant des mouvements circulaires pendant 2 à 3 minutes. Insiste sur les zones sèches (coudes, genoux).</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Zap className="text-gold-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Zones d'application</h3>
                                    <p className="text-gray-600">Peut être utilisé sur le corps, les pieds et les mains. *Sur le visage, seulement si ta peau n'est pas trop sensible.*</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-grow">
                                <h2 className="text-3xl font-bold mb-6 text-gold-400">Conseils d'expert</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Check className="text-gold-400 mt-1" />
                                        <span>À faire 1 à 2 fois par semaine maximum.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="text-gold-400 mt-1" />
                                        <span>Rince à l'eau tiède pour laisser le léger film huileux nourrir ta peau.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="text-gold-400 mt-1" />
                                        <span>Garde ton mélange au frais si tu en prépares d'avance.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 max-w-xs">
                                <Info className="text-gold-500 mb-4" />
                                <p className="text-sm text-gray-400 italic">"Ce mélange est l'un des meilleurs anti-cellulite naturels grâce à la caféine !"</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Découvrir nos huiles précieuses
                    </Link>
                </div>
            </div>
        </div>
    );
};

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center group hover:bg-gold-50 transition duration-300">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
);

export default ArticleScrub;
