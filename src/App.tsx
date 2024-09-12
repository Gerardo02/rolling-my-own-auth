import { useMutation } from 'react-query'
import './App.css'

function App() {

  const mutation = useMutation(loginOAuth, {
    onSuccess: () => {
      console.log('succesful redirect to google')
    },
    onError: (error) => {
      console.error("tenemos un error", error)
    }
  })

  const handleClick = () => {
    mutation.mutate()
  }

  return (
    <div className='flex flex-col gap-4'>
      <button className='w-96' onClick={handleClick} disabled={mutation.isLoading}>Login with google</button>
      <button className='w-96' onClick={handleClick} disabled={mutation.isLoading}>Login with microsoft</button>
    </div>
  )
}

export default App

const loginOAuth = async () => {
  window.location.href = 'http://localhost:8080/api/v1/auth/google'
}
