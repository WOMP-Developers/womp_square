'use client'

import { QueryClient, QueryClientProvider as QCP } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function QueryClientProvider({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <QCP {...props} client={queryClient}>
      {children}
    </QCP>
  )
}
