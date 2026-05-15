import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Check,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export const Route = createFileRoute("/dashboard/language")({
  component: DashboardLanguagePage,
});

function DashboardLanguagePage() {

  const languages = [
    "English",
    "Hindi",
    "Français",
    "Deutsch",
    "Italiano",
    "Español",
    "日本語",
    "한국어",
  ];

  const [selectedLanguage, setSelectedLanguage] =
    useState("English");

  useEffect(() => {

    const savedLanguage =
      localStorage.getItem("stillwave-language");

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

  }, []);

  function handleLanguageSelect(language: string) {

    setSelectedLanguage(language);

    localStorage.setItem(
      "stillwave-language",
      language
    );
  }

  return (

    <div className="pt-12">

      {/* TOP TABS */}
      <div className="flex items-center gap-3 flex-wrap">

        <Link
          to="/dashboard/my-stats"
          className="px-6 h-[42px] rounded-full bg-[#16386D] text-white flex items-center text-[18px]"
        >
          My Stats
        </Link>

        <Link
          to="/dashboard/subscription"
          className="px-6 h-[42px] rounded-full bg-[#16386D] text-white flex items-center text-[18px]"
        >
          Manage Subscription
        </Link>

        <Link
          to="/dashboard/account-settings"
          className="px-6 h-[42px] rounded-full bg-[#16386D] text-white flex items-center text-[18px]"
        >
          Account Details
        </Link>

        <Link
          to="/dashboard/change-password"
          className="px-6 h-[42px] rounded-full bg-[#16386D] text-white flex items-center text-[18px]"
        >
          Change Password
        </Link>

        <Link
          to="/dashboard/language"
          className="px-6 h-[42px] rounded-full bg-white text-[#123B72] flex items-center text-[18px]"
        >
          Language
        </Link>

      </div>

      {/* MAIN CARD */}
      <div className="mt-14 rounded-[34px] bg-[#10295B]/35 backdrop-blur-xl border border-white/5 min-h-[520px] px-14 py-14">

        <h1 className="text-[56px] font-[300] text-white">
          Language Preferences
        </h1>

        <p className="text-white/70 text-[22px] mt-4">
          Select your preferred Stillwave language
        </p>

        {/* LANGUAGE LIST */}
        <div className="mt-14 flex flex-col gap-5 max-w-[760px]">

          {languages.map((language) => {

            const isActive =
              selectedLanguage === language;

            return (

              <button
                key={language}
                onClick={() =>
                  handleLanguageSelect(language)
                }
                className="
                  h-[74px]
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  px-8
                  flex
                  items-center
                  justify-between
                  hover:bg-white/10
                  transition-all
                "
              >

                <span className="text-[24px] text-white font-[300]">
                  {language}
                </span>

                {isActive ? (

                  <div className="h-[42px] w-[42px] rounded-full bg-white flex items-center justify-center">

                    <Check
                      size={22}
                      className="text-[#123B72]"
                    />

                  </div>

                ) : (

                  <div className="h-[42px] w-[42px] rounded-full border-2 border-white/30" />

                )}

              </button>
            );
          })}

        </div>

      </div>
    </div>
  );
}