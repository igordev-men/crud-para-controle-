import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export default async function DashboardPage() {
  // O middleware já barrou quem não tá logado — aqui a sessão
  // é só pra personalizar a tela, não pra segurança.
  const session = await auth()

  // Busca direto no banco, no servidor. Ajusta o nome do model
  // e dos campos pro TEU schema (produto/product, preco/price etc).
  const produtos = await prisma.produto.findMany()

  const totalProdutos = produtos.length
  const itensEmEstoque = produtos.reduce((soma, p) => soma + p.quantidade, 0)

  // Se preco for Decimal no schema, o Prisma devolve um objeto Decimal,
  // não um number — por isso o Number(). Lembra da conversa de hoje?
  const valorEmEstoque = produtos.reduce(
    (soma, p) => soma + Number(p.preco) * p.quantidade,
    0
  )

  // LIMIAR DE ALERTA: esse 5 é CHUTE meu. Regra de negócio não se inventa,
  // se pergunta — confirma com a cliente qual número faz sentido pra ela.
  const LIMITE_ESTOQUE_BAIXO = 5
  const estoqueBaixo = produtos.filter(
    (p) => p.quantidade <= LIMITE_ESTOQUE_BAIXO
  )

  // Formatação de moeda nativa do JS — nunca formate R$ na mão com concatenação.
  const reais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Olá, {session?.user?.name ?? "lojista"}</p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Produtos cadastrados</p>
          <p className="text-3xl font-bold">{totalProdutos}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Itens em estoque</p>
          <p className="text-3xl font-bold">{itensEmEstoque}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Valor parado em estoque</p>
          <p className="text-3xl font-bold">{reais.format(valorEmEstoque)}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-gray-500">Estoque baixo</p>
          <p className="text-3xl font-bold">{estoqueBaixo.length}</p>
        </div>
      </section>

      {estoqueBaixo.length > 0 && (
        <section className="rounded-lg border border-amber-300 bg-amber-50 p-4">
          <h2 className="font-bold">Atenção: reposição necessária</h2>
          <ul className="mt-2 list-disc pl-5">
            {estoqueBaixo.map((p) => (
              <li key={p.id}>
                {p.nome} — restam {p.quantidade}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-lg border border-dashed p-4 text-gray-500">
        Vendas e lucro entram aqui quando implementarmos a baixa de estoque —
        é o próximo módulo do roadmap.
      </section>
    </div>
  )
}