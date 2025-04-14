import { useState, useEffect } from "react";

import ChangeModeButton from "../UI/Buttons/ChangeModeButton";
function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect((): void => {
    const listBar = document.getElementById("listBar");
    if (openMenu) {
      listBar?.classList.add("flex");
      listBar?.classList.remove("hidden");
    } else {
      listBar?.classList.add("hidden");
      listBar?.classList.remove("flex");
    }
  }, [openMenu]);

  return (
    <nav className="p-5 flex flex-col backdrop-blur-sm  z-50 space-y-2 sm:space-y-0 fixed left-0 top-0 right-0 sm:flex-row sm:items-center sm:justify-between justify-start  ">
      <h2 className="font-bold">FakeFilm</h2>
      <button
        className="sm:hidden absolute cursor-pointer right-2 "
        onClick={() => setOpenMenu(!openMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
        </svg>
      </button>

      <ul
        id="listBar"
        className="hidden space-y-2 sm:space-y-0  p-2 sm:static sm:flex top-2 left-52 sm:space-x-4  sm:flex-row  flex-col items-center cursor-pointer"
      >
        <li>
          <ChangeModeButton />
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Prices</li>
      </ul>
    </nav>
  );
}

export default NavBar;
