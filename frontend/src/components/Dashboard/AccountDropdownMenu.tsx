import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import LogoutMenuButton from '@/components/ui/LogoutMenuButton'

import { NavigationLinks } from '@/types/ui'

export default async function AccountDropdownMenu({
  links,
}: {
  links: NavigationLinks[]
}) {
  const session = await getServerSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='hidden sm:flex relative' asChild>
        <Button
          variant='outline'
          size='icon'
          className='overflow-hidden rounded-full'
        >
          <Avatar>
            <AvatarImage src={session?.user.image} />
            <AvatarFallback>
              {session?.user.name?.slice(0, 2).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>{session?.user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map(({ href, label, icon }) => (
          <DropdownMenuItem asChild>
            <Link
              key={label}
              href={href}
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground cursor-pointer'
            >
              <div className='flex h-4 w-4 items-center justify-center '>
                {icon}
              </div>
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <LogoutMenuButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
