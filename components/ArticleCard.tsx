import React from 'react';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';

interface Props {
  article: Article;
  buttonText?: string;
}

const ArticleCard: React.FC<Props> = ({ article, buttonText = "Lire l'article" }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-2">{article.category}</span>
        <h3 className="font-serif text-xl font-bold mb-3 text-gray-900">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{article.description}</p>
        <button className="flex items-center text-black font-bold text-sm hover:text-gold-600 transition group">
          {buttonText} <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;