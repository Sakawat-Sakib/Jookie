import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jookie - Laughing Made Easy!',
  description: 'Get your daily dose of laughter with our joke website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

