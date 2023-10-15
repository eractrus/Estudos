import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from "next/router";
import { api } from '@/services/apiClient'
import { toast } from 'react-toastify'

//tipagem do contexto
type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    signIn: (credentials: SignInProps) => Promise<void>;
    SignOut: () => void
    SignUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

//Tipagem de login
type SignInProps = {
    email: string;
    password: string;
}

//Tipagem de cadastro
type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)


//Função para deslogar usuário do sitema
export function SignOut() {
    try {

        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')

    } catch {
        toast.error('Erro ao deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    useEffect(() => {
        const { '@nextauth.token': token } = parseCookies()

        if (token) {
            api.get('/detail')
                .then(response => {

                    const { id, name, email } = response.data
                    setUser({ id, name, email })
                    
                }).catch(() => {
                    SignOut()
                })

        }
    }, [])

    //Função para fazer login no sistema
    async function signIn({ email, password }: SignInProps) {

        try {
            const response = await api.post('/session', { email, password })

            const { id, name, token } = response.data

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, // vencimento do token - 30 DIAS
                path: '/' // rotas que teram acesso ao token - TODAS
            })


            //Atualizando os dados do USER
            setUser({
                id, name, email
            })

            //Passar o token para todas as rotas
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            //Redirecionar para o Dashboard
            Router.push('/dashboard')

        } catch (error) {
            toast.error('Erro ao iniciar seção', error)
        }
    }

    //função de criar uma nova conta
    async function SignUp({ name, email, password }: SignUpProps) {

        try {
            const response = await api.post('/users', { name, email, password })

            toast.success('Cadastrado com sucaesso ')
            Router.push('/')

        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, SignOut, SignUp }}>
            {children}
        </AuthContext.Provider>
    )
}