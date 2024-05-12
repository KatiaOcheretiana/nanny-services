import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "./redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const currentUser = useSelector(selectCurrentUser);

  return !currentUser ? <Navigate to={redirectTo} /> : Component;
};
