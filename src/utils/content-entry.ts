import type { CollectionEntry } from "astro:content";
import path from "node:path";

export function getPostAssetBasePath(entry: CollectionEntry<"posts">): string {
  if (entry.filePath) {
    return path.dirname(entry.filePath).replace(/^src[\\/]/, "");
  }

  const lastSlashIndex = entry.id.lastIndexOf("/");
  const entryDir = lastSlashIndex >= 0 ? entry.id.slice(0, lastSlashIndex + 1) : "";
  return path.posix.join("content/posts", entryDir);
}
