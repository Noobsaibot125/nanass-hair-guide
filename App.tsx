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