import { ReactNode } from 'react'

export type NavigationLinks = {
  href: string
  label: string
  icon: React.ReactNode
  show?: boolean
  disabled?: boolean
}

export type PageCardDetails = {
  title: string
  titleDescription?: string | React.ReactNode | React.ReactNode[]
  footer?: string | React.ReactNode | React.ReactNode[]
}

export type PageTabDetails = {
  label: string
  value: string
  show: boolean
  disabled?: boolean
  content: string | React.ReactNode | React.ReactNode[]
}
