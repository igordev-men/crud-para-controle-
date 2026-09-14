import { signOut } from "@/auth";

export function LogoutBotton(){
    return(
        <form 
        action={async ()=>{
            "use server"
            await signOut({ redirectTo:"/login"})
        }}>
            <button type="submit" className="bg-red-500 rounded-lg text-white p-3 font-bold">Sair</button>
        </form>
    )
}