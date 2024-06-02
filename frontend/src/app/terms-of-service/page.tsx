import type { Metadata } from 'next'

import nextConfig from '@/lib/config'

import TermsOfServiceContent from '@/components/TermsOfServicePage/TermsOfServiceContent'

export const metadata: Metadata = {
  title: 'Terms of Service - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default async function TermsOfServicePage() {
  return (
    <div className='h-screen py-12 overflow-y-scroll'>
      <TermsOfServiceContent />
    </div>
  )
}
