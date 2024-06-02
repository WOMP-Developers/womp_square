'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from './Button'

export default function LogoutButton() {
  function handleLogout() {
    signOut()
  }

  return (
    <Button
      onMouseDown={handleLogout}
      variant='link'
      className={cn(
        'flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground text-lg font-medium hover:no-underline'
      )}
    >
      <div
        className={cn('rounded-lg flex h-9 w-9 items-center justify-center ')}
      >
        <LogOut />
      </div>
      Logout
    </Button>
  )
}
