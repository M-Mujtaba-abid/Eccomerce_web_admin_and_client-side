// pages/Success.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCheckoutSession } from "../redux/payment/PaymentThunk";
import type { RootState } from "../redux/store";

const Success: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { id } = useParams(); // URL: /success/:id

  const { session, loading, error } = useSelector(
    (state: RootState) => state.payment
  );

  useEffect(() => {
    if (id) {
      dispatch(getCheckoutSession(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading payment details...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!session) return <p>No session found.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">🎉 Payment Successful!</h1>
      <p>Thank you, {session.customer_details?.name}</p>
      <p>Email: {session.customer_details?.email}</p>
      <p>
        Amount Paid: {session.amount_total / 100}{" "}
        {session.currency.toUpperCase()}
      </p>
    </div>
  );
};

export default Success;
