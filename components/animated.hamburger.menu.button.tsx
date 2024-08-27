"use client";

import { useCallback, useRef } from "react";

export const Menu = () => {
  const menu = useRef<HTMLDivElement>(null);
  const toggleMenu = useCallback(() => {
    if (menu.current) {
      menu.current.classList.toggle("hamburger-toggle");
      document.getElementById("menu")?.classList.toggle("hidden");
    }
  }, [menu]);
  return (
    <div
      className="grid place-content-center w-10 h-10 mx-auto sm:hidden"
      onClick={toggleMenu}
      ref={menu}
    >
      <div className="w-6 h-1 bg-white before:content-[''] before:absolute before:w-4 before:h-1 before:bg-white before:-translate-y-2 after:content-[''] after:absolute after:w-4 after:h-1 after:bg-white after:translate-y-2"></div>
    </div>
  );
};
