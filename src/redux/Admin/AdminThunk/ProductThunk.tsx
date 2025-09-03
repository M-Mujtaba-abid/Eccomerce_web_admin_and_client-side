import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../apiInstance';
import type {  ProductData } from '../typesAdminComponent/productTypes';

// Create product thunk
export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (productData: ProductData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('title', productData.title);
      formData.append('description', productData.description);
      formData.append('status', productData.status);
      formData.append('price', productData.price.toString());
      formData.append('stock', productData.stock.toString());
      formData.append('category', productData.category);
      formData.append('Quantity', productData.Quantity);
      formData.append('isFeatured', productData.isFeatured.toString());
      formData.append('isNewArrival', productData.isNewArrival.toString());
      formData.append('isOnSale', productData.isOnSale.toString());
      if (productData.discountPrice !== undefined) {
        formData.append('discountPrice', productData.discountPrice.toString());
      }
      formData.append('productImage', productData.productImage);

      const response = await API.post('/product/postproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create product');
    }
  }
);

// Fetch all products thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/product/getallproduct');
      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
    }
  }
);

// Get product by ID thunk for detail page
export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (productId: number, { rejectWithValue }) => {
    try {
      console.log('Fetching product with ID:', productId);
      const response = await API.get(`/product/getsingleproduct/${productId}`);
      console.log('Get product response:', response);
      return response.data.data || response.data;
    } catch (error: any) {
      console.error('Get product error:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch product');
    }
  }
);

// Update product thunk
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, ...updateData }: { id: number } & Partial<ProductData>, { rejectWithValue }) => {
    try {
      console.log('Updating product with ID:', id);
      console.log('Update data:', updateData);
      
      const formData = new FormData();
      
      // Add all the update data to FormData
      Object.entries(updateData).forEach(([key, value]) => {
        if (value !== undefined) {
          if (key === 'productImage' && value instanceof File) {
            formData.append(key, value);
            console.log('Added image to FormData:', key, value.name);
          } else {
            formData.append(key, value.toString());
            console.log('Added field to FormData:', key, value);
          }
        }
      });

      const url = `/product/updateproduct/${id}`;
      console.log('Making PATCH request to:', url);

      const response = await API.patch(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Update response:', response);
      return response.data.data || response.data;
    } catch (error: any) {
      console.error('Update product error:', error);
      console.error('Error response:', error.response);
      return rejectWithValue(
        error.response?.data?.message || 
        error.message || 
        'Failed to update product'
      );
    }
  }
);

// Delete product thunk
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId: number, { rejectWithValue }) => {
    try {
      await API.delete(`/product/deleteproduct/${productId}`);
      return productId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete product');
    }
  }
);

// Get total number of products thunk
export const getTotalProductsCount = createAsyncThunk(
  'products/getTotalProductsCount',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/product/getNumberOfTotalproduct');
      return response.data.data.totalProducts;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch total products count');
    }
  }
);

// Featured/New/OnSale thunks (URLs per user spec)
export const fetchFeaturedProducts = createAsyncThunk(
  'products/fetchFeaturedProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/product/getfeaturedproducts', { params: { getonsaleproducts: 'true' } });
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch featured products');
    }
  }
);

export const fetchNewArrivals = createAsyncThunk(
  'products/fetchNewArrivals',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/product/getnewarrivals', { params: { isNewArrival: 'true' } });
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch new arrivals');
    }
  }
);

export const fetchOnSaleProducts = createAsyncThunk(
  'products/fetchOnSaleProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/product/getonsaleproducts', { params: { isfeatured: 'true' } });
      return response.data.data || response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch on sale products');
    }
  }
);




