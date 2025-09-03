
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideCartModal } from "../../../redux/user/cart/CartSlice";
import type { RootState, AppDispatch } from "../../../redux/store";

const CartModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { showCartModal, lastAddedItem, cartItems } = useSelector(
    (state: RootState) => state.cart
  ) as any;

  if (!showCartModal || !lastAddedItem) return null;

  const handleClose = () => {
    dispatch(hideCartModal());
  };

  const handleViewCart = () => {
    dispatch(hideCartModal());
    navigate("/web/cart");
  };

  const handleCheckout = () => {
    dispatch(hideCartModal());
    navigate("/web/checkout");
  };

  const handleContinueShopping = () => {
    dispatch(hideCartModal());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl mr-2">✓</span>
            <span className="font-semibold">Item added to your cart</span>
          </div>
          <button
            onClick={handleClose}
            className="text-2xl hover:text-gray-600 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Product Info */}
        <div className="flex items-center mb-6">
          <img
            src={lastAddedItem.Product?.productImage}
            alt={lastAddedItem.Product?.title}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">
              {lastAddedItem.Product?.title}
            </h3>
            <p className="text-gray-600">
              Quantity: {lastAddedItem.quantity}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleViewCart}
            className="w-full border border-gray-300 bg-white text-black py-2 rounded hover:bg-gray-50 transition-colors"
          >
            View cart ({cartItems.length})
          </button>
          <button
            onClick={handleCheckout}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Check out
          </button>
          <button
            onClick={handleContinueShopping}
            className="w-full text-black underline hover:text-gray-600 transition-colors"
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
