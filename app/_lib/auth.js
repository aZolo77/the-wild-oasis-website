import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { createGuest, getGuest } from "@/app/_lib/data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // Check if the user is allowed to sign in
      /* params:
      @auth: The current session object
      @request: The incoming request object
      */
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      // Adding a new user to the database
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name,
          });
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    async session({ session, user }) {
      // Adding the guest ID to the session user object
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
