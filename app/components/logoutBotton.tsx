import { signOut } from "next-auth/react";

export function LogoutBotton(){
    return(
        <form 
        action={async ()=>{
            "use server"
            await signOut({ redirectTo:"/LoginPage"})
        }}>
            <button type="submit" className="bg-red-500 rounded-lg text-white p-3 font-bold">Sair</button>
        </form>
    )
}