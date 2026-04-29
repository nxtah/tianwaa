import { NextRequest, NextResponse } from "next/server";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "tianwaa2025";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const response = NextResponse.json(
        {
          success: true,
          message: "Login successful",
          token: btoa(`${username}:${password}`),
        },
        { status: 200 }
      );

      // Set secure cookie
      response.cookies.set("admin_token", btoa(`${username}:${password}`), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 }
    );
  }
}
