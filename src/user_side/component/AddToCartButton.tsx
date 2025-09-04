// AddToCartButton.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/user/cart/CartThunk";
import type { AppDispatch } from "../../redux/store";

interface AddToCartButtonProps {
  productId: number; // Required product ID
  quantity?: number; // Optional quantity, defaults to 1
  onClick?: () => void; // optional click handler
  className?: string;   // optional extra styles
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  productId, 
  quantity = 1, 
  onClick, 
  className 
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = async () => {
    try {
      await dispatch(addToCart({ productId, quantity })).unwrap();
      if (onClick) onClick();
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  return (
    <div className={`p-4 pt-0 ${className || ""}`}>
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full border border-gray-400 bg-transparent text-black dark:text-white py-2 rounded-md hover:bg-green-100 dark:hover:bg-green-900 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;


