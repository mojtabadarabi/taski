import { NextRequest, NextResponse } from "next/server";
import {cookies} from 'next/headers'

export async function POST() {
    try {
        cookies().set('token','dfdfdfdfdfdf',{httpOnly:true})
        return new NextResponse("successfull")
    } catch (error) {
        console.log(error)
        return new NextResponse('Error is fetching products' + error, { status: 500 })
    }
}

export async function DELETE() {
    try {
        cookies().delete('token')
        return new NextResponse("successfull")
    } catch (error) {
        console.log(error)
        return new NextResponse('Error is fetching products' + error, { status: 500 })
    }
}