"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarItems, socialIcons } from "@/app/utils/navbar";
import { useViewportHeight } from "@/app/hooks/useViewportHeight";
import MCLogo from "@/public/logo-no-background.svg";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navbarHeight = 65; // height of the navbar in pixels
  const sectionHeight = useViewportHeight(navbarHeight);

  const handleShowMobileNav = () => setShowMobileNav((prevState) => !prevState);

  return (
    <>
      <section className="bg-white sticky top-0 w-full h-navbar z-50">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image
              src={MCLogo}
              alt="logo zawierające nazwę oraz aparat"
              height={navbarHeight}
            />
          </Link>
          <button
            id="hamburger-button"
            className={`text-2xl lg:hidden mr-6 cursor-pointer relative w-8 h-8 ${showMobileNav && "toggle-btn"}`}
            onClick={handleShowMobileNav}
          >
            <div
              className="
            bg-black w-8 h-1 rounded absolut top-4 -mt-0.5
            transition-all duration-500
            before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:mt-1
            before:-translate-x-4 before:-translate-y-3
            before:transition-all before:duration-500
            after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:-mt-1
            after:-translate-x-4 after:translate-y-3
            after:transition-all after:duration-500
            "
            ></div>
          </button>
          <nav
            className="items-center hidden px-8 lg:flex"
            aria-label="desktop"
          >
            <div className="flex space-x-6">
              {navbarItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-500 ml-[24px] font-serif font-bold uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              {socialIcons.map(({ id, href, target, icon, ariaName }) => (
                <Link
                  key={id}
                  href={href}
                  target={target}
                  className="text-gray-600 hover:text-pink-500 ml-6 font-serif font-bold uppercase tracking-wider"
                  aria-label={ariaName}
                >
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>
      {showMobileNav && (
        <section
          id="mobile-menu"
          className="absolute flex top-[var(--navbar-height)] bg-black w-full text-4xl flex-col justify-content-center z-10 origin-top animate-open-menu"
          style={{ height: sectionHeight }}
        >
          <nav
            className="flex flex-col gap-10 items-center py-8 h-full"
            aria-label="mobile"
          >
            {navbarItems.map(({ id, href, name }) => (
              <Link
                key={id}
                href={href}
                onClick={handleShowMobileNav}
                className="text-gray-300 w-full text-center hoover:opcaity-90"
              >
                {name}
              </Link>
            ))}
            <div className="mt-auto flex gap-6">
              {socialIcons.map(({ id, href, target, icon, ariaName }) => (
                <Link
                  key={id}
                  href={href}
                  target={target}
                  className="text-gray-600 font-serif font-bold uppercase tracking-wider"
                  aria-label={ariaName}
                >
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </nav>
        </section>
      )}
    </>
  );
};

export default Navbar;
