import NextAuth, {NextAuthOptions} from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            authorize(credentials, req) {
                const {email, password} = credentials
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (email !== 'qwe') {
                    throw new Error('Неверный email')
                } else if(password !== '123'){
                    throw new Error('Неверный пароль')
                }        
                return user
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
        // error: '/auth/error',
        // signOut: '/auth/signout'
    },
    callbacks: {
        jwt(params) {
            // update token
            if (params.user?.role) {
                params.token.role = params.user.role;
            }
            // return final_token
            return params.token;
        },
    },
})

export default authOptions