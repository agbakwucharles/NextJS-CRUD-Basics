import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import User from '../../../../models/users';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findByIdAndDelete(id);
    return NextResponse.json({ "users": user, "message": "User deleted successfully" });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const body = await req.json();
    await connectMongoDB();
    const user = await User.findByIdAndUpdate(id, body);
    return NextResponse.json({ "users": user, "message": "User updated successfully" });
}