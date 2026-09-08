"use server"

import { prisma } from "@/lib/prisma"
export async function criarProduto(data:{
  nome: string
  descricao: string
  foto: string
  precoVenda: number
  precoCusto: number
  quantidade: number
  categoria: string
  userId: number

}) {
   const produto = await prisma.produto.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      foto: data.foto,
      precoVenda: data.precoVenda,
      precoCusto: data.precoCusto,
      quantidade: data.quantidade,
      categoria: data.categoria,
      userId: data.userId,  
    },
    })
    return produto 
}

export async function deletarProduto(id: number) {
  await prisma.produto.delete({
    where: { id },
  })
}