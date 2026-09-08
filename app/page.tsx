"use client"
import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState= { error:null}


export default function LoginPage(){

  const [state, formAction, pending] = useActionState(loginAction, initialState)
  return(
    <main className="min-hscreen flex flex-col items-center justify-center ">
      <div className=" flex-col p-3 justify-center justify-items-center">
      <h2
      className="font-bold p-3 text-4xl">
      Perfume e velas</h2>
      <p className="p-3">sistema para gestao de estoque</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-2xl flex flex-col items-center gap-3 ">
      <h4>Login:</h4>
      <form action={formAction} className="flex flex-col p-2 gap-3">
        
       <input
    type="email"
    name="email"
    placeholder="seu email"
    autoComplete="email"
    required
    className="w-full rounded-lg border-2 border-lime-800 px-3 py-2 text-sm transition-colors hover:border-lime-600 outline-blue-500"
  />
  <input
    type="password"
    name="password" // ⚠️ precisa bater com formData.get("senha") na action
    placeholder="sua senha"
    autoComplete="current-password"
    required
    className="w-full rounded-lg border-2 border-lime-800 px-3 py-2 text-sm transition-colors hover:border-lime-600 outline-blue-500"
  />

        {state.error &&(<p className="text-sm font-medium text-red-600">{state.error}</p>
        )}
        <button className="w-full rounded-lg bg-green-600 text-white py-2" type="submit" disabled={pending}>
          {pending ? "Entrando...": "Entrar"}
        </button>
      </form>
      </div>
    </main>
  )
}