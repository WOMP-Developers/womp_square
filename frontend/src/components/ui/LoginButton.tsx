'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/Button'

import EveOnlineIcon from '@/assets/EveOnlineIcon'

export default function LoginButton({ ...props }) {
  function handleLogin() {
    signIn('eveonline')
  }

  return (
    <Button onMouseDown={handleLogin} className='w-full' {...props}>
      <EveOnlineIcon />
      <span className='ml-2'>Log in with Eve Online</span>
    </Button>
  )
}
