export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-center justify-center bg-gray-300">
      <h1 className="text-3xl font-bold text-green-600">
        Perfumes e Velas 🕯️
      </h1>
      <div className="flex flex-col w-lg gap-4 p-3 justify-center items-center bg-gray-100 shadow-md rounded-md">
      <input type="email" name="" id="email" placeholder="digite seu email!" className="w-full p-3 border border-green-700  text-black rounded-md hover:bg-gray-200 border-green-700  transition-colors duration-200" />
      <input type="password" id="senha" placeholder="digite sua senha" className="w-full p-3 border border-green-700 rounded-md text-black hover:bg-gray-200 border-green-700 transition-colors duration-200"/>
      <button type="submit" className="bg-green-800 text-white p-3 cursor-pointer shadow-lg font-bold w-full"  >confirmar</button>
      <a href="#" className="text-lx text-green-900 font-bold"> esqueci a senha  </a>
      </div>
    </main>
  )
}
