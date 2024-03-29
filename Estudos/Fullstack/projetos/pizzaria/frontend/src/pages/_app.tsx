import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'

import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer position='top-center' autoClose={3000} theme='dark' />
    </AuthProvider>
  )
}
