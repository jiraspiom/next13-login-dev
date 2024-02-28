import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({}),
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@email.com',
        },
        password: { label: 'Password', type: 'password', placeholder: '*****' },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          name: 'Nome usuario',
          email: 'email@email.com',
          password: '123123',
        }

        if (
          user &&
          user?.email === credentials?.email &&
          user?.password === credentials?.password
        ) {
          return user
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 60 * 60 * 1, // 1 hora
  },
}
