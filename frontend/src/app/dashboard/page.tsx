import type { Metadata } from 'next'

import nextConfig from '@/lib/config'

import PageCard from '@/components/Dashboard/PageCard'

export const metadata: Metadata = {
  title: 'Dashboard - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default function DashboardPage() {
  return (
    <PageCard
      details={{
        title: 'Dashboard',
        titleDescription: 'Card Title desciription placeholder',
        footer: 'Card Footer placeholder',
      }}
    >
      Card content placeholder
    </PageCard>
  )
}
