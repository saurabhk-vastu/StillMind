import { createFileRoute } from "@tanstack/react-router";

import { DashboardSettingsMenu } from "../components/dashboard/DashboardSettingsMenu";

import { auth } from "../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard/home")({
  component: DashboardHomePage,
});

function DashboardHomePage() {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []);

  return (

    <div className="w-full flex justify-center">

      <DashboardSettingsMenu
        userEmail={user?.email || "Guest User"}
      />

    </div>
  );
}