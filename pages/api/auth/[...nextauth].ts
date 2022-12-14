import { PrismaAdapter } from '@next-auth/prisma-adapter'
import nextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import prisma from '../../../lib/prismaClient'

export const AuthOptions = {
	secret: process.env.NEXT_AUTH_SECRET,
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
}

export default nextAuth(AuthOptions)
