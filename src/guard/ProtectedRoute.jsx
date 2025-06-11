import { Navigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <p>Loading...</p>
  return isAuthenticated ? children : <Navigate to="/login" />
}
