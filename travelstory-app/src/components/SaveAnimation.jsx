import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SaveAnimation({ isSaving, setIsSaving }) {
  const ref = useRef();

  useEffect(() => {
    if (isSaving) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => {
              gsap.to(ref.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => setIsSaving(false),
              });
            }, 1500);
          },
        }
      );
    }
  }, [isSaving]);

  return isSaving ? (
    <div
      ref={ref}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
    >
      <div className="bg-white p-6 rounded shadow-lg text-center text-lg font-semibold">
        Saving your story...
      </div>
    </div>
  ) : null;
}


