import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-gold-500 rounded-lg"></div>
            <img 
              src="images/ANNA.jpg" 
              alt="Nanass Portrait" 
              className="relative z-10 w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="font-serif text-4xl font-bold mb-6">Je suis Nanass</h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Passionnée de beauté depuis plus de 10 ans, j'ai créé ce guide pour partager mes découvertes. 
            Mon objectif est simple : démocratiser les soins de qualité.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            À travers ce site, je partage mes meilleures astuces pour t’aider à être belle de la tête aux pieds, 
            avec des conseils simples, naturels et adaptés à toutes. Que tu aies des cheveux 4C, une peau sensible 
            ou que tu cherches juste à te chouchouter, tu es au bon endroit.
          </p>
          <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-500">
            <p className="italic text-gray-800 font-serif text-xl">
              "La beauté commence au moment où tu décides d'être toi-même."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;