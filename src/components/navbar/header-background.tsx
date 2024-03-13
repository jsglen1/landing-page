"use client";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactElement;
}

export default function HeaderBackground({ children }: Props) {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const isDarkMode =
      rootStyles.getPropertyValue("--background") === "224 71.4% 4.1%";

    setBackground(isDarkMode ? "bg-dark-background" : "bg-background");
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md ${background}`}
    >
      {children}
    </header>
  );
}
