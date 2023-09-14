import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
callbacks:{
    async redirect({url, baseUrl}){
        return baseUrl;
    },
    async signIn(data){
       
        return true;
    },

},

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };
