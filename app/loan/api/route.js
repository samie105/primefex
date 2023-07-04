import { NextResponse } from "next/server";
import FormDataModel from "../mongooseConfig";

export async function POST(request) {
  const formData = await request.json();
  console.log(formData);

  try {
    // Convert email address to lowercase

    // Convert fields to strings
    const ssn = String(formData.ssn);
    const emailAddress = String(formData.emailAddress);
    const phoneNumber = String(formData.phoneNumber);

    // Check if email, SSN, or phone number already exist
    const existingData = {
      email: Boolean(
        await FormDataModel.findOne({ emailAddress: emailAddress })
      ),
      ssn: Boolean(await FormDataModel.findOne({ ssn: ssn })),
      phoneNumber: Boolean(
        await FormDataModel.findOne({
          phoneNumber: phoneNumber,
        })
      ),
    };

    if (!existingData.email || !existingData.ssn || !existingData.phoneNumber) {
      // Any of the fields doesn't exist and all the fields are not empty or undefined, create a new entry in the database
      await FormDataModel.create({
        ssn: ssn,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
      });
    }

    return NextResponse.json(existingData, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
