import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./lib/prisma"
import bcrypt from "bcryptjs"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {

  
  if (!credentials?.email || !credentials?.password) {
    console.log("❌ [AUTH] Faltou email ou senha")
    return null
  }

  const user = await prisma.user.findUnique({
    where: { email: credentials.email as string },
  })
  
  
  if (!user) {
    console.log("❌ [AUTH] Email não existe na tabela User")
    return null
  }


  const senhaCorreta = await bcrypt.compare(
    credentials.password as string,
    user.senha as string,
  )
  
  console.log("✅ [AUTH] Resultado do bcrypt.compare:", senhaCorreta)
  
  if (!senhaCorreta) {
    console.log("❌ [AUTH] Senha não bateu com o hash")
    return null
  }

  console.log("🎉 [AUTH] Login bem-sucedido!")
  
  return {
    id: String(user.id),
    email: user.email,
    role: user.role,
  }
}
    }),
  ],
})