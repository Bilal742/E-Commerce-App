import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import { connectDB } from "@/app/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    console.log("Signup data:", name, email);  // <- Debug

    await connectDB();
    console.log("DB connected");  // <- Debug

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword, provider: "credentials" });

    return NextResponse.json({ message: "Signup successful" }, { status: 201 });
  } catch (error) {
    console.log("Signup error:", error);  // <- Debug
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}
