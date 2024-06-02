import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import LoginForm from '@/components/Homepage/LoginForm'
import { Button } from '@/components/ui/Button'

export default async function HomePage() {
  const session: any = await getServerSession()

  if (session || session?.user) {
    redirect('/dashboard')
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center m-auto w-[350px]'>
        <LoginForm />
        <div className='w-full flex justify-evenly mt-2'>
          <Link href='/privacy-policy'>
            <Button variant='link'>Privacy Policy</Button>
          </Link>
          <Link href='/terms-of-service'>
            <Button variant='link'>Terms of Service</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
