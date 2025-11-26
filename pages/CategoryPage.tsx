import React from 'react';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';

interface Props {
  title: string;
  subtitle: string;
  bannerImage: string;
  subcategories: string[];
  articles: Article[];
}

const CategoryPage: React.FC<Props> = ({ title, subtitle, bannerImage, subcategories, articles }) => {
  return (
    <div>
      {/* Banner */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img 
            src={bannerImage} 
            alt={title} 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gold-400 uppercase tracking-widest">{title}</h1>
          <p className="text-xl font-light">{subtitle}</p>
        </div>
      </div>

      {/* Subcategories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 overflow-x-auto">
          <div className="flex space-x-4 md:justify-center min-w-max">
            {subcategories.map((sub, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gold-100 hover:text-gold-700 cursor-pointer transition">
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-serif text-2xl font-bold mb-8 border-l-4 border-gold-500 pl-4">Articles récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;