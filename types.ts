export interface Article {
  id: string;
  title: string;
  description: string;
  category: 'Cheveux' | 'Corps' | 'Ongles';
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}