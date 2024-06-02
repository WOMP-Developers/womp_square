'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PanelLeft } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/Button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'

import { NavigationLinks } from 'ui-types'

export default function DashboardMobileNavigation({
  links,
}: {
  links: NavigationLinks
}) {
  const pathname: string = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='flex sm:hidden'>
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='sm:max-w-xs'>
        <nav className='grid gap-6 text-lg font-medium py-6'>
          {links.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
              )}
            >
              <div
                className={cn(
                  'rounded-lg flex h-9 w-9 items-center justify-center ',
                  pathname === href ? 'bg-accent' : ''
                )}
              >
                {icon}
              </div>
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
