import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import MuiTheme from '@/_lib/MuiTheme';
import AuthNavbar from '@/container/AuthNavbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to Xpress Rewards',
  description: 'Welcome to Xpress Rewards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiTheme>
          <AuthNavbar/>
          {children}
        </MuiTheme>
      </body>
    </html>
  )
}
