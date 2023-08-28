import Navbar from '@/components/public/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/public/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emate',
  description: 'Find your mate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
