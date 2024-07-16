import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    // secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        // rolling: false,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) {
                    
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",

    },
    callbacks: {
    },
});

export { handler as GET, handler as POST };