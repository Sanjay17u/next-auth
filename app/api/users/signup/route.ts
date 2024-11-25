import { NextRequest, NextResponse } from 'next/server'
import { connect } from '@/database/dbConnection';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs'

connect()

export async function POST(req: NextRequest,) {
    try {
        const body = await req.json()
        const { username, email, password } = body
        
        // eslint-disable-next-line prefer-const
        let user = await User.findOne({email})
        if(user) {
            return NextResponse.json({error:"User Already Exists"}, {status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        await User.create({
            username,
            email,
            password:hashedPassword,
        })

        return NextResponse.json({message:"User Registered Successfully!"}, {status:201})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return new NextResponse(JSON.stringify({error:error.message}), {status:500})
    }
}