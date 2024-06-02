'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip'
import { NavigationLinks } from '@/types/ui'

export default function DashboardSideNavigation({
  links,
}: {
  links: NavigationLinks[]
}) {
  const pathname: string = usePathname()

  return (
    <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
      <TooltipProvider>
        {links.map(({ href, label, icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                  pathname === href ? 'bg-accent' : ''
                )}
              >
                {icon}
                <span className='sr-only'>{label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{label}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  )
}
