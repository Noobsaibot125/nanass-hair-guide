import { NavItem, Article, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Cheveux', path: '/cheveux' },
  { label: 'Corps', path: '/corps' },
  { label: 'Ongles', path: '/ongles' },
  { label: 'Shop', path: '/shop' },
  { label: 'À propos', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const LATEST_ARTICLES: Article[] = [
  {
    id: '1',
    category: 'Cheveux',
    title: 'Comment faire pousser les cheveux rapidement (2025)',
    description: 'La méthode infaillible pour gagner des centimètres.',
    imageUrl: '/images/hair_growth_guide.png',
    link: '/article/croissance-2025'
  },
  {
    id: '2',
    category: 'Corps',
    title: 'Routine peau éclatante pour femme noire',
    description: 'Des soins simples et efficaces pour un teint lumineux.',
    imageUrl: '/images/skincare_routine.png',
    link: '/article/routine-peau-eclatante'
  },
  {
    id: '3',
    category: 'Ongles',
    title: 'Comment renforcer des ongles fragiles en 7 jours',
    description: 'Dites adieu aux ongles cassants avec cette routine.',
    imageUrl: '/images/nail_care.png'
  }
];

export const HAIR_ARTICLES: Article[] = [
  { id: 'h1', category: 'Cheveux', title: 'Comment stopper la casse définitivement', description: 'Les secrets pour retenir la longueur.', imageUrl: '/images/hair_growth_guide.png' },
  { id: 'h2', category: 'Cheveux', title: 'Recette huile de croissance maison', description: 'Un mélange naturel facile à réaliser.', imageUrl: '/images/hair_growth_oil.png' },
  { id: 'h3', category: 'Cheveux', title: 'Comment poser et entretenir une lace frontal', description: 'Le guide complet pour un résultat naturel.', imageUrl: '/images/lace_frontal_guide.png' },
  { id: 'h4', category: 'Cheveux', title: 'Routine Cheveux 4C', description: 'Hydratation et définition pour cheveux crépus.', imageUrl: '/images/afro_4c_hair.png' },
];

export const BODY_ARTICLES: Article[] = [
  { id: 'b1', category: 'Corps', title: 'Gommage café + huile = peau douce', description: 'Une recette économique pour une peau de bébé.', imageUrl: '/images/coffee_body_scrub.png' },
  { id: 'b2', category: 'Corps', title: 'Comment enlever les taches sombres', description: 'Solutions naturelles pour l\'hyperpigmentation.', imageUrl: '/images/skincare_routine.png' },
  { id: 'b3', category: 'Corps', title: 'Hydratation intense pour l\'hiver', description: 'Protégez votre peau du froid.', imageUrl: '/images/skincare_routine.png' },
];

export const NAIL_ARTICLES: Article[] = [
  { id: 'n1', category: 'Ongles', title: 'Manucure maison niveau pro', description: 'Les outils indispensables.', imageUrl: '/images/nail_care.png' },
  { id: 'n2', category: 'Ongles', title: 'Huiles pour cuticules', description: 'Pourquoi c\'est essentiel.', imageUrl: '/images/hair_growth_oil.png' },
];

export const SHOP_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Huile Pousse Extrême', price: 25.99, category: 'Cheveux', imageUrl: '/images/hair_growth_oil.png' },
  { id: 'p2', name: 'Bonnet en Satin', price: 12.50, category: 'Accessoires', imageUrl: '/images/hair_growth_guide.png' },
  { id: 'p3', name: 'Kit Gommage Corps', price: 30.00, category: 'Corps', imageUrl: '/images/coffee_body_scrub.png' },
  { id: 'p4', name: 'Ebook: Routine 4C', price: 9.99, category: 'Digital', imageUrl: '/images/afro_4c_hair.png' },
];