"use client"

import { useState} from "react"
import { criarProduto } from "../../actions"

export default function NovoProdutoPage(){
    const [ loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget
        const data = {
           nome: form.nome.value,
         descricao: form.descricao.value,
        foto: "",
        precoVenda: Number(form.precoVenda.value),
        precoCusto: Number(form.precoCusto.value),
         quantidade: Number(form.quantidade.value),
         categoria: form.categoria.value,
         userId: 1, // temporário — depois vem da sessão 
        }

        await criarProduto(data)
        setLoading(false)
        alert("Produto criado com sucesso!!")
    }

    return(
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 max-w-lg">
      <h1 className="text-2xl font-bold">Novo Produto</h1>
      <input name="nome" placeholder="Nome" className="border p-2 rounded" required />
      <input name="descricao" placeholder="Descrição" className="border p-2 rounded" required />
      <input name="precoVenda" type="number" placeholder="Preço de Venda" className="border p-2 rounded" required />
      <input name="precoCusto" type="number" placeholder="Preço de Custo" className="border p-2 rounded" required />
      <input name="quantidade" type="number" placeholder="Quantidade" className="border p-2 rounded" required />
      <input name="categoria" placeholder="Categoria" className="border p-2 rounded" required />
      <button type="submit" disabled={loading} className="bg-green-600 text-white p-2 rounded">
        {loading ? "Salvando..." : "Criar Produto"}
      </button>
    </form>  
    )
}