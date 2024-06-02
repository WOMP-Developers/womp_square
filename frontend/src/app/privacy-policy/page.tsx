import Image from 'next/image'

import nextConfig from '@/lib/config'

import PrivacyPolicyContent from '@/components/PrivacyPolicyPage/PrivacyPolicyContent'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - ' + nextConfig.WEBSITE_TITLE,
  description: '',
}

export default async function PrivacyPolicyPage() {
  return (
    <div className='h-screen py-12'>
      <PrivacyPolicyContent />
    </div>
  )
}
