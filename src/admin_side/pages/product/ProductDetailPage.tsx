import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../../redux/Admin/AdminThunk/ProductThunk';
import { clearError, clearCurrentProduct } from '../../../redux/Admin/AdminSlice/ProductSlice';
import type { RootState, AppDispatch } from '../../../redux/store';

const ProductDetailPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { loading, error, currentProduct } = useSelector((state: RootState) => state.products) as any;

  useEffect(() => {
    if (productId) {
      dispatch(getProductById(parseInt(productId)));
    }

    return () => {
      dispatch(clearError());
      dispatch(clearCurrentProduct());
    };
  }, [dispatch, productId]);

  const handleDelete = async () => {
    if (!currentProduct) return;
    
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await dispatch(deleteProduct(currentProduct.id)).unwrap();
        navigate('/products');
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  const handleEdit = () => {
    if (!currentProduct) return;
    navigate(`/product/${currentProduct.id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
              <button
                onClick={() => navigate('/products')}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back to Products
              </button>
            </div>
          </div>

          {/* Product Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                  <img
                    src={currentProduct.productImage}
                    alt={currentProduct.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentProduct.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {currentProduct.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Price */}
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-lg font-semibold text-gray-700">Price:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      Rs. {currentProduct.price}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold text-gray-700">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentProduct.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {currentProduct.status}
                    </span>
                  </div>

                  {/* Stock */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold text-gray-700">Stock:</span>
                    <span className="text-lg font-medium text-gray-800">
                      {currentProduct.stock} units
                    </span>
                  </div>

                  {/* Category */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg font-semibold text-gray-700">Category:</span>
                    <span className="text-lg font-medium text-gray-800 capitalize">
                      {currentProduct.category}
                    </span>
                  </div>

                  {/* Created Date */}
                  {currentProduct.createdAt && (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-lg font-semibold text-gray-700">Created:</span>
                      <span className="text-lg font-medium text-gray-800">
                        {new Date(currentProduct.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    onClick={handleEdit}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                  >
                    Edit Product
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
