'use client'

import { signOut } from 'next-auth/react'

import { DropdownMenuItem } from '@/components/ui/DropdownMenu'
import { LogOut } from 'lucide-react'

export default function LogoutMenuButton() {
  function handleLogout() {
    signOut()
  }

  return (
    <DropdownMenuItem
      className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground cursor-pointer'
      onMouseDown={handleLogout}
    >
      <div className='flex h-4 w-4 items-center justify-center '>
        <LogOut className='h-4 w-4' />
      </div>
      Logout
    </DropdownMenuItem>
  )
}
