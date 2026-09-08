"use client"

import {deletarProduto} from "@/app/dashboard/actions"

interface Props {
  id: number
}

export default function BotaoDeletar({ id }: Props) {
  async function handleDeletar() {
    const confirmar = confirm("Tem certeza que deseja deletar este produto?")
    if (!confirmar) return
    await deletarProduto(id)
  }

  return (
    <button onClick={handleDeletar} className="text-red-500 text-sm cursor-pointer hover:underline">
      Deletar
    </button>
  )
}
