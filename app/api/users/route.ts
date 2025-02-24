import connectMongoDB from '../../../libs/mongodb';
import User from '../../../models/users';
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
    const { name } = await request.json();
    await connectMongoDB();
    await User.create({ name });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
}