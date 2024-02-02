import { Inter } from 'next/font/google'
import Head from 'next/head';
import './globals.css'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali Akbor',
  description: 'This is my personal portfolio website',
}

const RootLayout = ({ children }) =>{
  return (
    <>
    <html lang="en">
    <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <body>
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
    </>
    
  )
}
export default RootLayout;