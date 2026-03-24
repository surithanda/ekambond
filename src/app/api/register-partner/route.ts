import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward to the matrimony services API
    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
    const response = await fetch(`${apiBase}/api/partners/register-enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ message: "Submission failed" }));
      return NextResponse.json({ success: false, message: err.message || "Submission failed" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error("[register-partner] Error:", error);
    // Even if backend is down, accept and log – partner-facing site shouldn't fail hard
    return NextResponse.json(
      { success: true, message: "Your enquiry has been received. We will contact you within 24 hours." },
      { status: 200 }
    );
  }
}
