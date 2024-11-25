import { NextRequest, NextResponse } from 'next/server'
import { connect } from '@/database/dbConnection';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs'

connect()

export async function POST(req: NextRequest,) {
    try {
        const body = await req.json()
        const { username, email, password } = body
        
        const user = await User.findOne({email})
        if(user) {
            return NextResponse.json({error:"User Already Exists"}, {status:400})
        }

        const hashedPassword = await 

        await User.create({
            username,
            email,
            password,
        })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return new NextResponse(JSON.stringify({error:error.message}), {status:500})
    }
}