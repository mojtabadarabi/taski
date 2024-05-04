"use client"

import { ReactComponent as LoginSvg } from '@/assets/svg/login.svg';
import LoadingButton from '@/components/LoadingButton';
import { ApiCallStatus } from '@/types';

interface Props {
    onSubmit: ({ username }: { username: string }) => Promise<void>,
    loading?: boolean
    error: ApiCallStatus,
    onChange?: (username: string) => void
}

export default function LoginForm({ onSubmit, loading = false, error = false, onChange }: Props) {
    const submitHandler = (e: any) => {
        e.preventDefault()
        const username = e.target['username'].value
        onSubmit({ username })
    }
    const cahngeHandler = (e: any) => {
        console.log(e)
        console.log(e.target)
        e.preventDefault()
        const username = e.target.value
        onChange?.(username)
    }

    return (
        <form onChange={cahngeHandler} onSubmit={submitHandler} className="p-4 flex flex-col h-screen  justify-center items-start">
            <LoginSvg className='w-full aspect-[1/1] mt-16'/>
            <h1 className="text-3xl font-bold w-full text-center">Login </h1>
            <input id="username" className={
                `
                    border 
                    ${error && error.for === 'login' ? 'border-red-500 ' : 'border-black/25 '}
                    rounded-md  
                    mt-8 
                    text-md 
                    font-medium 
                    p-3 
                    focus:outline-none 
                    w-full
                `
            } placeholder="Email/phone number" />
            <span className='text-red-500 text-xs font-medium my-2 transition ease-in-out duration-75 delay-150'>{error && error.for === 'login' ? error.msg : ""}</span>
            <LoadingButton loading={loading} type="submit" >Lets go</LoadingButton>
        </form>
    )
}
