import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/Button'
import LogoutButton from '@/components/ui/LogoutButton'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'

import { NavigationLinks } from '@/types/ui'

export default async function AccountMobileMenu({
  links,
}: {
  links: NavigationLinks[]
}) {
  const session = await getServerSession()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='flex sm:hidden'>
          <Image
            src={session?.user.image}
            width={36}
            height={36}
            alt='Avatar'
            className='overflow-hidden rounded-full'
          />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className='sm:max-w-xs'>
        <nav className='grid gap-6 text-lg font-medium pt-6 pb-6'>
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
                  'rounded-lg flex h-9 w-9 items-center justify-center '
                )}
              >
                {icon}
              </div>
              {label}
            </Link>
          ))}
        </nav>
        <LogoutButton />
      </SheetContent>

      {/* <SheetContent side='right' className='sm:max-w-xs'>
        <nav className='grid gap-6 text-lg font-medium py-8'>
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
                  'rounded-lg flex h-9 w-9 items-center justify-center '
                )}
              >
                {icon}
              </div>
              {label}
            </Link>
          ))}
          <LogoutButton />
        </nav>
      </SheetContent> */}
    </Sheet>
  )
}
