import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      country,
      travel_exp,
      budget,
      vibefocus,
      duration,
      accomodation,
      work,
      currentloc,
    } = body;

    const nameParts = (name || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "Curator";
    const lastName = nameParts.slice(1).join(" ") || undefined;

    const notesParts = [
      country && `Country: ${country}`,
      currentloc && `Current location: ${currentloc}`,
      travel_exp && `Travel experience: ${travel_exp}`,
      work && `Remote work: ${work}`,
      budget && `Daily budget: ${budget}`,
      duration && `Duration: ${duration}`,
      vibefocus && `Travel vibe: ${vibefocus}`,
      accomodation && `Accommodation: ${accomodation}`,
    ].filter(Boolean);

    const leadData = {
      businessId: process.env.NEXT_PUBLIC_BUSINESS_ID,
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      source: "other",
      notes: notesParts.length ? notesParts.join(" | ") : undefined,
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
        { error: "Failed to submit request", details: responseData },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Error creating curator lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
