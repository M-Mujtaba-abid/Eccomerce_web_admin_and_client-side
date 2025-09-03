
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../../redux/Admin/AdminThunk/ProductThunk";
// import type { RootState, AppDispatch } from "../../redux/store";
// import { useParams, Link } from "react-router-dom";

// const Products = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { products, loading, error } = useSelector(
//     (state: RootState) => state.products
//   ) as any;

//   // route se category pick hogi (example: /web/men)
//   const { category } = useParams<{ category: string }>();

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   // filter products by category
//   const filteredProducts =
//     category && category !== "all"
//       ? products.filter(
//           (p: any) => p.category.toLowerCase() === category.toLowerCase()
//         )
//       : products;

//   return (
//     <div className="min-h-screen bg-gray-50 mt-[1] dark:bg-gray-900 py-8">
//       <div className="max-w-7xl p-10 mx-auto sm:px-6 lg:px-8 mt-10">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
//           {category ? `${category} Products` : "All Products"}
//         </h1>

//         {loading && <p className="text-gray-600">Loading...</p>}
//         {error && (
//           <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
//             {error}
//           </div>
//         )}

//         {/* ✅ Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product: any) => (
//             <Link
//               key={product.id}
//               to={`/web/product-detail/${product.id}`} // ✅ detail page route
//               className="group"
//             >
//               <div
//                 className="bg-white dark:bg-gray-800 border border-gray-200 
//                 dark:border-gray-700 rounded-lg shadow p-4 cursor-pointer 
//                 hover:shadow-lg transition-shadow duration-400"
//               >
//                 {/* Image */}
//                 <div className="overflow-hidden rounded-md mb-4">
//                   <img
//                     src={product.productImage}
//                     alt={product.title}
//                     className="w-full h-56 object-cover rounded-md 
//                     transform group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                   {product.title}
//                 </h2>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
//                   {product.description}
//                 </p>

//                 {/* Price */}
//                 <p className="font-semibold text-blue-600 dark:text-blue-400">
//                   Rs. {product.price}
//                 </p>

//                 {/* Category */}
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   Category: {product.category}
//                 </p>

//                 {/* New Fields Display */}
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {product.isFeatured && (
//                     <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
//                       ⭐ Featured
//                     </span>
//                   )}
//                   {product.isNewArrival && (
//                     <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
//                       🆕 New
//                     </span>
//                   )}
//                   {product.isOnSale && (
//                     <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
//                       🏷️ Sale
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Price Display */}
//                 {product.isOnSale && product.discountPrice && (
//                   <div className="mt-2">
//                     <span className="text-sm text-gray-500 line-through">
//                       Rs. {product.price}
//                     </span>
//                     <span className="text-sm font-bold text-red-600 ml-2">
//                       Rs. {product.discountPrice}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>

//         {!loading && filteredProducts.length === 0 && (
//           <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
//             No products found for {category}.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/Admin/AdminThunk/ProductThunk";
import type { RootState, AppDispatch } from "../../redux/store";
import { useParams, Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  ) as any;

  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts =
    category && category !== "all"
      ? products.filter(
          (p: any) => p.category.toLowerCase() === category.toLowerCase()
        )
      : products;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl p-4 sm:p-6 lg:p-8 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          {category ? `${category} Products` : "All Products"}
        </h1>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && (
          <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
            {error}
          </div>
        )}

        {/* ✅ Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: any) => (
            <Link
              key={product.id}
              to={`/web/product-detail/${product.id}`}
              className="group"
            >
              <div
                className="bg-white dark:bg-gray-800 border border-gray-200 
                dark:border-gray-700 rounded-lg shadow cursor-pointer 
                hover:shadow-lg transition duration-300 flex flex-col"
              >
                {/* 🔥 Image Full Card Top */}
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={product.productImage}
                    alt={product.title}
                    className="w-full h-72 sm:h-80 md:h-90 object-cover 
                    transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 🔥 Only Title + Price */}
                <div className="p-4 flex flex-col">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.title.slice(0,25)}
                  </h2>

                  <p className="font-semibold text-blue-600 dark:text-blue-400">
                    Rs. {product.price}
                  </p>
                </div>

                {/* ❌ Description */}
                {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                  {product.description}
                </p> */}

                {/* ❌ Category */}
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                  Category: {product.category}
                </p> */}

                {/* ❌ Tags */}
                {/* <div className="flex flex-wrap gap-2 mt-2">
                  {product.isFeatured && <span>⭐ Featured</span>}
                  {product.isNewArrival && <span>🆕 New</span>}
                  {product.isOnSale && <span>🏷️ Sale</span>}
                </div> */}

                {/* ❌ Discount */}
                {/* {product.isOnSale && product.discountPrice && (
                  <div className="mt-2">
                    <span className="text-sm text-gray-500 line-through">
                      Rs. {product.price}
                    </span>
                    <span className="text-sm font-bold text-red-600 ml-2">
                      Rs. {product.discountPrice}
                    </span>
                  </div>
                )} */}
              </div>
            </Link>
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
