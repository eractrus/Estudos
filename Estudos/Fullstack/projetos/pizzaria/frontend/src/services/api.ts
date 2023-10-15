import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { AuthTokenErro } from './errors/authTokenErro'

import { SignOut } from '@/contexts/AuthContext'

export function setupApiClient(ctx = undefined) {
    let cookies = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response
    }, () => (error: AxiosError) => {
        if (error.response.status === 4001) {
            //Deslogar usuário
            if (typeof window !== undefined) {
                //função para deslogar usuário
                SignOut()
            } else {
                return Promise.reject(new AuthTokenErro)
            }
        }
        return Promise.reject(error)
    })

    return api
}