import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import DashboardCard from "../components/dashboard/DashboardCard";

export const Route = createFileRoute("/dashboard/music")({
  component: DashboardMusicPage,
});

function DashboardMusicPage() {

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "EMDR-Inspired Bilateral: Survival Mode",
      subtitle: "Curated by Calm",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      duration: "18 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "EMDR-Inspired Bilateral: Tension Release",
      subtitle: "Curated by Calm",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      duration: "24 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "174 Hz Soothing Piano",
      subtitle: "Craig Flaster",
      image:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
      duration: "32 min",
      audio: "/sounds/River.mp3",
    },

    {
      title: "Peaceful Piano Classics Vol 2",
      subtitle: "Leonardo Gucci",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      duration: "28 min",
      audio: "/sounds/Morning.mp3",
    },

    {
      title: "Deep Ambient Focus",
      subtitle: "Stillwave Sounds",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      duration: "20 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Soft Rain Piano",
      subtitle: "Relaxing Notes",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      duration: "26 min",
      audio: "/sounds/River.mp3",
    },
  ];

  return (

    <div className="px-4 md:px-6 pt-4 pb-10">

      {/* TITLE */}
      <div className="mb-4">

        <h1
          className="
            text-white
            text-[42px]
            font-[300]
            leading-none
          "
        >
          Music
        </h1>

      </div>

      {/* FILTERS */}
      <div
        className="
          flex
          items-center
          gap-2
          flex-wrap
          mb-8
        "
      >

        {[
          "For You",
          "Moods",
          "Genres",
          "Soundscapes",
          "Kids",
          "Downloads",
        ].map((item, index) => (

          <button
            key={index}
            className={`
              h-[38px]
              px-5
              rounded-full
              text-[14px]
              transition-all
              ${
                index === 0
                  ? "bg-white text-[#123B72]"
                  : "bg-[#16386D]/90 text-white"
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

      {/* FEATURED HEADER */}
      <div className="mb-5 flex items-center justify-between">

        <h2
          className="
            text-white
            text-[28px]
            font-[400]
          "
        >
          Featured
        </h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="
            flex
            items-center
            gap-2
            text-white
            text-[17px]
            hover:opacity-80
            transition-all
          "
        >
          {showAll ? "Show Less" : "See All →"}
        </button>

      </div>

      {/* CARDS */}
      <div
        className={`
          ${
            showAll
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              : "flex gap-5 overflow-x-auto scrollbar-hide pb-2"
          }
        `}
      >

        {cards.map((card, index) => (

          <DashboardCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image}
            duration={card.duration}
            audio={card.audio}
            showAll={showAll}
          />

        ))}

      </div>

    </div>
  );
}