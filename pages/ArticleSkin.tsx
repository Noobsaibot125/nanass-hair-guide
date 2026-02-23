import React from 'react';
import { ArrowLeft, Droplets, Sun, Moon, Clock, Check, X, Search, Sparkles, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleSkin: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition">
                    <ArrowLeft className="mr-2" size={20} />
                    Retour à l'accueil
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Routine peau éclatante pour femme noire
                </h1>

                {/* Hero Background Section */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <img
                        src="/images/skin_care_bg.png"
                        alt="Skin Care Background"
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                Des soins simples et efficaces pour un teint lumineux et uniforme.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1. Gommage */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-orange-800">
                        <span className="text-2xl">🔥</span> 1) Gommage du corps (1–2 fois par semaine)
                    </h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Le gommage élimine les cellules mortes, éclaircit et adoucit la peau.
                    </p>

                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 mb-6">
                        <h3 className="font-bold text-xl mb-4 text-orange-900">Recettes maison (à faire sous la douche)</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-orange-200">
                                        <th className="py-3 px-4 font-bold text-orange-900">Recette</th>
                                        <th className="py-3 px-4 font-bold text-orange-900">Résultat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-orange-100">
                                        <td className="py-3 px-4 font-medium">Sucre + miel + huile d'olive</td>
                                        <td className="py-3 px-4 text-gray-700">Peau douce & brillante</td>
                                    </tr>
                                    <tr className="border-b border-orange-100">
                                        <td className="py-3 px-4 font-medium">Café + huile de coco</td>
                                        <td className="py-3 px-4 text-gray-700">Éclaircit les zones sombres + anti-cellulite</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">Sel fin + citron + huile</td>
                                        <td className="py-3 px-4 text-gray-700">Éclaircissant (faire 1 fois/semaine) **</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500">
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-gold-600" /> Masser en mouvement circulaire (jambes → bras → ventre → dos)</li>
                            <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-gold-600" /> Rincer à l'eau tiède</li>
                            <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-gold-600" /> Toujours hydrater après le gommage</li>
                        </ul>
                        <p className="mt-4 text-sm text-red-600 font-bold flex items-center gap-2">
                            <X size={16} /> Avec citron, éviter soleil et ne pas appliquer sur peau irritée.
                        </p>
                    </div>
                </section>

                {/* 2. Massage */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-purple-800">
                        <span className="text-2xl">💆‍♀</span> 2) Massage du corps (3–4 fois/semaine)
                    </h2>
                    <p className="text-gray-700 mb-6 text-lg">
                        Les massages améliorent la circulation, tonifient la peau et donnent un éclat naturel.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-purple-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-4 text-purple-900">Huiles recommandées</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2"><span className="text-xl">🌴</span> <strong>Huile de coco</strong> : hydratante, parfume bien</li>
                                <li className="flex items-center gap-2"><span className="text-xl">🌸</span> <strong>Huile d'amande douce</strong> : pour peau sèche</li>
                                <li className="flex items-center gap-2"><span className="text-xl">🧈</span> <strong>Beurre de karité</strong> : nourrit et assouplit</li>
                                <li className="flex items-center gap-2"><span className="text-xl">🫒</span> <strong>Huile d'olive</strong> : peau très sèche</li>
                                <li className="flex items-center gap-2"><span className="text-xl">✨</span> <strong>Huile de moringa / nigelle</strong> : réparatrice, anti-taches</li>
                            </ul>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-gray-900">Technique simple</h3>
                            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                <li>Chauffer un peu l'huile entre les mains</li>
                                <li>Masser de bas en haut (vers le cœur — active la circulation)</li>
                                <li>Insister sur genoux, coudes, fesses, hanches</li>
                                <li>Laisser absorber 10–20 min avant de s'habiller</li>
                            </ol>
                            <div className="mt-6 bg-yellow-50 p-3 rounded text-sm text-yellow-800 border border-yellow-200">
                                💡 <strong>Astuce +++ :</strong> mettre l'huile après la douche, quand la peau est encore humide → pénétration x2.
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Soin Quotidien */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-blue-800">
                        <span className="text-2xl">🧴</span> 3) Soin quotidien du corps
                    </h2>
                    <p className="text-gray-700 mb-8">Pour garder la peau douce et uniforme toute la semaine.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-blue-900"><Sun className="text-orange-500" /> Matin</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-blue-500" /> Douche tiède (pas trop chaude)</li>
                                <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-blue-500" /> Appliquer une crème ou huile légère</li>
                                <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-blue-500" /> Boire 1 grand verre d'eau → peau hydratée de l'intérieur</li>
                            </ul>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-indigo-900"><Moon className="text-indigo-500" /> Soir</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-indigo-500" /> Bain/ douche rapide</li>
                                <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-indigo-500" /> Masse avec beurre de karité ou huile d'amande douce</li>
                                <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-indigo-500" /> 1–2 fois/semaine → gommage avant l'hydratation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tips Diamond */}
                <section className="mb-16 bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-100">
                    <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3 text-teal-900">
                        <span className="text-2xl">💎</span> Pour une peau plus belle, uniformisée :
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-teal-800"><CheckCircleIcon /> Eau : 1L–1.5L/jour</li>
                                <li className="flex items-center gap-2 text-teal-800"><CheckCircleIcon /> Fruits riches en eau : pastèque, orange, concombre, ananas</li>
                                <li className="flex items-center gap-2 text-teal-800"><CheckCircleIcon /> Légumes verts + carottes</li>
                                <li className="flex items-center gap-2 text-teal-800"><CheckCircleIcon /> Dormir suffisamment</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><XCircleIcon /> À Éviter :</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-red-700"><X size={16} /> savons décapants trop forts</li>
                                <li className="flex items-center gap-2 text-red-700"><X size={16} /> gommage tous les jours → irrite la peau</li>
                                <li className="flex items-center gap-2 text-red-700"><X size={16} /> se gratter ou arracher boutons</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Weekly Routine Table */}
                <section className="mb-12">
                    <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                        <span className="text-2xl">📅</span> Exemple de routine complète
                    </h2>
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-4 px-6 font-bold text-gray-900 border-b border-gray-200">Jour</th>
                                    <th className="py-4 px-6 font-bold text-gray-900 border-b border-gray-200">Soin</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <RoutineRow day="Lundi" activity="Gommage café + huile de coco + massage 10 min" />
                                <RoutineRow day="Mardi" activity="Hydratation au beurre de karité" />
                                <RoutineRow day="Mercredi" activity="Massage complet avec huile d'amande douce" />
                                <RoutineRow day="Jeudi" activity="Gommage sucre + miel + huile" />
                                <RoutineRow day="Vendredi" activity="Hydratation simple (huile ou lait corporel)" />
                                <RoutineRow day="Samedi" activity="Massage long et profond" />
                                <RoutineRow day="Dimanche" activity="Bain relax + nutrition de la peau au karité" isLast />
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Related Body Guides Section */}
                <section className="mt-20 border-t border-gray-100 pt-16">
                    <h2 className="font-serif text-3xl font-bold mb-10 text-center text-gray-900">
                        D'autres secrets pour prendre soin de ton corps
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Article 1: Gommage café + huile */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img src="/images/coffee_body_scrub.png" alt="Gommage café" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="text-xs font-bold text-gold-500 uppercase mb-2">CORPS</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">🌟 1. Gommage café + huile = peau douce</h3>
                                <p className="text-sm text-gray-600 mb-4 italic">Un gommage naturel, économique et très efficace pour une peau lisse comme un bébé.</p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-2">
                                            <Search size={16} className="text-gold-500" /> Ce que l’article explique :
                                        </div>
                                        <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
                                            <li>Le café exfolie en douceur</li>
                                            <li>Enlève les peaux mortes & impuretés</li>
                                            <li>L'huile nourrit et adoucit</li>
                                            <li>Rend la peau lumineuse et lisse</li>
                                            <li>Corps, pieds, mains et visage</li>
                                        </ul>
                                    </div>
                                </div>

                                <Link to="/article/gommage-cafe" className="mt-auto inline-flex items-center text-sm font-bold text-gray-900 hover:text-gold-600 transition group">
                                    Lire l'article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Article 2: Comment enlever les taches sombres */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img src="/images/dark_spots_treatment.png" alt="Taches sombres" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="text-xs font-bold text-gold-500 uppercase mb-2">CORPS</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">🌟 2. Comment enlever les taches sombres</h3>
                                <p className="text-sm text-gray-600 mb-4 italic">Solutions naturelles pour traiter l’hyperpigmentation : taches noires, cicatrices, zones sombres.</p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-2">
                                            <Search size={16} className="text-gold-500" /> Ce que l’article explique :
                                        </div>
                                        <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
                                            <li>Remèdes naturels éclaircissants</li>
                                            <li>Citron, curcuma, aloe vera, rose musquée</li>
                                            <li>Importance de la régularité</li>
                                            <li>Nécessité d'une protection solaire</li>
                                            <li>Conseils de prévention</li>
                                        </ul>
                                    </div>
                                </div>

                                <Link to="/article/taches-sombres" className="mt-auto inline-flex items-center text-sm font-bold text-gray-900 hover:text-gold-600 transition group">
                                    Lire l'article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Article 3: Hydratation intense pour l’hiver */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                            <div className="h-48 overflow-hidden">
                                <img src="/images/winter_skin_hydration.png" alt="Hydratation hiver" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="text-xs font-bold text-gold-500 uppercase mb-2">CORPS</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">🌟 3. Hydratation intense pour l’hiver</h3>
                                <p className="text-sm text-gray-600 mb-4 italic">Comment protéger et hydrater la peau lorsque le froid la rend sèche et rugueuse.</p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-2">
                                            <Search size={16} className="text-gold-500" /> Ce que l’article explique :
                                        </div>
                                        <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
                                            <li>Crèmes riches (karité, cacao)</li>
                                            <li>Sceller l'hydratation après la douche</li>
                                            <li>Éviter l'eau trop chaude</li>
                                            <li>S'hydrater de l'intérieur (eau)</li>
                                            <li>Protéger zones sensibles (lèvres, mains)</li>
                                        </ul>
                                    </div>
                                </div>

                                <Link to="/article/hydratation-hiver" className="mt-auto inline-flex items-center text-sm font-bold text-gray-900 hover:text-gold-600 transition group">
                                    Lire l'article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Voir les produits corps
                    </Link>
                </div>
            </div>
        </div>
    );
};

const CheckCircleIcon = () => <Check size={18} className="text-teal-600" />;
const XCircleIcon = () => <X size={18} className="text-red-600" />;

const RoutineRow: React.FC<{ day: string; activity: string; isLast?: boolean }> = ({ day, activity, isLast }) => (
    <tr className={`hover:bg-gray-50 transition ${!isLast ? 'border-b border-gray-100' : ''}`}>
        <td className="py-4 px-6 font-bold text-gray-800 w-1/3">{day}</td>
        <td className="py-4 px-6 text-gray-600">{activity}</td>
    </tr>
);

export default ArticleSkin;
