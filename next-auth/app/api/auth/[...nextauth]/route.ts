import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:"Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "Email"},
                password: { label: "password", type: "password", placeholder: "pass"}
            },
            async authorize(credentials: any) {
                return {
                    id: "user1"
                }
            }
        })
    ]
});

export const GET = handler;
export const POST = handler;