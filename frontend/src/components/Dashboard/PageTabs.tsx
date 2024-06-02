import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'

import { PageTabDetails } from '@/types/ui'

export default async function PageTabs({ tabs }: { tabs: PageTabDetails[] }) {
  return (
    <Tabs defaultValue={tabs.find(tab => tab.show === true)?.value}>
      <div className='flex items-center'>
        <TabsList>
          {tabs.map(({ label, value, show }) => {
            if (show === false) return

            return (
              <TabsTrigger value={value} key={value}>
                {label}
              </TabsTrigger>
            )
          })}
        </TabsList>
      </div>

      {tabs.map(({ value, show, content }) => {
        if (!show) return null

        return <TabsContent value={value}>{content}</TabsContent>
      })}
    </Tabs>
  )
}
