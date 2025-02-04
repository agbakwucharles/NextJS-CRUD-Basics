import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import User from '../../../../models/users';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findByIdAndDelete(id);
    return NextResponse.json({ "message": "User deleted successfully" });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await req.json();
    await connectMongoDB();
    const user = await User.findByIdAndUpdate(id, body);
    return NextResponse.json({ "message": "User updated successfully" });
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findById(id);
    return NextResponse.json(user);
}