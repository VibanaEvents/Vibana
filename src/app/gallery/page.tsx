import { readdirSync } from "fs";
import { join } from "path";
import GalleryGrid from "@/components/GalleryGrid";

function getImagePaths(): string[] {
  const dir = join(process.cwd(), "public", "images");
  return readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map((f) => `/images/${f}`);
}

export default function GalleryPage() {
  const images = getImagePaths();

  return (
    <div className="max-w-6xl mx-auto px-4 pt-32 pb-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-gray-600 max-w-xl">
          Moments from past Vibana events. The energy, the crowd, the culture.
        </p>
      </div>
      <GalleryGrid images={images} />
    </div>
  );
}
