import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Inter } from 'next/font/google'

import nextConfig from '@/lib/config'
import { getAuthSession } from '@/lib/auth'
import { QueryClientProvider } from '@/providers'

import DashboardFrame from '@/components/Dashboard/DashboardFrame'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAuthSession()

  if (!session || !session.user) {
    redirect('/')
  }

  return (
    <QueryClientProvider>
      <DashboardFrame>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          {children}
        </main>
      </DashboardFrame>
    </QueryClientProvider>
  )
}
