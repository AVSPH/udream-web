import { NextRequest, NextResponse } from "next/server";

function deriveNameFromEmail(email: string): string {
  const local = email.split("@")[0] || "Subscriber";
  return local.charAt(0).toUpperCase() + local.slice(1);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, tags, hp } = body;

    const source = Array.isArray(tags) && tags.includes("Newsletter")
      ? "newsletter"
      : "contact_form";

    const leadData = {
      businessId: process.env.NEXT_PUBLIC_BUSINESS_ID,
      firstName: firstName?.trim() || deriveNameFromEmail(email),
      lastName: lastName?.trim() || undefined,
      email,
      company: company || undefined,
      source,
      notes: Array.isArray(tags) && tags.length ? `Tag: ${tags.join(", ")}` : undefined,
      hp,
    };

    const backendResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      },
    );

    const responseData = await backendResponse.json();

    if (!backendResponse.ok) {
      console.error("Lead API error:", responseData);
      return NextResponse.json(
        { error: "Failed to submit lead", details: responseData },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
