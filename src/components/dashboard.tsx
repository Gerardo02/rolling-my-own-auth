import { Link } from "react-router-dom"
import { useAuthStore } from "../ctx/authStore"

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) return <div><span>no estas autenticado</span><br /><Link to={'/'}>Regresar</Link></div>
  return (
    <div>
      <p>Bienvenido {user?.name}</p>
      <p>Entraste al dashboard autenticado</p>
    </div>
  )
}

export default Dashboard
