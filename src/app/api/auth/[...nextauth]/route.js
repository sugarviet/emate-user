
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

import { BASE_URL, LOGIN_GG_URL, LOGIN_URL } from '@/constants/url';
import jwtDecode from "jwt-decode";
import urlcat from "urlcat";
import { STATUS_CODE } from "@/constants/statusCode";


const PROVIDERS = {
  GOOGLE : "google",
}

let myAccessToken = ""

const handler = NextAuth({
pages:{
  signIn: "/signIn"
},
callbacks:{
    async redirect({url, baseUrl}){
        return baseUrl;
    },
    async signIn(data){
      console.log('data', data);
      // Trigger if user login with google
      if(data.account.provider === PROVIDERS.GOOGLE){
        try {
          const res = await fetch(urlcat(BASE_URL,LOGIN_GG_URL ), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: data?.user?.email,
              name: data?.user?.name,
              // isLoginWithGoogle: true
            }),
          });
          const user = await res.json();

          console.log('user', user);
          const decodeToken = jwtDecode(user?.metaData.accessToken);
          myAccessToken = {
            token:user?.metaData.accessToken,
            ...decodeToken
          };
        } catch (error) {
          
        }
        
      }
        return true;
    },
    async jwt({token, user, account}){
      console.log('jwt');
      const isSignIn = user ? true : false
      if (isSignIn) {
        token.username = user.username
        token.password = user.password
        token.picture = ""
      }
      return token
    },
    async session({session, user, token}){
      session.user = session.user;
      session.accessToken = myAccessToken;

      return session
    }
},

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {label: "email", type: 'text'},
        password: {label: "password", type: 'password' },
      },
      async authorize(credentials, req){

        const res = await fetch(urlcat(BASE_URL,LOGIN_URL ), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        console.log('res.json', user);
          const decodeToken = jwtDecode(user?.metaData.accessToken);

          console.log('decodeToken', decodeToken);

        if(user?.error?.code === STATUS_CODE.BAD_REQUEST){
          console.log('Loi ne');
          throw new Error(JSON.stringify({ error:user?.error?.message, status: false }))
        }
        else {
          console.log('Ok r do');
          myAccessToken = {
            token:user?.metaData.accessToken,
            ...decodeToken
          };
          
          return {
            name: decodeToken?.email,
            email: decodeToken?.email,
  
          };
        }
        
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "",
});

export { handler as GET, handler as POST };
