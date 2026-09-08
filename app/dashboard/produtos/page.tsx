import {prisma} from "@/lib/prisma"
import Link from "next/link"
import BotaoDeletar from "./components/BotaoDeletar"

export default async function ProdutosPage(){
    const produtos = await prisma.produto.findMany()
    return(
        <><header className="p-8 ">
            <nav>
                <h1>Produtos</h1>
                <Link href="/dashboard/produtos/novo">+ Novo Produto</Link>
            </nav>
        </header>
        <main> 
        <div className="flex justfy-betwin items-center flex-col gap-5 ">
            
        </div> 
         {produtos.map((produto) => (   
           <div key={produto.id} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex w-lg flex-col gap-4">
  
  {/* Nome */}
  <h3 className="text-xl font-bold text-gray-800">{produto.nome}</h3>

  {/* Infos com legenda */}
  <div className="flex gap-6">
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Categoria</span>
      <span className="text-sm font-medium text-black">{produto.categoria}</span>
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-400">Preço de Venda</span>
      <span className="text-sm font-medium text-black">R$ {produto.precoVenda}</span>
    </div>
    <div className="flex flex-col ">
      <span className="text-xs text-gray-400">Quantidade</span>
      <span className="text-sm font-medium text-black">{produto.quantidade}</span>
    </div>
  </div>

  {/* Ações */}
  <div className="flex gap-5 p-2">
    <Link href={`/dashboard/produtos/${produto.id}/editar`} className="text-blue-600 text-sm hover:underline">
      Editar
    </Link>
  <BotaoDeletar id={produto.id} />
  </div>

</div>
         ))}
        </main>
        <footer>

        </footer>
        </>
    )
}
