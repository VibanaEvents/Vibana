"use client";

import { useState } from "react";

export default function PlaylistPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-32 pb-16">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">The Playlist</h1>
      <p className="text-gray-600 mb-12 max-w-xl">
        This is the soundtrack of Vibana. Listen along, and let us know which
        tracks or artists you&apos;d love to hear at our next event.
      </p>

      {/* Spotify embed */}
      <div className="rounded-2xl overflow-hidden mb-16">
        <iframe
          src="https://open.spotify.com/embed/playlist/3p6K1GDZabBpCwoJHKoaWJ?utm_source=generator&theme=0"
          width="100%"
          height="400"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ border: "none" }}
        />
      </div>

      {/* Suggestion form */}
      <div className="border-t border-gray-100 pt-12">
        <h2 className="text-2xl font-bold mb-2">Suggest a Track</h2>
        <p className="text-gray-500 text-sm mb-8">
          Got a song you want to hear? Drop it below and we&apos;ll pass it on
          to our DJs.
        </p>

        {submitted ? (
          <div className="bg-[#FF924C]/10 border border-[#FF924C]/30 rounded-2xl px-8 py-10 text-center">
            <p className="text-2xl mb-3">🧡</p>
            <p className="font-semibold text-lg mb-1">Thanks for your suggestion!</p>
            <p className="text-gray-500 text-sm">We&apos;ll make sure the DJs see it.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Artist</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Burna Boy"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF924C]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Song title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Last Last"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF924C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={4}
                placeholder="Any context for the DJs? Genre, vibe, moment in the night..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF924C] resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#FF924C] text-white text-sm font-semibold px-10 py-4 rounded-full hover:bg-[#e8803d] transition-colors"
            >
              Submit suggestion
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
