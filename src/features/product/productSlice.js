import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilters } from './productAPI';

const initialState = {
  products: [],
  categories: [],
  brands: [],
  status: 'idle',
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'product/fetchAllProductsByFilter',
  async (filters) => {
    const response = await fetchProductsByFilters(filters);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

const categoryParser = (products) => {
  const ff = [...new Set([...products.map(p=>p.category)])];
  return ff.map(f=>({value:f, label:f.split('-').join(' '),checked:false}));
};

const brandParser = (products) => {
  const ff = [...new Set([...products.map(p=>p.brand)])];
  return ff.map(f=>({value:f, label:f,checked:false}));
};

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        state.categories = categoryParser(action.payload);
        state.brands = brandParser(action.payload);
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        // state.categories = [...new Set([...state.categories, ...categoryParser(action.payload)])];
        // state.brands = brandParser(action.payload);
      });
  },
});

export const { increment } = productSlice.actions;


export const selectAllProducts = (state) =>({
  products : state.product.products,
  filters : [
    {
      id: "category",
      name: "Category",
      options: state.product.categories
    },
    {
      id: "brand",
      name: "Brands",
      options: state.product.brands
    }
  ]}
) ;


export default productSlice.reducer;
