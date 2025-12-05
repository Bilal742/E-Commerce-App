import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import mongoose from "mongoose";
import { connectDB } from "@/app/lib/mongodb";

// Connect to MongoDB (reuse connection in serverless environment)
const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }
  await connectDB();
};

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await connectToDB();

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({
      name,
      email,
      password: hashedPassword,
      provider: "credentials"
    });

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });

  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
