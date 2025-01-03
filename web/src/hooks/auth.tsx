/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { CustomError, SessionsProps, UserProps } from '../types/interface'
import { toast } from 'sonner'

interface AuthContextData {
  signIn: ({ email, password }: SessionsProps) => Promise<void>
  signOut: () => void
  user: UserProps
}

interface UserData {
  user: UserProps
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState<UserData>({} as UserData)


  async function signIn({ email, password }: SessionsProps) {
    try {
      const response = await api.post(
        '/sessions',
        { email, password },
      )
      const { user } = response.data
      localStorage.setItem('@app-tell-me-the-model:user', JSON.stringify(user))

      setData({ user })
      toast.success('Login realizado com sucesso!')
    } catch (error) {
      if (error) {
        const err = error as CustomError
        if (err.response) {
          toast.error(JSON.stringify(err.response.data.message))
        } else {
          toast.error('Erro inesperado. Tente novamente mais tarde!')
        }
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@app-tell-me-the-model:user')

    setData({} as UserData)
  }

  useEffect(() => {
    const user = localStorage.getItem('@app-tell-me-the-model:user')

    if (user) {
      setData({ user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}