import Image from 'next/image'

import nextConfig from '@/lib/config'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import LoginButton from '@/components/ui/LoginButton'

export default function LoginForm() {
  return (
    <Card className='max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl flex'>Login</CardTitle>
        <CardDescription>
          Use your Eve Online account to log into the {nextConfig.WEBSITE_TITLE}{' '}
          dashboard.
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <LoginButton />
      </CardFooter>
    </Card>
  )
}
