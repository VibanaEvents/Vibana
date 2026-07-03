"use client";

import { useEffect } from "react";

// Minimal types for the YouTube IFrame API
declare global {
  interface Window {
    YT: {
      Player: new (
        el: string | HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: { playVideo: () => void } }) => void;
          };
        }
      ) => void;
      loaded?: number;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const VIDEO_ID = "Y7ze-WcWC7s";

export default function YoutubeBackground() {
  useEffect(() => {
    const initPlayer = () => {
      new window.YT.Player("yt-hero-player", {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          playlist: VIDEO_ID,
          modestbranding: 1,
          iv_load_policy: 3,
          disablekb: 1,
        },
        events: {
          onReady: (e) => e.target.playVideo(),
        },
      });
    };

    if (window.YT?.loaded) {
      // API already loaded (e.g. navigating back to homepage)
      initPlayer();
    } else {
      // Inject the API script once
      if (!document.getElementById("yt-api-script")) {
        const tag = document.createElement("script");
        tag.id = "yt-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  return (
    <div className="yt-hero-wrapper absolute inset-0 overflow-hidden pointer-events-none">
      {/* YT.Player replaces this div with an iframe; CSS in globals.css sizes it */}
      <div id="yt-hero-player" />
    </div>
  );
}
