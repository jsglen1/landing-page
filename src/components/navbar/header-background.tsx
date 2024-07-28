import React from "react";

interface Props {
  children: React.ReactElement;
}

export default function HeaderBackground({ children }: Props) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md bg-background`}
    >
      {children}
    </header>
  );
}
