import {create} from 'zustand';
import {productService} from '../services/productService';

export const useProductStore = create((set, get) => ({
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({loading: true, error: null});
    try {
      const data = await productService.getAllProducts();
      const cosmeticProducts = productService.transformToCosmeticProducts(data.products);
      set({products: cosmeticProducts, loading: false});
    } catch (error) {
      set({error: error.message, loading: false});
    }
  },

  fetchProductById: async (id) => {
    set({loading: true, error: null});
    try {
      const product = await productService.getProductById(id);
      set({selectedProduct: product, loading: false});
    } catch (error) {
      set({error: error.message, loading: false});
    }
  },

  searchProducts: async (query) => {
    set({loading: true, error: null});
    try {
      const data = await productService.searchProducts(query);
      const cosmeticProducts = productService.filterCosmeticProducts(data.products);
      set({products: cosmeticProducts, loading: false});
    } catch (error) {
      set({error: error.message, loading: false});
    }
  },

  clearError: () => set({error: null}),
  clearSelectedProduct: () => set({selectedProduct: null}),
}));