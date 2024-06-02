import { loadEnvConfig } from '@next/env'

const projectDirectory = process.cwd()

loadEnvConfig(projectDirectory)

const nextConfig = {
  WEBSITE_TITLE: process.env.WEBSITE_TITLE!,
  EVE_CLIENT_ID: process.env.EVE_CLIENT_ID!,
  EVE_CLIENT_SECRET: process.env.EVE_CLIENT_SECRET!,
}

export default nextConfig
