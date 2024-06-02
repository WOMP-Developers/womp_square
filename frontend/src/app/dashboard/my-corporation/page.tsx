import type { Metadata } from 'next'

import nextConfig from '@/lib/config'

import PageCard from '@/components/Dashboard/PageCard'

export const metadata: Metadata = {
  title: 'My Corporation - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default function MyCorporationPage() {
  return (
    <PageCard
      details={{
        title: 'My Corporation',
        titleDescription: 'Card Title desciription placeholder',
        footer: 'Card Footer placeholder',
      }}
    >
      Card content placeholder
    </PageCard>
  )
}
