import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import DashboardCard from "../components/dashboard/DashboardCard";

export const Route = createFileRoute("/dashboard/wisdom")({
  component: DashboardWisdomPage,
});

function DashboardWisdomPage() {

  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: "5 Steps to Stronger Relationships",
      subtitle: "Wisdom • Jay Shetty",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      duration: "14 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Mattering: Feeling Valued and Connected",
      subtitle: "Wisdom • Jennifer Wallace",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      duration: "20 min",
      audio: "/sounds/Chirping.mp3",
    },

    {
      title: "Recharge with David Ko",
      subtitle: "Wisdom • David Ko",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      duration: "18 min",
      audio: "/sounds/River.mp3",
    },

    {
      title: "Build Habits that Actually Stick",
      subtitle: "Wisdom • Dr. Julie Smith",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      duration: "11 min",
      audio: "/sounds/Morning.mp3",
    },

    {
      title: "For Moms, With Love",
      subtitle: "Wisdom • Jennifer Wallace",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      duration: "16 min",
      audio: "/sounds/Nature.mp3",
    },

    {
      title: "Daily Mindset Reset",
      subtitle: "Wisdom • Stillwave",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      duration: "13 min",
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
          Wisdom
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
          "All",
          "Motivation",
          "Mindset",
          "Habits",
          "Emotions",
          "Relationships",
          "Performance",
          "Gratitude",
          "Work Life",
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