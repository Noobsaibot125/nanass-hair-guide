import React from 'react';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="p-6">
        <div className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-2">{article.category}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
        <Link
          to={article.link || '#'}
          className="inline-flex items-center text-black font-bold hover:text-gold-500 transition"
        >
          {buttonText} <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;