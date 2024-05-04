import React, { ButtonHTMLAttributes } from 'react'
import CircularProgress from './CircularProgress'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    loading: boolean
    className?: string
}

export default function LoadingButton({ children, loading, className = '', ...props }: Props) {
    return (
        <button {...props} className={`${className} w-full h-[50px] mt-auto rounded-md bg-[#48525c] p-3 text-white`}>{loading ? <CircularProgress /> : children}</button>
    )
}
