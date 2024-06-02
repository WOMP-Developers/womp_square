import type { Metadata } from 'next'

import PageTabs from '@/components/Dashboard/PageTabs'
import nextConfig from '@/lib/config'
import PageCard from '@/components/Dashboard/PageCard'

export const metadata: Metadata = {
  title: 'My Characters - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default async function MyCharactersPage() {
  const tabs = [
    {
      label: 'All characters',
      value: 'all-characters',
      show: true,
      content: (
        <PageCard
          details={{
            title: 'All Characters',
            titleDescription:
              'Manage your already authenticated Eve Online characters.',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facilis
          vel accusamus accusantium eveniet impedit eligendi iusto expedita
          repellat, reprehenderit recusandae libero, autem asperiores fugit
          magnam animi tenetur quia illum.
        </PageCard>
      ),
    },
    {
      label: 'Add character',
      value: 'add-character',
      show: true,
      content: (
        <PageCard
          details={{
            title: 'Add Character',
            titleDescription:
              "Authenticate one of your Eve Online characters and make its data available in the portal. Authenticating at least one character will grant you access to other features that rely on your character's data.",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          temporibus vitae itaque quod modi consequatur alias consequuntur enim
          sint. Hic, odit sint nulla at perspiciatis deserunt odio. Numquam,
          consectetur quae.
        </PageCard>
      ),
    },
  ]

  return <PageTabs tabs={tabs} />
}
