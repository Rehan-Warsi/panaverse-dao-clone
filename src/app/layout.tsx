import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Layouts/Header'
import Footer from '@/Components/Layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Panaverse Dao Clone by Rehan Warsi',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {<Header />}
        {children}
        {<Footer/>}
      </body>
    </html>
  )
}
