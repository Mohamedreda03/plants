import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { auth } from "@/actions/auth";

export async function GET() {
  try {
    const session = cookies().get("admin");

    if (!session) {
      return NextResponse.json({ isAuth: false });
    }

    return NextResponse.json({ isAuth: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH() {
  try {
    cookies().delete("admin");
    return NextResponse.json({ isAuth: false });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const isAuth = await auth(password);

    if (!isAuth.success) {
      return NextResponse.json({
        isAuth: false,
      });
    }

    return NextResponse.json({ isAuth: true });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
