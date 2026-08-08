import Image from "next/image";
import { Camera } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { gallery } from "@/data/portfolio";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28" style={{ backgroundColor: "var(--surface-muted)" }}>
      <div className="section-container">
        <SectionHeading
          eyebrow="Beyond the CV"
          title="A Few Moments"
          description="Placeholder visuals for now — swap the tiles below for real photos anytime by dropping images in public/images and updating src/data/portfolio.ts."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.caption} delay={(i % 3) * 0.08}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                {g.src ? (
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${g.gradient} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                      <Camera size={36} color="white" />
                    </div>
                  </>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-xs font-medium text-white leading-snug">{g.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
