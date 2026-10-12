import type { NextRequest } from "next/server";
import { lookupQuestions } from "@/features/account/lib/question-bank";

// Returns question content for the ids a student has due or saved (max 200 per call).
export function GET(request: NextRequest) {
  const ids = (request.nextUrl.searchParams.get("ids") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 200);
  return Response.json(
    { questions: lookupQuestions(ids) },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
