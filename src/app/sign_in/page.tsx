import LoginComponent from '@/components/auth/LoginComponent'
import APP_ROUTES from '@/settings/APP_ROUTES'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Page() {
    const tokenCookie = cookies().get('token')
    if (tokenCookie) redirect(APP_ROUTES.HOME)

    return <LoginComponent />
}