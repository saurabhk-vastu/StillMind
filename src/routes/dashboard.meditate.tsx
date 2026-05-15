import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import DashboardCard from "../components/dashboard/DashboardCard";

export const Route = createFileRoute("/dashboard/meditate")({
  component: DashboardMeditatePage,
});

function DashboardMeditatePage() {

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "Morning Birds",
      subtitle: "Nature Sounds • 10 mins",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      duration: "10 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "River Flow",
      subtitle: "Calming Water • 20 mins",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      duration: "20 min",
      audio: "/sounds/River.mp3",
    },

    {
      title: "Deep Nature",
      subtitle: "Forest Relaxation • 18 mins",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      duration: "18 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Soft Morning",
      subtitle: "Peaceful Start • 15 mins",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      duration: "15 min",
      audio: "/sounds/Morning.mp3",
    },

    {
      title: "Night Birds",
      subtitle: "Sleep Atmosphere • 25 mins",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      duration: "25 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "Ocean Waves",
      subtitle: "Ocean Therapy • 30 mins",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      duration: "30 min",
      audio: "/sounds/Nature.mp3",
    },
  ];

  return (

    <div className="px-4 md:px-6 pt-5 pb-10">

      {/* TITLE */}
      <div className="mb-5">

        <h1
          className="
            text-white
            text-[44px]
            leading-none
            font-[300]
          "
        >
          Meditation
        </h1>

      </div>

      {/* FILTERS */}
      <div
        className="
          flex
          items-center
          gap-2
          flex-wrap
          mb-10
        "
      >

        {[
          "All",
          "Sleep",
          "Anxiety",
          "Quick Meditations",
          "Beginners",
          "Stress",
          "Work",
          "Self-Care",
          "With Soundscapes",
          "Inner Peace",
          "Focus",
          "Emotions",
          "Less Guidance",
          "Relationships",
          "Personal Growth",
          "Kids",
          "By Guest Instructors",
        ].map((item, index) => (

          <button
            key={index}
            className={`
              h-[40px]
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

      {/* FEATURED */}
      <div className="mb-5 flex items-center justify-between">

        <h2
          className="
            text-white
            text-[40px]
            font-[300]
          "
        >
          Featured
        </h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="
            text-white
            text-[18px]
            border
            border-white/20
            rounded-full
            px-5
            py-2
            hover:bg-white/10
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
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
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