import React from 'react';
import { ArrowLeft, Check, X, Clock, Calendar, Droplets, Sparkles, Shield, Zap, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleNails: React.FC = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/ongles" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                    Retour aux conseils ongles
                </Link>

                <div className="mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Comment renforcer des ongles fragiles en <span className="text-gold-500">7 jours</span>
                    </h1>
                    <p className="text-xl text-gray-600 italic border-l-4 border-gold-400 pl-6 lg:max-w-3xl">
                        "Dites adieu aux ongles cassants, dédoublés et mous avec cette routine express de choc."
                    </p>
                </div>

                {/* Hero Section */}
                <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <img
                        src="/images/nail_transformation.png"
                        alt="Transformation des ongles"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8 md:p-12 text-white">
                            <div className="flex gap-4 items-center mb-4">
                                <div className="bg-gold-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase">Routine Express</div>
                                <div className="flex items-center gap-1 text-gold-400">
                                    <Clock size={16} /> <span className="text-sm font-bold">15 min / jour</span>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold">La transformation commence ici</h2>
                        </div>
                    </div>
                </div>

                {/* The 7-Day Protocol */}
                <section className="mb-20">
                    <h2 className="font-serif text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
                        <Calendar className="text-gold-500" /> Le protocole quotidien
                    </h2>

                    <div className="space-y-8">
                        <DayStep
                            title="Trempage Fortifiant"
                            ingredients="Huile d'olive tiède + Jus de citron"
                            instruction="Trempe tes ongles 10 à 15 minutes chaque matin."
                            benefit="Renforce la kératine et blanchit naturellement l'ongle."
                        />
                        <DayStep
                            title="Le Massage Vitality"
                            ingredients="Huile de ricin ou Huile de coco"
                            instruction="Masse chaque ongle et sa cuticule pendant 2-3 minutes le soir."
                            benefit="Stimule la circulation sanguine à la racine pour booster la pousse."
                        />
                        <DayStep
                            title="L'effet Bouclier"
                            ingredients="Vernis durcissant (Base Coat)"
                            instruction="Applique une couche fine tous les deux jours."
                            benefit="Crée une barrière physique contre les chocs et l'eau."
                        />
                    </div>
                </section>

                {/* Mistakes to Avoid */}
                <section className="mb-20 bg-red-50 p-8 md:p-12 rounded-[3rem] border border-red-100">
                    <h2 className="text-2xl font-bold mb-8 text-red-900 flex items-center gap-2">
                        <X className="text-red-600" /> Les ennemis de tes ongles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                            <Zap className="text-orange-500" />
                            <span className="text-gray-800 font-medium">L'eau prolongée sans gants</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                            <Zap className="text-orange-500" />
                            <span className="text-gray-800 font-medium">Arracher ses cuticules ou ses peaux</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                            <Zap className="text-orange-500" />
                            <span className="text-gray-800 font-medium">L'usage excessif de dissolvant avec acétone</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm">
                            <Zap className="text-orange-500" />
                            <span className="text-gray-800 font-medium">Utiliser ses ongles comme des outils</span>
                        </div>
                    </div>
                </section>

                {/* Nutrition section */}
                <section className="mb-20">
                    <div className="bg-gray-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 text-gold-400">Nourris tes ongles de l'intérieur</h2>
                            <p className="text-gray-300 mb-8 max-w-2xl">
                                Tes ongles sont le reflet de ta santé. Pour des résultats durables, intègre ces nutriments à ton alimentation :
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <NutritionCard title="Biotine" source="Banane, Œufs, Noix" />
                                <NutritionCard title="Zinc" source="Haricots, Poisson" />
                                <NutritionCard title="Vitamine E" source="Avocat, Amandes" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    </div>
                </section>

                {/* Progress bar */}
                <section className="mb-16">
                    <h2 className="font-serif text-3xl font-bold mb-10 text-gray-900 text-center">Ta progression</h2>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative">
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-100 -z-10"></div>
                        <ProgressPoint day="Jour 3" text="Ongles plus brillants et moins cassants." />
                        <ProgressPoint day="Jour 7" text="Solidité visible et bords nets." />
                        <ProgressPoint day="Jour 21" text="Croissance saine et transformation totale." />
                    </div>
                </section>

                <div className="text-center">
                    <Link to="/shop" className="inline-block bg-gold-500 text-black font-bold py-4 px-10 rounded-full hover:bg-gold-400 transition transform hover:-translate-y-1 shadow-lg">
                        Découvrir nos sérums fortifiants
                    </Link>
                </div>
            </div>
        </div>
    );
};

const DayStep: React.FC<{ title: string; ingredients: string; instruction: string; benefit: string }> = ({ title, ingredients, instruction, benefit }) => (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition flex flex-col md:flex-row gap-8 items-center group">
        <div className="bg-gold-50 p-6 rounded-2xl group-hover:bg-gold-100 transition">
            <Droplets className="text-gold-600" size={32} />
        </div>
        <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2 underline decoration-gold-300 decoration-4 underline-offset-4">{title}</h3>
            <p className="text-gold-700 font-bold text-sm mb-4 uppercase tracking-tighter italic">{ingredients}</p>
            <p className="text-gray-600 mb-2">{instruction}</p>
            <p className="text-sm font-bold text-green-600 flex items-center justify-center md:justify-start gap-1">
                <Check size={16} /> {benefit}
            </p>
        </div>
    </div>
);

const NutritionCard: React.FC<{ title: string; source: string }> = ({ title, source }) => (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
        <h4 className="text-gold-400 font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{source}</p>
    </div>
);

const ProgressPoint: React.FC<{ day: string; text: string }> = ({ day, text }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 text-center md:text-left w-full">
        <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg">
            {day.split(' ')[1]}
        </div>
        <h4 className="font-bold text-gray-900 mb-2">{day}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
);

export default ArticleNails;
