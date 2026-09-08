"use server"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"


export type LoginState = {
    error: string | null;

};

export async function loginAction(
    _prevState: LoginState,
    formData: FormData): Promise<LoginState> {
    
    
    const email = formData.get("email") as string; 
    const password = formData.get("password") as string; 

    try{
        await signIn("credentials",{
            email,
            password,
            redirectTo:"/dashboard"
        })
    }
    catch (error){
        if (error instanceof AuthError){
            return{error:"Acredito que digitou algo errado revise "} 
        }
        throw error 
    }
    return{ error:null}
}
