
"use server"
import Note from "@/models/note";
import dbConnect from "@/utils/dbconnect";
import { NextResponse } from "next/server";

// Use 'export async function' instead of 'export default async function'
export async function submitNote(data) {
  try {
     console.log(data)
    await dbConnect();
    const Sampledata = JSON.parse(JSON.stringify(data))
    await Note.create(Sampledata);

    return NextResponse.json({
      body: { message: "Note created successfully" }
    });
  } catch (e) {
    // Return an error response if there's an exception
    return NextResponse.json({
      status: 500, // Internal Server Error
      body: { message: "Server error" }
    });
  }
}
