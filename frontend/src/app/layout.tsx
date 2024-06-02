import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SessionProvider, ThemeProvider } from '@/providers'
import nextConfig from '@/lib/config'

import './globals.css'
import { getAuthSession } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: nextConfig.WEBSITE_TITLE,
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAuthSession()

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider attribute='class' defaultTheme='dark'>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
