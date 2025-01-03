export interface UserProps {
  id: string
  name: string
  password: string
  role: string
  email: string
  createdAt: string
  deletedAt: string
  updatedAt: string
}

export interface SessionsProps {
  email: string
  password: string
}

export interface CustomError {
  response: {
    data: {
      message: string
    }
  }
}

export interface CompatibleFilmsProps {
  id: string
  model: string
  mark: string
  createdAt: string
  deletedAt: string
  updatedAt: string
}

export interface FilmsProps {
  id: string
  model: string
  mark: string
  createdAt: string
  deletedAt: string
  updatedAt: string

  compatibleFilms: CompatibleFilmsProps[]
}