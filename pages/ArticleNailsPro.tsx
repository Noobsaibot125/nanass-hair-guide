import React from 'react';
import { ArrowLeft, Scissors, Droplets, Sparkles, CheckCircle2, ShoppingBag, Info, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleNailsPro: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/ongles" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux conseils ongles
                </Link>

                <div className="mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Manucure maison niveau pro : <span className="text-gold-500">les indispensables</span>
                    </h1>
                    <p className="text-xl text-gray-600 italic border-l-4 border-gold-400 pl-6">
                        "Réaliser une manucure impeccable à la maison est simple lorsque l’on dispose du bon matériel."
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative h-64 md:h-[450px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <img
                        src="/images/manicure_pro_kit.png"
                        alt="Kit manucure professionnel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Section 1: Tools */}
                        <section>
                            <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                <ShoppingBag className="text-gold-500" /> Les outils incontournables
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <ToolItem title="Coupe-ongles" desc="Pour raccourcir proprement sans fragiliser l’ongle." />
                                <ToolItem title="Lime (180/240 grit)" desc="Pour définir la forme souhaitée (carrée, ronde, amande…)." />
                                <ToolItem title="Polissoir 4 faces" desc="Lisse la surface, retire les stries et apporte un éclat naturel." />
                                <ToolItem title="Repousse-cuticules" desc="Prépare le contour de l’ongle pour une pose impeccable." />
                                <ToolItem title="Coupe-cuticules" desc="Retire délicatement les petites peaux mortes." />
                                <ToolItem title="Brosse douce" desc="Élimine les résidus de limage." />
                            </div>
                        </section>

                        {/* Section 2: Products */}
                        <section>
                            <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                <Sparkles className="text-gold-500" /> Produits & Finition
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-gold-50/50 border border-gold-100">
                                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2" />
                                    <div>
                                        <span className="font-bold text-gray-900">Base coat :</span>
                                        <p className="text-gray-600 text-sm">Protège l’ongle et renforce les ongles fragiles.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-gold-50/50 border border-gold-100">
                                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2" />
                                    <div>
                                        <span className="font-bold text-gray-900">Vernis de couleur :</span>
                                        <p className="text-gray-600 text-sm">Classique, semi-permanent ou longue tenue.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-2xl bg-gold-50/50 border border-gold-100">
                                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2" />
                                    <div>
                                        <span className="font-bold text-gray-900">Top coat :</span>
                                        <p className="text-gray-600 text-sm">Scelle la couleur, ajoute de la brillance et prolonge la tenue.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="space-y-8">
                        {/* Result expected card */}
                        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl transform rotate-1">
                            <h3 className="text-xl font-bold mb-4 text-gold-400">✨ Résultat attendu</h3>
                            <p className="text-gray-300 leading-relaxed italic">
                                "Avec ces outils, tu obtiens une manucure lisse, brillante et durable, digne d’un institut."
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-gold-400 font-bold">
                                <CheckCircle2 size={20} /> Qualité Institut
                            </div>
                        </div>

                        <div className="bg-gold-50 p-6 rounded-3xl border border-gold-100">
                            <h3 className="font-bold text-gold-800 mb-3 flex items-center gap-2">
                                <Info size={18} /> Petit plus
                            </h3>
                            <p className="text-sm text-gold-700">
                                Un bain tiède + savon doux ramollit les cuticules et rend la peau plus souple avant de commencer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Cuticle Oils */}
                <section className="mb-20 bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl font-bold mb-4 text-center text-gray-900">
                            Huiles pour cuticules : pourquoi c’est indispensable
                        </h2>
                        <p className="text-center text-gray-600 mb-12">
                            L’huile pour cuticules n’est pas un simple produit de soin : c’est un incontournable pour garder des ongles sains, forts et élégants.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Heart className="text-gold-500" size={20} /> Les bienfaits essentiels
                                </h4>
                                <ul className="space-y-3">
                                    <li className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Hydrate en profondeur</li>
                                    <li className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Stimule la pousse</li>
                                    <li className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Renforce les ongles</li>
                                    <li className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Réduit les peaux mortes</li>
                                    <li className="text-sm text-gray-600 flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Optimise la manucure</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4">🌸 Les meilleures huiles</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Amande douce', 'Jojoba', 'Coco', 'Argan', 'Ricin'].map(oil => (
                                        <span key={oil} className="px-3 py-1 bg-gold-50 text-gold-600 rounded-full text-xs font-bold ring-1 ring-gold-100">
                                            {oil}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-gray-400 italic">Mention spéciale au Ricin pour la pousse et l'épaisseur !</p>
                            </div>
                        </div>

                        <div className="bg-gold-500 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6">
                            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                                <Droplets size={40} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Comment l'utiliser ?</h4>
                                <p className="text-gold-50 leading-relaxed">
                                    Dépose une goutte sur chaque cuticule, masse 20 à 30 secondes.
                                    À faire quotidiennement pour des résultats visibles rapidement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Découvrir nos soins pour ongles
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ToolItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-2xl transition">
        <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xs uppercase tracking-tighter">
            {title.substring(0, 1)}
        </div>
        <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default ArticleNailsPro;
