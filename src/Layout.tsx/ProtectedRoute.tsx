

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate, useLocation} from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "Admin";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  // const navigate=useNavigate()
  const { user, token } = useSelector((state: RootState) => state.user as any);
  const location = useLocation();

  // Login.jsx ke andar
// if (user?.userRole === "Admin") {
//   navigate("/admin");
// } else {
//   navigate("/web");
// }


  // Only protect Admin routes
  if (user?.userRole === "Admin") {
    if (!token || !user || user.userRole !== "Admin") {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
  }

  // If role is Admin and token exists & user is Admin, allow rendering
  return <>{children}</>;
};

export default ProtectedRoute;
