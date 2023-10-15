import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from 'next'
import { parseCookies, destroyCookie } from 'nookies'
import { AuthTokenErro } from '@/services/errors/authTokenErro'

export function canSSRAuth<P>(fn: GetServerSideProps<P>) {

    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx)
        const token = cookies['@nextauth.token']

        if (!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }

        try {
            return await fn(ctx)
        } catch (error) {
            if (error instanceof AuthTokenErro) {
                destroyCookie(ctx, '@nextauth.token')

                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }

        return await fn(ctx)
    }

}