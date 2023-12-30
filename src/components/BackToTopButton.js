import { useState, useEffect } from "react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          className="fixed bottom-12 right-12 w-12 text-5xl"
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};
