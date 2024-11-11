import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/connectToDB";
import Cart from "@/models/cart.model";

// Connect to the database
connectToDB();

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    console.log(id);

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const result = await Cart.findOneAndDelete({ productId: id });

    if (!result) {
      return NextResponse.json(
        { message: "Failed to delete item" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
