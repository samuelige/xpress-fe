import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import MuiTheme from '@/_lib/MuiTheme';
import AuthNavbar from '@/container/AuthNavbar';
import ContextProvider from '@/_lib/Context/ContextProvider';
import MainLayout from '@/container/MainLayout';

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
        <ContextProvider>
          <MuiTheme>
            <MainLayout>
              {children}
            </MainLayout>
          </MuiTheme>
        </ContextProvider>
        <div id="portal-root"></div>
        
      </body>
    </html>
  )
}
