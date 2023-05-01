import userDB from "@/server/models/user.db";
import { connectToDb, executeSqlQuery } from "@/server/services/db.service";
import NextAuth, { NextAuthOptions } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

const authOptions = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials
                const data = await executeSqlQuery(userDB.loginUser(email))
                const user = data[0];

                console.log(data);
                if (!user) throw new Error('Неверный email')

                const passwordMatches = await bcrypt.compare(password, user.password)

                if (!passwordMatches) throw new Error('Неверный пароль');

                return {
                    name: user.name + ' ' + user.surname,
                    email: user.email,
                };
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
            if (params.user?.role) {
                params.token.role = params.user.role;
            }
            return params.token;
        },
    },
})

export default authOptions

// const saltRounds = 10; // количество раундов для генерации соли
// async function hashPassword(password) {
//     const salt = await bcrypt.genSalt(saltRounds); // генерируем соль
//     const hash = await bcrypt.hash(password, salt); // шифруем пароль с помощью соли
//     return hash;
// }
// // Пример использования
// const plainPassword = 'admin';
// // Шифруем пароль
// const hashedPassword = await hashPassword(plainPassword);
// console.log(`hashedPassword: |${hashedPassword}|`); // Выводим зашифрованный пароль