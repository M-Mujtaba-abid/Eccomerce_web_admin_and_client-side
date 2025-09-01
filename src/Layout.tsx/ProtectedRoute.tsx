

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "Admin" | "User";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { user, token } = useSelector((state: RootState) => state.user as any);
  const location = useLocation();

  // 1) If no token and no user -> must login
  if (!token && !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // 2) If role required and user exists but role mismatch -> redirect to correct section
  if (role && user && user.userRole && user.userRole !== role) {
    return user.userRole === "Admin" ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/web" replace />
    );
  }

  // 3) If token exists but user is not yet loaded, allow rendering so app can hydrate user
  return <>{children}</>;
};

export default ProtectedRoute;
