import React from 'react';
import { ArrowLeft, Droplets, Shield, Sparkles, AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleRoutine: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/cheveux" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux conseils cheveux
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Routine Cheveux Cassés & Crépus <span className="text-gold-500">(Type 4C)</span>
                </h1>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed italic border-l-4 border-gold-400 pl-6">
                    "Une routine adaptée pour les garder forts, doux et hydratés en permanence."
                </p>

                {/* Hero Image */}
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-16 shadow-xl">
                    <img
                        src="/images/afro_4c_hair.png"
                        alt="Cheveux crépus type 4C"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Core Principles */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                        <Sparkles className="text-gold-500" /> Les points essentiels
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FeatureCard
                            icon={<Droplets className="text-blue-500" />}
                            title="Lavage Douceur"
                            content="Laver avec un shampoing doux sans sulfate pour ne pas assécher la fibre capillaire déjà fragile."
                        />
                        <FeatureCard
                            icon={<Shield className="text-green-500" />}
                            title="Soin Profond"
                            content="Faire un masque hydratant ou protéiné chaque semaine pour renforcer la structure du cheveu."
                        />
                        <FeatureCard
                            icon={<Smartphone className="text-purple-500" />}
                            title="Méthode LOC/LCO"
                            content="Hydrater avec Liquid + Oil + Cream (ou LCO) pour sceller l'eau à l'intérieur du cheveu."
                        />
                        <FeatureCard
                            icon={<AlertTriangle className="text-orange-500" />}
                            title="Démêlage Sécurisé"
                            content="Démêler seulement quand les cheveux sont mouillés et saturés d'après-shampoing."
                        />
                    </div>
                </section>

                {/* The Routine Steps */}
                <section className="mb-16 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                    <h2 className="font-serif text-3xl font-bold mb-10 text-center text-gray-900">Ta Routine Hebdomadaire</h2>

                    <div className="space-y-12">
                        <RoutineStep
                            step="1"
                            title="Le Shampoing"
                            details="Utilise un shampoing hydratant. Masse uniquement le cuir chevelu. Laisse la mousse couler sur tes longueurs sans frotter."
                        />
                        <RoutineStep
                            step="2"
                            title="Le Soin (Masque)"
                            details="Applique ton masque section par section. Laisse poser sous un bonnet chauffant pendant 30 minutes minimum."
                        />
                        <RoutineStep
                            step="3"
                            title="Hydratation & Scellage"
                            details="Utilise des produits épais (crème riche + beurre de karité). C'est le secret pour la souplesse des cheveux 4C."
                        />
                        <RoutineStep
                            step="4"
                            title="Coiffure Protectrice"
                            details="Fais des coiffures qui ne tirent pas sur tes bords (vanilles, nattes) pour réduire la manipulation quotidienne."
                        />
                    </div>
                </section>

                {/* Night Protection */}
                <section className="mb-16">
                    <div className="bg-black text-white p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gold-400">
                                🌙 Protection de nuit
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Le coton absorbe l'hydratation de tes cheveux et cause de la casse par friction.
                                Utilise impérativement un bonnet ou une taie d'oreiller en **satin** ou **soie**.
                            </p>
                            <div className="flex items-center gap-2 text-gold-500 font-bold">
                                <CheckCircle size={18} /> Souplesse au réveil garantie
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition duration-500">
                            <img src="/images/hair_growth_guide.png" alt="Satin protection" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                {/* Goal Summary */}
                <div className="bg-gold-50 border-2 border-gold-200 p-8 rounded-3xl text-center mb-16">
                    <h4 className="text-gold-700 font-bold text-lg mb-2 uppercase tracking-widest">Objectif Final</h4>
                    <p className="text-gray-900 text-xl font-medium">
                        Hydrater, assouplir et réduire la casse pour enfin retenir ta longueur.
                    </p>
                </div>

                <div className="text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Voir les produits pour cheveux 4C
                    </Link>
                </div>
            </div>
        </div>
    );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="mb-4">{icon}</div>
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
    </div>
);

const RoutineStep: React.FC<{ step: string; title: string; details: string }> = ({ step, title, details }) => (
    <div className="flex gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
            {step}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{details}</p>
        </div>
    </div>
);

export default ArticleRoutine;
