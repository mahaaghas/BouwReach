import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const ASSET_ROOT = path.join(process.cwd(), "assets");

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
};

export async function GET(_: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const requestedPath = path.resolve(ASSET_ROOT, ...slug);

  if (!requestedPath.startsWith(ASSET_ROOT) || !fs.existsSync(requestedPath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const extension = path.extname(requestedPath).toLowerCase();
  const file = fs.readFileSync(requestedPath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": MIME_TYPES[extension] ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
