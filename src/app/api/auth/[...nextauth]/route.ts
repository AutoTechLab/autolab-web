import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import AuthAPI from '@/lib/api/auth/AuthAPI';
import { RegisterBody } from '@/lib/api/auth/types/RegisterBody';
import StorageUtil from '@/lib/utils/storageUtil';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    newUser: '/register',
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      id: 'registration',
      name: 'registration',
      credentials: {
        username: { label: 'Username', type: 'text', required: true },
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
        firstname: { label: 'First name', type: 'text', required: true },
        lastname: { label: 'Last name', type: 'text', required: true },
        middlename: { label: 'Middle name', type: 'text', required: false },
        age: { label: 'Age', type: 'number', required: true },
      },
      async authorize(credentials) {
        const userObject: RegisterBody = {
          username: credentials!.username!,
          email: credentials!.email!,
          password: credentials!.password!,
          firstname: credentials!.firstname!,
          lastname: credentials!.lastname!,
          middlename: credentials!.middlename || '',
          age: +credentials!.age!,
        };

        try {
          const response = await AuthAPI.register(userObject);
          //StorageUtil.setToken(response.accessToken);
        } catch (error) {
          console.error('API request error', error);
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
