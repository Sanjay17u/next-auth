import { NextResponse } from "next/server";


export async function GET() {
    try {
        const res = NextResponse.json({
            message: "Logout Successfully!",
            success: true
        }, {status:200})
        res.cookies.set("token", "", {httpOnly:true, expires: new Date(0)})
        return res;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return NextResponse.json({error:error.message}, {status:500})
    }
}