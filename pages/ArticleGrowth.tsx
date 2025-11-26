import React from 'react';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleGrowth: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition">
                    <ArrowLeft className="mr-2" size={20} />
                    Retour à l'accueil
                </Link>

                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Comment faire pousser les cheveux rapidement <span className="text-gold-500">(2025)</span>
                </h1>

                {/* Hero Background Section */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <img
                        src="/images/hair_growth_bg.png"
                        alt="Hair Growth Background"
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 text-white">
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                Découvre les méthodes infaillibles pour maximiser la pousse et stopper la casse définitivement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 1: Cheveux Afro Naturels */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 text-green-800 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                        <span className="text-2xl">🌿</span> ÉVITER LA CASSE – CHEVEUX AFRO NATURELS
                    </h2>

                    <div className="space-y-8">
                        <TipCard
                            number={1}
                            title="Hydratation régulière"
                            active="Utiliser un spray d'eau + aloe vera ou leave-in tous les 2–3 jours."
                            reverse="Éviter les huiles seules sur cheveux secs → ça scelle la sécheresse au lieu d'hydrater."
                        />
                        <TipCard
                            number={2}
                            title="Pré-poo avant le shampoing"
                            active="Appliquer huile de coco/olive + laisser 30 min avant shampooing."
                            reverse="Shampoing direct sur cheveux secs → casse assurée."
                        />
                        <TipCard
                            number={3}
                            title="Démêlage doux"
                            active="Démêler sur cheveux humides + crème glissante + peigne large."
                            reverse="Brosser à sec → casse et fourches garanties."
                        />
                        <TipCard
                            number={4}
                            title="Coiffures protectrices"
                            active="Tresses sans trop serrer, braids, twist, vanilles."
                            reverse="Tresses trop serrées → traction, perte des tempes."
                        />
                        <TipCard
                            number={5}
                            title="Satin obligatoire"
                            active="Bonnet, taie d'oreiller en satin, foulard la nuit."
                            reverse="Coton → sèche le cheveu + casse par friction."
                        />
                        <TipCard
                            number={6}
                            title="Coupe régulière"
                            active="Couper 1–2 cm tous les 2–3 mois."
                            reverse="Garder les pointes abîmées → la casse remonte."
                        />
                        <TipCard
                            number={7}
                            title="Routine simple mais constante"
                            active="Hydratation → scellage → coiffure → protection."
                            reverse="Multiplier les produits → étouffement du cuir chevelu."
                        />
                    </div>
                </section>

                {/* Section 2: Cheveux Lissés & Défrisés */}
                <section>
                    <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 text-purple-800 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                        <span className="text-2xl">✨</span> ÉVITER LA CASSE – CHEVEUX LISSÉS & DÉFRISÉS
                    </h2>

                    <div className="space-y-8">
                        <TipCard
                            number={1}
                            title="Protéger avec de la kératine/protéines"
                            active="Masque protéiné 1×/mois pour renforcer."
                            reverse="Trop de protéines → rigidité → casse."
                        />
                        <TipCard
                            number={2}
                            title="Pas de chaleur sans protection"
                            active="Thermoprotecteur avant brushing ou fer."
                            reverse="Lisser sans protection → brûlure des cuticules."
                        />
                        <TipCard
                            number={3}
                            title="Moisture + léger scellement"
                            active="Hydratant léger + huile fine (argan, amande douce)."
                            reverse="Huiles lourdes → cheveux alourdis et cassants."
                        />
                        <TipCard
                            number={4}
                            title="Espacer les lissages et défrisages"
                            active="Lissage toutes les 2–3 semaines max."
                            reverse="Chaleur fréquente → fibres fragilisées."
                        />
                        <TipCard
                            number={5}
                            title="Massages du cuir chevelu"
                            active="5 min/jour avec huile de ricin ou romarin."
                            reverse="Gratter le cuir chevelu avec les ongles → microcoupures."
                        />
                        <TipCard
                            number={6}
                            title="Laver avec des shampoings doux"
                            active="Shampoing sans sulfate ou hydratant."
                            reverse="Produits détergents → casse + sécheresse."
                        />
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Découvrir les produits recommandés
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Helper Component for Tips
const TipCard: React.FC<{ number: number; title: string; active: string; reverse: string }> = ({ number, title, active, reverse }) => (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">{number}</span>
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                        <span className="font-bold text-green-700 block mb-1">Active (À faire)</span>
                        <p className="text-gray-700 text-sm">{active}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-2">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                        <span className="font-bold text-red-700 block mb-1">Reverse (À éviter)</span>
                        <p className="text-gray-700 text-sm">{reverse}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ArticleGrowth;
