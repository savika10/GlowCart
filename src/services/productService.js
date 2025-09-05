import api from './api';
import {COSMETIC_KEYWORDS} from '../utils/constants';

export const productService = {
  async getAllProducts() {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  },

  async getProductById(id) {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch product details');
    }
  },

  async searchProducts(query) {
    try {
      const response = await api.get(`/products/search?q=${query}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to search products');
    }
  },

  // Filter products to mimic cosmetic products
  filterCosmeticProducts(products) {
    return products.filter(product => {
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      
      return COSMETIC_KEYWORDS.some(keyword => 
        title.includes(keyword) || description.includes(keyword)
      );
    });
  },

  // Transform products to match cosmetic theme
  transformToCosmeticProducts(products) {
    const cosmeticNames = [
      'Essence Mascara Lash Princess',
      'Eyeshadow Palette with Mirror',
      'Powder Canister',
      'Red Lipstick',
      'Hyaluronic Acid Serum',
      'Tree Oil 30ml',
      'Skin Beauty Serum',
      'Freckle Treatment Cream',
      'Anti-Age Face Cream',
      'Velvet Primer',
    ];

    return products.slice(0, 10).map((product, index) => ({
      ...product,
      title: cosmeticNames[index] || product.title,
      category: 'beauty',
    }));
  },
};