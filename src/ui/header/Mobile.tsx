"use client"
import APP_ROUTES from '@/settings/APP_ROUTES'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgProfile } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function MobileHeader() {
    const pathname = usePathname()
    if (pathname === APP_ROUTES.SIGN_IN) return null
    return (
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <GiHamburgerMenu size={30} />
                <span className={"text-md font-bold"}>Mojtaba</span>
            </div>
            <Link href="/" >
                <CgProfile size={35} />
            </Link>
        </div>
    )
}
