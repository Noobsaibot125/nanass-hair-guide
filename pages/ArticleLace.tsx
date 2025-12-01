import React from 'react';
import { ArrowLeft, Scissors, Droplets, Shield, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleLace: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition">
                    <ArrowLeft className="mr-2" size={20} />
                    Retour à l'accueil
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Comment poser et entretenir une lace frontal
                </h1>

                {/* Hero Background Section */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <img
                        src="/images/lace_frontal_bg.png"
                        alt="Lace Frontal Background"
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                Le guide complet pour un résultat naturel et une tenue longue durée.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1. Pose avec colle */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                        <span className="text-2xl">🌿</span> 1. Comment poser une Lace Frontale (avec colle)
                    </h2>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Star className="text-gold-500" /> Matériel nécessaire</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Colle lace (Ghost Bond, Bold Hold, Got2B)</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Dissolvant lace (C22 ou huile)</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Ciseaux & Peigne queue</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Fond de teint ou poudre</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Gel Baby Hair (Eco Styler)</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> Élastique Melt Band</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <Step number={1} title="Préparer les cheveux">
                            <p>Nattes plaquées ou perruque cap bien aplatit. Démaquille le front + sèche bien.</p>
                        </Step>
                        <Step number={2} title="Poser la perruque">
                            <p>Place la lace, ajuste l'alignement naturel. Coupe la lace en zig-zag (plus naturel qu'un trait droit).</p>
                        </Step>
                        <Step number={3} title="Application de la colle">
                            <p>Applique 1 à 3 couches fines sur le front (pas sur les cheveux). Laisse devenir transparent → ensuite colle la lace. Pose le melt band 10–20 minutes.</p>
                        </Step>
                        <Step number={4} title="Finition">
                            <p>Applique fond de teint sur la lace pour fondre avec ta carnation. Crée ou non des baby hairs selon ton style.</p>
                        </Step>
                    </div>
                    <div className="mt-4 text-center font-bold text-gold-600 bg-gold-50 p-3 rounded-lg inline-block">
                        🔸 Résultat : fixation longue durée de 3 à 7 jours.
                    </div>
                </section>

                {/* 2. Pose SANS colle */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                        <span className="text-2xl">🌿</span> 2. Pose Lace Frontale / Closure SANS colle (glueless)
                    </h2>
                    <p className="text-gray-700 mb-6 italic">Parfait si tu veux protéger ton front & tes bords (edges).</p>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                        <h3 className="font-bold text-blue-900 mb-3">Matériel & Technique</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                            <li>Bande élastique réglable + Peigne interne</li>
                            <li>Gel doux (Edge Control) + Mousse coiffante</li>
                        </ul>
                        <ol className="list-decimal list-inside space-y-2 text-gray-800 font-medium">
                            <li>Ajuste la perruque avec élastique + peignes internes</li>
                            <li>Plaque le devant avec mousse + band pendant 10–15 min</li>
                            <li>Coupe discrètement la lace + applique poudre pour camoufler</li>
                        </ol>
                        <p className="mt-4 text-sm font-bold text-blue-700">✔ Tenue 1 jour → idéal utilisation quotidienne.</p>
                    </div>
                </section>

                {/* 3. Closure */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                        <span className="text-2xl">🌿</span> 3. Pose d'une Closure (4x4 | 5x5 | 6x6)
                    </h2>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <p className="text-green-900 font-bold mb-4">Beaucoup plus simple que la lace frontale !</p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-green-600" /> Plaque la raie avec mousse + peigne fin</li>
                            <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-green-600" /> Colle ou non selon ton choix (Got2B gel = meilleure option)</li>
                            <li className="flex items-start gap-2"><Check size={18} className="mt-1 text-green-600" /> Finition avec un peu de poudre dans la raie pour effet « cuir chevelu »</li>
                        </ul>
                        <p className="mt-4 text-sm font-bold text-green-800">✨ La closure glueless tient très bien + naturelle si bien fondue.</p>
                    </div>
                </section>

                {/* Entretien */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                        <span className="text-2xl">💧</span> Entretien d'une perruque (indispensable)
                    </h2>

                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mb-8">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-6 font-bold text-gray-900 border-b border-gray-200">Type de wig</th>
                                    <th className="py-3 px-6 font-bold text-gray-900 border-b border-gray-200">Fréquence lavage</th>
                                    <th className="py-3 px-6 font-bold text-gray-900 border-b border-gray-200">Astuces</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="py-3 px-6 font-medium">Cheveux naturels</td>
                                    <td className="py-3 px-6 text-gray-600">1 fois / 2-3 semaines</td>
                                    <td className="py-3 px-6 text-gray-600">Hydratation + sérum huile légère</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-6 font-medium">Cheveux synthétiques</td>
                                    <td className="py-3 px-6 text-gray-600">1 fois / 3-4 semaines</td>
                                    <td className="py-3 px-6 text-gray-600">Éviter chaleur trop forte</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-gray-900">Routine de lavage</h3>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li>Démêle doucement des pointes vers la racine</li>
                                <li>Lave avec shampoing doux sans sulfate</li>
                                <li>Après-shampoing + masque hydratant 20 min</li>
                                <li>Laisse sécher à l'air libre</li>
                                <li>Applique sérum huile légère</li>
                            </ol>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-4 text-gray-900">⭐ Produits recommandés</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><strong>Shampoing :</strong> Shea Moisture, Creme of Nature</li>
                                <li><strong>Soin / masque :</strong> Aunt Jackie's, Cantu Shea Butter</li>
                                <li><strong>Sérum :</strong> Argan Oil, KeraCare Silken Seal</li>
                                <li><strong>Mousse :</strong> Olive Oil ORS, Eco Styler</li>
                                <li><strong>Protect heat spray :</strong> Tresemmé Heat Defense</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Bonus */}
                <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
                    <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3 text-red-900">
                        <span className="text-2xl">🔥</span> Bonus : Pour que ta perruque dure longtemps
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <Check className="text-red-500" /> <span className="text-gray-800">Dormir avec bonnet satiné ou foulard</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <Check className="text-red-500" /> <span className="text-gray-800">Ranger sur un support tête mannequin</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <Check className="text-red-500" /> <span className="text-gray-800">Pas d'excès de chaleur (max 180°)</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <Check className="text-red-500" /> <span className="text-gray-800">Hydratation régulière = brillance</span>
                        </div>
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Voir les produits perruques
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Step: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
            {number}
        </div>
        <div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

export default ArticleLace;
