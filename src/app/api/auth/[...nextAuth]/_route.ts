import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    newUser: '/register',
    signIn: '/login',
  },
  providers: [EmailProvider({})],
});
