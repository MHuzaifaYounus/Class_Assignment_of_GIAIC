import type { Metadata } from 'next'
import { Inter , Roboto} from 'next/font/google'
import './globals.css'
import {} from "next/font/google"

const roboto = Roboto({subsets: ['latin'],weight:["400"]}) 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ddsgnr Figma Design',
  description: 'Made By Huzaifa Younus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>{children}</body>
    </html>
  )
}
