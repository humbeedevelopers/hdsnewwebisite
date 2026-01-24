"use client";

import { useState } from "react";
import Loader from "./Utils/Loader";

export default function AppShell({ children }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && (
        <Loader
          duration={5}
          onComplete={() => setReady(true)}
        />
      )}

      {ready && children}
    </>
  );
}
