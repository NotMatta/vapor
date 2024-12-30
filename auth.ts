import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import prisma from "./prisma/prisma-client"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            username: {},
            email: {},
            password: {},
            action: {}
        },
        authorize: async (credentials) => { //I should make an adapter for credentials to return strings instead of unknown
            try {
                if (credentials.action === "signUp") {
                    console.log("signing up")
                    const salt = await bcrypt.genSalt(10)
                    const hashedPassword = await bcrypt.hash(String(credentials.password), salt)
                    const newUser = await prisma.user.create({
                        data: {
                            username: String(credentials.username),
                            email: String(credentials.email),
                            password: hashedPassword
                        }
                    })
                    const user = {username: newUser.username, email: newUser.email}
                    return user
                } else if (credentials.action === "signIn") {
                    console.log("signing in")
                    const foundUser = await prisma.user.findFirst({
                        where: {
                            email: String(credentials.email),
                        }
                    })
                    console.log("foundUser", foundUser)
                    if (!foundUser) {
                        console.log("user not found")
                        return null
                    }
                    const match = await bcrypt.compare(String(credentials.password), foundUser.password)
                    if (!match) {
                        console.log("passwords don't match")
                        return null
                    }
                    const user = {username: foundUser.username, email: foundUser.email}
                    return user
                }
                return null
            } catch (error) {
                console.log("error", error)
                return null
            }
        }
    })
  ],
})
