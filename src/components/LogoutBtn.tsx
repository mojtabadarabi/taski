"use client"
import APP_ROUTES from '@/settings/APP_ROUTES'
import { useRouter } from 'next/navigation'
import { FaPowerOff } from 'react-icons/fa'

export default function LogoutBtn() {
    const router = useRouter()

    const onLogout = async () => {
        try {
            const data = await fetch('api/auth', {
                method: 'delete'
            })
            if (data?.ok) {
                router.push(APP_ROUTES.SIGN_IN)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button onClick={onLogout} className="bg-sky-50 p-8 flex text-sky-400 flex-col gap-10 items-center justify-center rounded-md">
            <FaPowerOff size={30} className="" />
            <h6 className="text-xs font-medium">lOG OUT</h6>
        </button>
    )
}
