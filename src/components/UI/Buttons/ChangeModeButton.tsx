import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ChangeModeButton() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect((): void => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="bg-gray-800 dark:bg-white dark:text-gray-800 text-white p-3 rounded-full cursor-pointer font-bold"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <>
          Light Mode{" "}
          <span className="mx-1">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </>
      ) : (
        <>
          Dark Mode{" "}
          <span className="mx-1">
            <FontAwesomeIcon icon={faMoon} />{" "}
          </span>
        </>
      )}
    </button>
  );
}

export default ChangeModeButton;
