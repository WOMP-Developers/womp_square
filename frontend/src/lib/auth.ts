import NextAuth from 'next-auth/next'
import { NextAuthOptions, getServerSession } from 'next-auth'
import EVEOnlineProvider from 'next-auth/providers/eveonline'

import nextConfig from './config'

export const authOptions: NextAuthOptions = {
  providers: [
    EVEOnlineProvider({
      clientId: nextConfig.EVE_CLIENT_ID as string,
      clientSecret: nextConfig.EVE_CLIENT_SECRET as string,
    }),
  ],
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 12 * 30 * 24 * 60 * 60,
  //   updateAge: 24 * 60 * 60,
  // },
}

export const handler = NextAuth(authOptions)
export function getAuthSession() {
  return getServerSession(authOptions)
}

export { handler as GET, handler as POST }
