import { useQuery } from "react-query"
import { useAuthStore, User } from "./ctx/authStore"

interface AuthProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const { setUser, clearUser } = useAuthStore()

  useQuery<User, Error>(["whoami"], fetchUser, {
    onSuccess: (data) => {
      setUser(data)
    },
    onError: (err) => {
      console.log(err)
      clearUser()
    }
  })



  return children
}

export default AuthProvider

const fetchUser = async () => {
  const response = await fetch(`http://localhost:8080/api/v1/auth/whoami`, {
    credentials: 'include'
  })

  if (!response.ok) {
    console.log(response)
    throw new Error("No pudimos regresarte compa")
  }

  return response.json()
}
