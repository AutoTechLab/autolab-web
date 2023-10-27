import axios from 'axios';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import AuthAPI from '@/lib/api/auth/AuthAPI';
import type { LoginBody } from '@/lib/api/auth/types/LoginBody';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    newUser: '/profile',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      id: 'login',
      name: 'login',
      credentials: {
        username: { label: 'Username', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const loginData: LoginBody = {
          username: credentials!.username!,
          password: credentials!.password!,
        };

        try {
          return await AuthAPI.login(loginData);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return error.response?.data;
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = user.accessToken;
      return token;
    },

    async session({ token, session }) {
      if (token.accessToken) {
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
