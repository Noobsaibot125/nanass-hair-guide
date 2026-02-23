import React from 'react';
import { ArrowLeft, Sun, Shield, Sparkles, Check, AlertCircle, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleSpots: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/corps" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux conseils corps
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Comment enlever les taches sombres <span className="text-gold-500">naturellement</span>
                </h1>

                <p className="text-xl text-gray-600 mb-12 italic leading-relaxed">
                    Des solutions efficaces pour traiter l'hyperpigmentation : taches noires, cicatrices et zones sombres.
                </p>

                {/* Hero Section */}
                <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl h-[450px]">
                    <img
                        src="/images/dark_spots_treatment.png"
                        alt="Soins anti-taches"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-white mb-2">Un teint uniforme</h2>
                            <p className="text-gray-200 font-light">Retrouvez l'éclat de votre peau avec des méthodes douces.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <section>
                        <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                            <Sparkles className="text-gold-500" /> Remèdes Naturels
                        </h2>
                        <div className="space-y-4">
                            <RemedyItem
                                title="Citron dilué"
                                description="Action éclaircissante naturelle. À utiliser avec précaution (jamais avant le soleil)."
                            />
                            <RemedyItem
                                title="Curcuma & Miel"
                                description="Excellent anti-inflammatoire qui unifie le teint."
                            />
                            <RemedyItem
                                title="Aloe Vera"
                                description="Répare la peau et réduit l'apparence des cicatrices."
                            />
                            <RemedyItem
                                title="Huile de Rose Musquée"
                                description="Puissante pour régénérer la peau et atténuer les taches."
                            />
                        </div>
                    </section>

                    <section className="bg-gold-50 p-8 rounded-3xl border border-gold-100">
                        <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                            <Shield className="text-gold-600" /> Règles d'Or
                        </h2>
                        <ul className="space-y-4 text-gray-800">
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-1" size={18} />
                                <span><strong>Régularité :</strong> Les résultats visibles demandent au moins 4 à 8 semaines.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-1" size={18} />
                                <span><strong>Protection Solaire :</strong> Indispensable ! Le soleil noircit les taches existantes.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-green-600 mt-1" size={18} />
                                <span><strong>Patience :</strong> Ne grattez jamais vos boutons pour éviter de nouvelles cicatrices.</span>
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Important Warning */}
                <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl mb-16">
                    <div className="flex items-center gap-3 text-red-700 font-bold mb-4 uppercase tracking-wider text-sm">
                        <AlertCircle size={20} /> Attention primordiale
                    </div>
                    <p className="text-red-900 leading-relaxed font-medium">
                        Certaines zones (coudes, genoux, aisselles) sont naturellement plus foncées. Ne cherchez pas à "décaper" votre peau, cherchez seulement à l'uniformiser en douceur. Les produits décapants puissants causent plus de dégâts sur le long terme.
                    </p>
                </div>

                <div className="text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Découvrir nos sérums anti-taches
                    </Link>
                </div>
            </div>
        </div>
    );
};

const RemedyItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="p-4 rounded-2xl border border-gray-100 hover:border-gold-300 transition-colors">
        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
    </div>
);

export default ArticleSpots;
