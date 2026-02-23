import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import AICoach from './components/AICoach';

// Original Articles
import ArticleGrowth from './pages/ArticleGrowth';
import ArticleSkin from './pages/ArticleSkin';
import ArticleNails from './pages/ArticleNails';
import ArticleLace from './pages/ArticleLace';

// New Articles
import ArticleOil from './pages/ArticleOil';
import ArticleRoutine from './pages/ArticleRoutine';
import ArticleScrub from './pages/ArticleScrub';
import ArticleSpots from './pages/ArticleSpots';
import ArticleWinter from './pages/ArticleWinter';
import ArticleNailsPro from './pages/ArticleNailsPro';

import { HAIR_ARTICLES, BODY_ARTICLES, NAIL_ARTICLES } from './constants';

// Helper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/cheveux"
              element={
                <CategoryPage
                  title="Cheveux"
                  subtitle="Des conseils simples pour des cheveux magnifiques."
                  bannerImage="/images/Cheveux.png"
                  subcategories={['Soins naturels', 'Croissance', 'Perruques & Lace', 'Cheveux 4C']}
                  articles={HAIR_ARTICLES}
                />
              }
            />

            <Route
              path="/corps"
              element={
                <CategoryPage
                  title="Corps"
                  subtitle="Une peau lumineuse, naturellement."
                  bannerImage="/images/Corps.png"
                  subcategories={['Gommages', 'Taches & Imperfections', 'Routines', 'Produits']}
                  articles={BODY_ARTICLES}
                />
              }
            />

            <Route
              path="/ongles"
              element={
                <CategoryPage
                  title="Ongles"
                  subtitle="Des ongles forts, propres et élégants."
                  bannerImage="images/Page_Ongles.png"
                  subcategories={['Soins', 'Renforcement', 'Modèles', 'Erreurs à éviter']}
                  articles={NAIL_ARTICLES}
                />
              }
            />

            {/* Routes Articles */}
            <Route path="/article/croissance-2025" element={<ArticleGrowth />} />
            <Route path="/article/routine-peau-eclatante" element={<ArticleSkin />} />
            <Route path="/article/ongles-forts-7-jours" element={<ArticleNails />} />
            <Route path="/article/pose-lace-frontal" element={<ArticleLace />} />

            {/* New Routes */}
            <Route path="/article/huile-croissance" element={<ArticleOil />} />
            <Route path="/article/routine-cheveux-casse" element={<ArticleRoutine />} />
            <Route path="/article/gommage-cafe" element={<ArticleScrub />} />
            <Route path="/article/taches-sombres" element={<ArticleSpots />} />
            <Route path="/article/hydratation-hiver" element={<ArticleWinter />} />
            <Route path="/article/manucure-pro" element={<ArticleNailsPro />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AICoach />
      </div>
    </Router>
  );
};

export default App;