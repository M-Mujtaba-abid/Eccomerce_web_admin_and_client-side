import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/Admin/AdminThunk/ProductThunk";
import type { RootState, AppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  ) as any;

  // route se category pick hogi (example: /web/men)
  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // filter products by category
  const filteredProducts =
    category && category !== "all"
      ? products.filter(
          (p: any) => p.category.toLowerCase() === category.toLowerCase()
        )
      : products;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900  py-8">
      <div className="max-w-7xl mx-auto px- sm:px-6 lg:px-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          {category ? `${category} Products` : "All Products"}
        </h1>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && (
          <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: any) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4"
            >
              <img
                src={product.productImage}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">
                Rs. {product.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Category: {product.category}
              </p>
            </div>
          ))}
        </div>

        {!loading && filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
            No products found for {category}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
