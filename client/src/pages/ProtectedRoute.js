import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

import Loading from "../components/Loading.js";
import { Flex } from "@chakra-ui/react";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();
  if (userLoading) return <Loading />;
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
