import React from "react";

function NavBar() {
  return (
    <nav className="m-5 flex items-center justify-between  ">
      <h2 className="font-bold">FakeFilm</h2>
      <ul className="flex space-x-4  items-center cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Prices</li>
      </ul>
    </nav>
  );
}

export default NavBar;
