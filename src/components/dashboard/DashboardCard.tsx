import { useEffect, useRef } from "react";
import { Lock } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  audio: string;
  showAll?: boolean;
}

export default function DashboardCard({
  title,
  subtitle,
  image,
  duration,
  audio,
  showAll,
}: Props) {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {

    const audioInstance = new Audio(audio);

    audioInstance.volume = 0.7;

    audioInstance.loop = true;

    audioRef.current = audioInstance;

    return () => {
      audioInstance.pause();
    };

  }, [audio]);

  const handlePlay = () => {

    if (!audioRef.current) return;

    const currentAudio = audioRef.current;

    const allAudios = (window as any).__stillwaveAudios || [];

    const isCurrentlyPlaying = !currentAudio.paused;

    // SAME CARD CLICK → PAUSE
    if (isCurrentlyPlaying) {

      currentAudio.pause();

      return;
    }

    // STOP ALL OTHER AUDIOS
    allAudios.forEach((audio: HTMLAudioElement) => {

      audio.pause();

      audio.currentTime = 0;

    });

    // PLAY CURRENT
    currentAudio.play();

    // STORE GLOBAL
    (window as any).__stillwaveAudios = [
      ...allAudios.filter((a: HTMLAudioElement) => a !== currentAudio),
      currentAudio,
    ];
  };

  return (

    <div
      className={`
        ${
          showAll
            ? "w-full"
            : "min-w-[280px] max-w-[280px] flex-shrink-0"
        }
      `}
    >

      <div
        onClick={handlePlay}
        className="
          cursor-pointer
          group
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            h-[190px]
            w-full
          "
        >

          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              group-hover:scale-[1.03]
              transition-all
              duration-500
            "
          />

          {/* LOCK */}
          <div
            className="
              absolute
              top-3
              left-3
              h-[34px]
              w-[34px]
              rounded-full
              bg-black/40
              backdrop-blur-xl
              flex
              items-center
              justify-center
            "
          >
            <Lock
              size={15}
              className="text-white"
            />
          </div>

          {/* DURATION */}
          <div
            className="
              absolute
              top-3
              right-3
              px-3
              h-[28px]
              rounded-full
              bg-white/90
              text-[#123B72]
              text-[13px]
              font-[600]
              flex
              items-center
              justify-center
            "
          >
            {duration}
          </div>

        </div>

        {/* TEXT */}
        <div className="mt-3">

          <h3
            className="
              text-white
              text-[17px]
              leading-[22px]
              font-[500]
            "
          >
            {title}
          </h3>

          <p
            className="
              text-white/55
              text-[13px]
              mt-1
            "
          >
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}