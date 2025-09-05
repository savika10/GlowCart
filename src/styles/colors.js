// src/styles/colors.js
export const COLORS = {
  primary: '#D4A574', // Rose gold/brown
  primaryDark: '#B8956A',
  secondary: '#F4E4D6', // Light cream
  accent: '#E8B4B8', // Soft pink
  
  background: '#FFFFFF',
  backgroundLight: '#F8F8F8',
  surface: '#FFFFFF',
  
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  
  border: '#E0E0E0',
  borderLight: '#F0F0F0',
  
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  
  white: '#FFFFFF',
  black: '#000000',
  
  // Rating stars
  star: '#FFD700',
  starEmpty: '#E0E0E0',
};

// src/styles/typography.js
export const FONTS = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  light: 'System',
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
};

// src/utils/constants.js
export const API_BASE_URL = 'https://dummyjson.com';

export const SCREENS = {
  ONBOARDING: 'Onboarding',
  LOGIN: 'Login',
  REGISTER: 'Register',
  HOME: 'Home',
  PRODUCT_DETAILS: 'ProductDetails',
  PROFILE: 'Profile',
};

export const COSMETIC_KEYWORDS = [
  'mascara',
  'lipstick',
  'foundation',
  'powder',
  'eyeshadow',
  'blush',
  'concealer',
  'primer',
  'eyeliner',
  'lip',
  'face',
  'beauty',
  'makeup',
];

export const MOCK_REVIEWS = [
  {
    id: 1,
    name: 'Emma Collins',
    rating: 5,
    comment: 'Would not recommend',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Luna Andres',
    rating: 4,
    comment: 'Very good quality',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];