import { existsSync } from "fs";
import { unlink, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { v4 as uuid } from "uuid";

export const POST = async (req: NextRequest) => {
  const data = await req.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Save the file to the filesystem

  const fileName = `${uuid().replace(/-/g, "")}.${file.name.split(".").pop()}`;

  let path = join("public", "images", fileName);
  await writeFile(path, new Uint8Array(buffer));

  // const imageLink = `${process.env.NEXT_PUBLIC_APP_URL}/images/${fileName}`;

  path = path.replace("public", "").split("\\").join("/");

  return NextResponse.json({ success: true, path });
};

// delete file by path

export const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const fileName = body.path.split("/").pop() as string;

    let path = join("public", "images", fileName);

    if (existsSync(path)) {
      await unlink(path);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};