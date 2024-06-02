import type { Metadata } from 'next'

import nextConfig from '@/lib/config'

import PageCard from '@/components/Dashboard/PageCard'

export const metadata: Metadata = {
  title: 'Settings - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default function SettingsPage() {
  return (
    <PageCard
      details={{
        title: 'Settings',
        titleDescription: 'Card Title desciription placeholder',
        footer: 'Card Footer placeholder',
      }}
    >
      Card content placeholder
    </PageCard>
  )
}
