import React from "react";

const NavBar = () => {
  const navLinks = [
    { display: "Home" },
    { display: "Listings" },
    { display: "Let's move" },
    { display: "About Us" },
  ];

  return (
    <div className="w-[80%] h-[80px] flex flex-row justify-between items-center px-12 rounded-lg sticky top-4 z-9999 bg-white/30 backdrop-blur-lg">
      <img
        src="../src/assets/marci-metzger-final.png"
        height={250}
        width={250}
        alt="logo"
      />
      <ul className="flex flex-row gap-8 uppercase cursor-pointer font-montserrat font-semibold">
        {navLinks.map((links) => (
          <li key={links.display}>{links.display}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
