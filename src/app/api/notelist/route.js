import dbConnect from "@/utils/dbconnect";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await dbConnect();

        const notes = await Note.find({});

        return NextResponse.json(notes, { status: 200 });

    } catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}