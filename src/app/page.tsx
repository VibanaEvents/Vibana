import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import SubscribeForm from "@/components/SubscribeForm";

export default function HomePage() {
  return (
    <>
      {/* Hero — fullscreen video background */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden">
        {/* YouTube fullscreen background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/Y7ze-WcWC7s?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=Y7ze-WcWC7s&enablejsapi=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Vibana background video"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.77vh",
              border: "none",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4">
          <Image
            src="/logo-white.png"
            alt="Vibana"
            width={1687}
            height={1406}
            quality={100}
            className="w-[85vw] sm:w-[70vw] max-w-3xl h-auto mb-12 drop-shadow-2xl"
            priority
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="inline-block bg-[#FF924C] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#e8803d] transition-colors"
            >
              View Upcoming Events
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              About Vibana
            </Link>
          </div>

          <SocialLinks className="mt-8 justify-center" iconClassName="text-white/80 hover:text-white" />
        </div>
      </section>

      {/* Stay Updated — email signup */}
      <section className="bg-white text-center py-24 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 text-gray-900">Stay Updated</h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto text-sm sm:text-base">
          Be the first to hear about new events, line-ups, and ticket drops.
        </p>

        <SubscribeForm />
      </section>
    </>
  );
}
