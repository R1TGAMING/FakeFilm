import React from "react";

import ChangeModeButton from "../UI/Buttons/ChangeModeButton";
function NavBar() {
  return (
    <nav className="m-5 flex items-center justify-between ">
      <h2 className="font-bold">FakeFilm</h2>
      <ul className="flex space-x-4  items-center cursor-pointer">
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
