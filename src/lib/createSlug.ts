// src/utils/slugify.ts
import { GENERATE_SLUG_FROM_TITLE } from "../config";

export default function generateSlug(
  title: string,
  staticSlug: string,
): string {
  if (!GENERATE_SLUG_FROM_TITLE) return staticSlug;

  let slug = title
    .trim() // Remove leading & trailing whitespace
    .toLowerCase() // Output lowercase (for Latin characters)
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\u0600-\u06FF\w-]/g, "") // Keep Persian (Unicode U+0600 to U+06FF) and Latin word characters
    .replace(/^-+|-+$/g, ""); // Remove leading & trailing hyphens

  // Fallback if slug is empty
  return slug || "default-slug"; // Ensure non-empty slug
}
