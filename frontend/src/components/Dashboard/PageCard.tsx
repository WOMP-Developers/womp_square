import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'

import { PageCardDetails } from '@/types/ui'

export default function PageCard({
  details,
  children,
}: {
  details: PageCardDetails
  children: React.ReactNode
}) {
  return (
    <Card x-chunk='dashboard-06-chunk-0'>
      <CardHeader>
        <CardTitle className='flex items-center gap-1'>
          {details.title}
        </CardTitle>
        {details.titleDescription && (
          <CardDescription>{details.titleDescription}</CardDescription>
        )}
      </CardHeader>
      <CardContent className='flex flex-wrap justify-center sm:justify-start gap-4'>
        {children}
      </CardContent>
      {details.footer && <CardFooter>{details.footer}</CardFooter>}
    </Card>
  )
}
