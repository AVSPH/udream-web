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
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const contactData = {
      firstName,
      lastName,
      name: (name || "").trim(),
      email,
      phone: phone || undefined,
      country: country || undefined,
      locationId: "BmnsTjlo762L3qF4LbMW",
      source: "Udream Curator Quiz",
      tags: ["Curator Lead"],
      customFields: [
        { id: "travel_exp", value: travel_exp },
        { id: "budget", value: budget },
        { id: "vibefocus", value: vibefocus },
        { id: "duration", value: duration },
        { id: "accomodation", value: accomodation },
        { id: "work", value: work },
        { id: "currentloc", value: currentloc },
      ].filter(field => field.value !== undefined && field.value !== null),
    };

    const ghlResponse = await fetch(`${process.env.GHL_BASE_URL}contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${process.env.GHL_TOKEN}`,
      },
      body: JSON.stringify(contactData),
    });

    const responseData = await ghlResponse.json();

    if (!ghlResponse.ok) {
      console.error("GHL API Error:", responseData);

      // Check if it's a duplicate contact error
      if (
        responseData.statusCode === 400 &&
        responseData.message?.includes("duplicated contacts")
      ) {
        return NextResponse.json(
          {
            error: "duplicate",
            message: "You have already submitted a curator request. We will be in touch soon!",
            contactId: responseData.meta?.contactId,
          },
          { status: 400 },
        );
      }

      return NextResponse.json(
        { error: "Failed to create contact", details: responseData },
        { status: ghlResponse.status },
      );
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Error creating curator contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
