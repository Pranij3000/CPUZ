import { useEffect, useRef } from "react";
import "./BackgroundVideo.scss";

export default function BackgroundVideo({ url }) {
  const playerRef = useRef(null);
  const playerInstance = useRef(null);
  const intervalRef = useRef(null);

  const extractVideoId = (ytUrl) => {
    const match = ytUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
    return match ? match[1] : "";
  };

  useEffect(() => {
    const videoId = extractVideoId(url);

    const onYouTubeIframeAPIReady = () => {
      playerInstance.current = new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          loop: 0, // handled manually
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            intervalRef.current = setInterval(() => {
              const currentTime = event.target.getCurrentTime();
              if (currentTime >= 15) {
                event.target.seekTo(0);
              }
            }, 1000);
          },
        },
      });
    };

    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      clearInterval(intervalRef.current);
      if (playerInstance.current) {
        playerInstance.current.destroy();
      }
    };
  }, [url]);

  return (
    <div
      className="bg-video"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        ref={playerRef}
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          pointerEvents: "none",
          zIndex: "-1",
        }}
      />
    </div>
  );
}
