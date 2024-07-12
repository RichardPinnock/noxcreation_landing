"use client";
import { IconArrowNarrowUp } from "@tabler/icons-react";
import React from "react";

export default function ScrolltoTop() {
  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="fixed bottom-4 right-4 p-2 bg-brand rounded-full text-primary-foreground z-50 hover:shadow-lg"
      >
        <IconArrowNarrowUp />
      </button>
    </div>
  );
}
