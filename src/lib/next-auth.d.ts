import NextAuth, { User } from 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken: string;
  }

  interface Session {
    user: User;
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
  }
}
