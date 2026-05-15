import { createFileRoute, Link } from "@tanstack/react-router";

import {
  User,
  Mail,
  Save,
} from "lucide-react";

import {
  auth,
} from "../lib/firebase";

import {
  updateProfile,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";

import {
  useEffect,
  useState,
} from "react";

export const Route = createFileRoute("/dashboard/account-settings")({
  component: DashboardAccountSettingsPage,
});

function DashboardAccountSettingsPage() {

  const [user, setUser] = useState<FirebaseUser | null>(null);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (currentUser) {

        setUser(currentUser);

        setName(currentUser.displayName || "");

        setEmail(currentUser.email || "");
      }
    });

    return () => unsubscribe();

  }, []);

  async function handleSave() {

    if (!user) return;

    try {

      setLoading(true);

      await updateProfile(user, {
        displayName: name,
      });

      alert("Account updated successfully");

    } catch (error: any) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="pt-5 pb-5 px-1 md:px-2">

      {/* TOP TABS */}
      <div className="flex items-center gap-3 flex-wrap">

        <DashboardTab
          to="/dashboard/my-stats"
          label="My Stats"
        />

        <DashboardTab
          to="/dashboard/subscription"
          label="Manage Subscription"
        />

        <DashboardTab
          active
          to="/dashboard/account-settings"
          label="Account Details"
        />

        <DashboardTab
          to="/dashboard/change-password"
          label="Change Password"
        />

        <DashboardTab
          to="/dashboard/language"
          label="Language"
        />

      </div>

      {/* MAIN CARD */}
      <div
        className="
        relative
        overflow-hidden
        mt-5
        rounded-[24px]
        border
        border-white/10
        bg-[#0D2453]/55
        backdrop-blur-2xl
        shadow-[0_10px_60px_rgba(0,0,0,0.35)]
        min-h-[300px]
        px-7
        py-8
      "
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16386D]/10 via-[#10295B]/30 to-[#0A1E45]/70" />

        {/* CONTENT */}
        <div className="relative z-10">

          {/* TITLE */}
          <h1
            className="
            text-[26px]
            md:text-[34px]
            leading-none
            font-[300]
            text-white
          "
          >
            Account Details
          </h1>

          {/* SUBTITLE */}
          <p
            className="
            text-white/70
            text-[13px]
            mt-3
            font-[300]
          "
          >
            Manage your Stillwave profile information
          </p>

          {/* FORM */}
          <div className="mt-8 flex flex-col gap-5 max-w-[650px]">

            {/* NAME */}
            <div>

              <div className="flex items-center gap-2 mb-3">

                <User
                  size={16}
                  className="text-white/70"
                />

                <p className="text-white text-[13px]">
                  Full Name
                </p>

              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="
                  w-full
                  h-[50px]
                  rounded-[16px]
                  bg-white/[0.04]
                  border
                  border-white/10
                  px-5
                  text-white
                  text-[15px]
                  outline-none
                  placeholder:text-white/35
                  backdrop-blur-xl
                "
              />

            </div>

            {/* EMAIL */}
            <div>

              <div className="flex items-center gap-2 mb-3">

                <Mail
                  size={16}
                  className="text-white/70"
                />

                <p className="text-white text-[13px]">
                  Email Address
                </p>

              </div>

              <input
                type="email"
                value={email}
                disabled
                readOnly
                className="
                  w-full
                  h-[50px]
                  rounded-[16px]
                  bg-white/[0.02]
                  border
                  border-white/10
                  px-5
                  text-white/60
                  text-[15px]
                  outline-none
                  cursor-not-allowed
                  backdrop-blur-xl
                "
              />

              <p className="text-white/35 text-[11px] mt-2">
                Email address cannot be changed
              </p>

            </div>

            {/* SAVE BUTTON */}
            <button
              onClick={handleSave}
              disabled={loading}
              className="
                mt-1
                h-[48px]
                w-fit
                px-9
                rounded-full
                bg-white
                text-[#123B72]
                text-[15px]
                font-[500]
                flex
                items-center
                gap-2
                hover:scale-[1.02]
                transition-all
              "
            >

              <Save size={16} />

              {loading ? "Saving..." : "Save Changes"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


interface DashboardTabProps {
  to: string;
  label: string;
  active?: boolean;
}

function DashboardTab({
  to,
  label,
  active,
}: DashboardTabProps) {

  return (
    <Link
      to={to}
      className={`
        h-[42px]
        px-6
        rounded-full
        flex
        items-center
        justify-center
        text-[15px]
        font-[400]
        transition-all
        duration-300
        border
        backdrop-blur-md
        ${
          active
            ? "bg-white text-[#16386D] border-white shadow-lg"
            : "bg-[#16386D]/90 text-white border-[#254D89] hover:bg-[#1B437E]"
        }
      `}
    >
      {label}
    </Link>
  );
}