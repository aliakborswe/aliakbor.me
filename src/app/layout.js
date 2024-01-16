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
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
export default RootLayout;