"use client"

import useAuthServices from '@/hooksServices/useAuthServices';
import { LoginForm } from '@/ui/auth';
export default function LoginComponent() {
    const { loginService, loading, error,checkUserNameFieldAndReturnIsOk } = useAuthServices()
    return <LoginForm
        onSubmit={loginService}
        loading={loading && loading.for === 'login'}
        error={error}
        onChange={checkUserNameFieldAndReturnIsOk}
    />
}
