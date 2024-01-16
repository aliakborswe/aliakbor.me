import { Inter } from 'next/font/google'
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
    <html lang="en">
      <body className={`inter.className bg-gradient-to-r from-indigo-900 from-10% via-sky-700 via-50% to-emerald-700 to-90%`}>
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
export default RootLayout;