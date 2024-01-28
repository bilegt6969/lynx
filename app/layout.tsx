import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar'
import Carousel from './Home/Carousel'
import UnderNavbar from './underNavbar'
import Footer from './Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lynx',
  description: 'Lynx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='lg:mx-[2.5rem] mx-[0.5rem]'>
        {children}
        </div>
        <Footer/>

        </body>
    </html>
  )
}
