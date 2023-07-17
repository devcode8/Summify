import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full mb-10 pt-7 p-6 sm:px-20 flex justify-between items-center">
      <h1 className="w-28 text-3xl font-bold">Summify</h1>
      <button
        type="button"
        onClick={() => {
          window.open("https://github.com/devcode8");
        }}
        className="black_btn"
      >
        Github
      </button>
    </nav>
  );
};

export default Navbar;
