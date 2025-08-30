import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  getProductById,
} from "../../../redux/Admin/AdminThunk/ProductThunk";
import { clearError } from "../../../redux/Admin/AdminSlice/ProductSlice";
import type { RootState, AppDispatch } from "../../../redux/store";

const ListProduct: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  ) as any;

  useEffect(() => {
    dispatch(fetchProducts());

    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleDetailView = async (productId: number) => {
    try {
      // First dispatch getProductById to fetch the product data
      await dispatch(getProductById(productId)).unwrap();
      // Then navigate to the detail page
      navigate(`/product-detail/${productId}`);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Product List ({products.length} products)
          </h1>

          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={product.productImage}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-blue-600">
                      Rs.{product.price}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        product.status === "available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">
                      Stock: {product.stock}
                    </span>
                    <br />
                    <span className="text-sm text-gray-500 capitalize">
                      Category: {product.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDetailView(product.id)}
                      className="w-full px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Detail View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
