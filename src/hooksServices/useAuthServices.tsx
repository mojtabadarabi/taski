"use client"
import { ApiCallStatus } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function useAuthServices() {
    const [loading, setLoading] = useState<ApiCallStatus>(false)
    const [error, setError] = useState<ApiCallStatus>(false)

    const router = useRouter()

    const loginService = async ({ username }: { username: string }): Promise<void> => {
        if(!checkUserNameFieldAndReturnIsOk(username))return 
        try {
            setLoading({ for: 'login' })
            const data = await fetch('api/auth', {
                method: 'post'
            })
            if (data?.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    const checkUserNameFieldAndReturnIsOk=(username:String)=>{
        if (!username || username.trim() === '') {
            setError({ for: 'login', msg: 'نام کاربری شما نباید خالی باشد' })
            return false
        }
        else{
            setError(false)
            return true
        }
    }
    return {
        loginService,
        loading,
        error,
        checkUserNameFieldAndReturnIsOk
    }
}
