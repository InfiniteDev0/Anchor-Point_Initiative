import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const orderData = await request.json();

    // Log the order data for debugging
    console.log("📦 New order received:", {
      orderId: orderData.orderId,
      customer: orderData.customer?.name,
      paymentMethod: orderData.paymentMethod,
      total: orderData.pricing?.total,
      items: orderData.items?.length + " items",
    });

    // Here you would typically save to your database
    // Example with different database options:

    // For MongoDB:
    // const order = new Order(orderData);
    // await order.save();

    // For PostgreSQL/MySQL with Prisma:
    // await prisma.order.create({
    //   data: orderData
    // });

    // For Supabase:
    // const { data, error } = await supabase
    //   .from('orders')
    //   .insert([orderData]);

    // Simulate successful save
    const response = {
      success: true,
      message: "Order saved successfully",
      orderId: orderData.orderId,
      reference: orderData.reference,
      timestamp: new Date().toISOString(),
    };

    console.log("✅ Order saved successfully:", response);

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("❌ Error saving order:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save order",
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to retrieve orders
export async function GET(request) {
  try {
    // This would fetch orders from your database
    // For now, return empty array

    console.log("📋 Fetching orders...");

    return NextResponse.json({
      success: true,
      orders: [],
      message: "Orders retrieved successfully",
    });
  } catch (error) {
    console.error("❌ Error fetching orders:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
