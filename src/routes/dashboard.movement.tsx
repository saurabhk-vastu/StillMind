import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import DashboardCard from "../components/dashboard/DashboardCard";

export const Route = createFileRoute("/dashboard/movement")({
  component: DashboardMovementPage,
});

function DashboardMovementPage() {

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "Daily Move",
      subtitle: "Movement • Mel Mah",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      duration: "10 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Mindful Walking",
      subtitle: "Walking Practice • Stillwave",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      duration: "12 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "Gentle Morning Stretch",
      subtitle: "Movement • Calm Body",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      duration: "15 min",
      audio: "/sounds/River.mp3",
    },

    {
      title: "Standing Reset",
      subtitle: "Focus Movement • Stillwave",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2",
      duration: "8 min",
      audio: "/sounds/Morning.mp3",
    },

    {
      title: "Relaxing Floor Flow",
      subtitle: "Body Relaxation • Mel Mah",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "14 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Movement for Calm",
      subtitle: "Movement • Stillwave",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      duration: "11 min",
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
          Movement
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
          "Walking",
          "Standing",
          "Sitting",
          "Lying Down",
          "Music",
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