import { useEffect, useRef } from "react";

export function DashboardAmbientSound() {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {

    const audio = new Audio("/sounds/mountain.mp3");

    audio.loop = true;

    // VERY LIGHT VOLUME
    audio.volume = 0.08;

    audioRef.current = audio;

    audio.play().catch((error) => {
      console.log(error);
    });

    return () => {

      audio.pause();

      audio.currentTime = 0;
    };

  }, []);

  return null;
}