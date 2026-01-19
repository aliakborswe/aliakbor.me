import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/common/header/Header'
import Footer from '@/components/common/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali Akbor',
  description: 'This is my personal portfolio website',
}

const RootLayout = ({ children }) =>{
  return (
    <>
      <html lang='en'>
        <head>
          <link rel='icon' href='/file/favicon.svg' sizes='any' />
        </head>
        <body suppressHydrationWarning={true} >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
export default RootLayout;