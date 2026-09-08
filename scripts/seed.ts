import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient()

async function main(){
    const senhaHash = await bcrypt.hash("senha",10)
    await prisma.user.upsert({
        where: { email: "adm@teste.com"},
        update:{ senha: senhaHash },
        create: {
            email: "adm@teste.com",
            senha: senhaHash,
            role: "ADMIN",
        },
    })
    console.log("Usario autalizado com a senha hash")
}
main()
.catch(console.error)
.finally(()=> prisma.$disconnect())

