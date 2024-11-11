import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connectToDB } from "@/utils/connectToDB";
import User from "@/models/user.model";

connectToDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, password, phone } = reqBody;

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    const { password: _, ...userData } = newUser._doc;

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data: userData,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
