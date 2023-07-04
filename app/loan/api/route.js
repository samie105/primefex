// app/api/route.js

import { NextResponse } from "next/server";
import FormDataModel from "../mongooseConfig";

export async function POST(request) {
  try {
    // Check if email or SSN already exists
    const existingUser = await FormDataModel.exists({
      $or: [
        { emailAddress: request.body.emailAddress },
        { ssn: request.body.ssn },
        { phoneNumber: request.body.primaryPhoneNumber },
      ],
    });

    if (existingUser) {
      // User already exists, handle the case accordingly
      return NextResponse.json({ exists: true }, { status: 200 });
    }

    // Save the form data to the database
    const savedData = await FormDataModel.create(request.body);

    return NextResponse.json(savedData, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
