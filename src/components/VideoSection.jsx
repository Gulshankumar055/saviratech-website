import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <section className="video-section">
      <div className="video-section__container">
        <div className="video-card">

          {/* Cover Image */}
          {!isPlaying && (
            <div className="video-card__cover">
              <img
                src="/src/assets/images/pexels-thirdman-7651922.jpg"
                alt="Video cover image"
              />
            </div>
          )}

          {/* Overlay */}
          {!isPlaying && <div className="video-card__overlay"></div>}

          {/* Play Button */}
          {!isPlaying && (
            <button
              className="video-card__play"
              aria-label="Play video"
              onClick={handlePlay}
            >
              <svg
                className="video-card__play-icon"
                viewBox="0 0 24 24"
              >
                <polygon points="9,7 18,12 9,17" />
              </svg>
            </button>
          )}

          {/* Video */}
          <video
            ref={videoRef}
            className="video-card__video"
            controls
            style={{ display: isPlaying ? "block" : "none" }}
          >
            <source
              src="/src/assets/videos/6774633-uhd_3840_2160_30fps.mp4"
              type="video/mp4"
            />
          </video>

        </div>
      </div>
    </section>
  );
}
