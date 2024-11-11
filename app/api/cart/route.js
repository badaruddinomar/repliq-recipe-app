import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import Cart from "@/models/cart.model";

// Connect to the database
connectToDB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { productId, image, title, quantity } = reqBody;

    if (!productId || !image || !title || !quantity) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Use findOneAndUpdate with upsert option for atomicity
    const updatedCartItem = await Cart.findOneAndUpdate(
      { productId },
      { $set: { productId, image, title, quantity } },
      { new: true, upsert: true }
    );

    const message = updatedCartItem.upserted
      ? "Cart item added successfully"
      : "Cart item updated successfully";

    return NextResponse.json(
      { message, success: true, data: updatedCartItem },
      { status: updatedCartItem.upserted ? 201 : 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
