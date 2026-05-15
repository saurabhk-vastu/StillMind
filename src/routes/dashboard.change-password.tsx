import { createFileRoute, Link } from "@tanstack/react-router";


import { signOut } from "firebase/auth";

import {
  Lock,
  Save,
} from "lucide-react";

import {
  auth,
} from "../lib/firebase";

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

import {
  useState,
} from "react";

export const Route = createFileRoute("/dashboard/change-password")({
  component: DashboardChangePasswordPage,
});

function DashboardChangePasswordPage() {

  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handlePasswordUpdate() {

    const user = auth.currentUser;

    if (!user || !user.email) {
      return alert("User not found");
    }

    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match");
    }

    if (newPassword.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    try {

      setLoading(true);

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await reauthenticateWithCredential(
        user,
        credential
      );

      await updatePassword(user, newPassword);

      alert("Password updated successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

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
          to="/dashboard/account-settings"
          label="Account Details"
        />

        <DashboardTab
          active
          to="/dashboard/change-password"
          label="Change Password"
        />

        <button
  onClick={async () => {

    await signOut(auth);

    window.location.href = "/signin";

  }}
  className="
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
    bg-[#16386D]/90
    text-white
    border-[#254D89]
    hover:bg-[#1B437E]
  "
>
  Log Out
</button>

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
            Change Password
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
            Update your account password securely
          </p>

          {/* FORM */}
          <div className="mt-8 flex flex-col gap-5 max-w-[650px]">

            

            {/* NEW PASSWORD */}
            <div>

              <div className="flex items-center gap-2 mb-3">

                <Lock
                  size={16}
                  className="text-white/70"
                />

                <p className="text-white text-[13px]">
                  New Password
                </p>

              </div>

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
                placeholder="Enter new password"
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

            {/* CONFIRM PASSWORD */}
            <div>

              <div className="flex items-center gap-2 mb-3">

                <Lock
                  size={16}
                  className="text-white/70"
                />

                <p className="text-white text-[13px]">
                  Confirm Password
                </p>

              </div>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm new password"
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

            {/* SAVE BUTTON */}
            <button
              onClick={handlePasswordUpdate}
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

              {loading
                ? "Updating..."
                : "Update Password"}

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