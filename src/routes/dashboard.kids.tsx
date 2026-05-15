import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import DashboardCard from "../components/dashboard/DashboardCard";

export const Route = createFileRoute("/dashboard/kids")({
  component: DashboardKidsPage,
});

function DashboardKidsPage() {

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "Wind in the Willows",
      subtitle: "Tamara Levitt",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      duration: "18 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Thomas and the North Star",
      subtitle: "Kate Winslet",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      duration: "22 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "History of Animal Sleeping Behaviors",
      subtitle: "Ms. Night Owl",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      duration: "16 min",
      audio: "/sounds/River.mp3",
    },

    {
      title: "Avatar: Tea, Tails and Tides",
      subtitle: "Cat Nguyen",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      duration: "20 min",
      audio: "/sounds/Morning.mp3",
    },

    {
      title: "Dreamland Adventures",
      subtitle: "Stillwave Kids",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      duration: "14 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Sleepy Forest Tales",
      subtitle: "Calm Kids",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      duration: "17 min",
      audio: "/sounds/River.mp3",
    },
  ];

  return (

    <div className="px-4 md:px-6 pt-4 pb-10">

      {/* TITLE */}
      <div className="mb-8">

        <h1
          className="
            text-white
            text-[42px]
            font-[300]
            leading-none
          "
        >
          Calm Kids
        </h1>

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