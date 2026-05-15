import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import DashboardCard from "../components/dashboard/DashboardCard";

export const Route = createFileRoute("/dashboard/work")({
  component: DashboardWorkPage,
});

function DashboardWorkPage() {

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "Managing Overwhelm",
      subtitle: "Meditation • Chibs Okereke",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      duration: "8 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "No Pressure Pause",
      subtitle: "Meditation • Rose Nisker",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      duration: "10 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "Slow the Swirl in Your Mind",
      subtitle: "Grounding Exercise • Jay Shetty",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "2 min",
      audio: "/sounds/River.mp3",
    },

    {
      title: "Reducing Work Anxiety",
      subtitle: "Meditation • Chibs Okereke",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
      duration: "6 min",
      audio: "/sounds/Morning.mp3",
    },

    {
      title: "Calming Anxiety",
      subtitle: "Meditation • Tamara Levitt",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      duration: "12 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Reframing Negative Thoughts",
      subtitle: "Meditation • Stillwave",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      duration: "9 min",
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
          For Work
        </h1>

      </div>

      {/* SUBTITLE */}
      <div className="mb-8">

        <h2
          className="
            text-white
            text-[28px]
            font-[400]
          "
        >
          Managing Overwhelm
        </h2>

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