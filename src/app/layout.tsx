import './globals.css'
import type { Metadata } from 'next'
import { Urbanist} from 'next/font/google'
import Header from "@/app/core/layout/header/header";

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
