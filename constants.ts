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
    imageUrl: '/images/nail_transformation.png',
    link: '/article/ongles-forts-7-jours'
  }
];

export const HAIR_ARTICLES: Article[] = [
  { id: 'h1', category: 'Cheveux', title: 'Comment stopper la casse définitivement', description: 'Apprenez à arrêter la casse en protégeant la fibre capillaire et en retenant la longueur.', imageUrl: '/images/hair_growth_guide.png', link: '/article/croissance-2025' },
  { id: 'h2', category: 'Cheveux', title: 'Recette huile de croissance maison', description: 'Une recette simple à base d\'huiles naturelles pour stimuler le cuir chevelu et favoriser la croissance.', imageUrl: '/images/hair_growth_oil.png', link: '/article/huile-croissance' },
  { id: 'h3', category: 'Cheveux', title: 'Comment poser et entretenir une lace frontal', description: 'Le guide complet pour un résultat naturel et une tenue longue durée.', imageUrl: '/images/lace_frontal_guide.png', link: '/article/pose-lace-frontal' },
  { id: 'h4', category: 'Cheveux', title: 'Routine cheveux cassé', description: 'Une routine complète pour garder les cheveux crépus type forts, doux et hydratés.', imageUrl: '/images/afro_4c_hair.png', link: '/article/routine-cheveux-casse' },
];

export const BODY_ARTICLES: Article[] = [
  { id: 'b1', category: 'Corps', title: 'Gommage café + huile = peau douce', description: 'Une recette économique et puissante pour une peau lisse et lumineuse comme celle d\'un bébé.', imageUrl: '/images/coffee_body_scrub.png', link: '/article/gommage-cafe' },
  { id: 'b2', category: 'Corps', title: 'Comment enlever les taches sombres', description: 'Solutions naturelles pour traiter l\'hyperpigmentation et retrouver un teint uniforme.', imageUrl: '/images/dark_spots_treatment.png', link: '/article/taches-sombres' },
  { id: 'b3', category: 'Corps', title: 'Hydratation intense pour l\'hiver', description: 'Conseils experts pour protéger et nourrir votre peau face au froid glacial.', imageUrl: '/images/winter_skin_hydration.png', link: '/article/hydratation-hiver' },
];

export const NAIL_ARTICLES: Article[] = [
  { id: 'n1', category: 'Ongles', title: 'Manucure maison niveau pro', description: 'Le guide complet des indispensables pour un résultat digne d\'un institut.', imageUrl: '/images/manicure_pro_kit.png', link: '/article/manucure-pro' },
  { id: 'n2', category: 'Ongles', title: 'Renforcer ses ongles en 7 jours', description: 'Dites adieu aux ongles cassants avec cette routine de renforcement rapide.', imageUrl: '/images/nail_transformation.png', link: '/article/ongles-forts-7-jours' },
];

export const SHOP_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Huile Pousse Extrême', price: 25.99, category: 'Cheveux', imageUrl: '/images/hair_growth_oil.png' },
  { id: 'p2', name: 'Bonnet en Satin', price: 12.50, category: 'Accessoires', imageUrl: '/images/hair_growth_guide.png' },
  { id: 'p3', name: 'Kit Gommage Corps', price: 30.00, category: 'Corps', imageUrl: '/images/coffee_body_scrub.png' },
  { id: 'p4', name: 'Ebook: Routine', price: 9.99, category: 'Digital', imageUrl: '/images/afro_4c_hair.png' },
];