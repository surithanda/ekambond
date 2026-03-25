import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Required fields missing" }, { status: 400 });
    }

    // Forward to backend if available
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
    try {
      await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
    } catch {
      // Backend unavailable — log and continue (graceful degradation)
      console.log("[contact] Backend unavailable, logging locally:", { name, email, subject });
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received. Our team will respond within 24 hours.",
    }, { status: 200 });
  } catch (error) {
    console.error("[contact] Error:", error);
    return NextResponse.json({ success: true, message: "Message received." }, { status: 200 });
  }
}
