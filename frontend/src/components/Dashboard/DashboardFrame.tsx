import { Building2, Home, Star, UsersRound, Settings } from 'lucide-react'

import AccountDropdownMenu from '@/components/Dashboard/AccountDropdownMenu'
import DashboardSideNavigation from '@/components/Dashboard/DashboardSideNavigation'
import DashboardMobileNavigation from '@/components/Dashboard/DashboardMobileNavigation'
import AccountMobileMenu from '@/components/Dashboard/AccountMobileMenu'

import { NavigationLinks } from '@/types/ui'

const LINKS: NavigationLinks[] = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: <Home className='h-5 w-5' />,
  },
  {
    href: '/dashboard/my-characters',
    label: 'My Characters',
    icon: <UsersRound className='h-5 w-5 ' />,
  },
  {
    href: '/dashboard/my-corporation',
    label: 'My Corporation',
    icon: <Building2 className='h-5 w-5' />,
  },
  {
    href: '/dashboard/my-alliance',
    label: 'My Alliance',
    icon: <Star className='h-5 w-5' />,
  },
]

const ACCOUNT_LINKS = [
  {
    href: '/dashboard/settings',
    label: 'Settings',
    icon: <Settings className='h-5 w-5' />,
  },
]

export default function DashboardFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
        <DashboardSideNavigation links={LINKS} />
      </aside>
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
          <div className='w-full flex justify-between'>
            <div className='hidden w-full sm:flex justify-end'>
              <AccountDropdownMenu links={ACCOUNT_LINKS} />
            </div>

            <div className='w-full flex sm:hidden justify-between'>
              <DashboardMobileNavigation links={LINKS} />
              <AccountMobileMenu links={ACCOUNT_LINKS} />
            </div>
          </div>
        </header>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          {children}
        </main>
      </div>
    </div>
  )
}
