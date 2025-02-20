"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarItems, socialIcons } from "@/app/utils/navbar";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 w-full z-50 h-navbar">
      <div className="w-full py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Fotograf Ślubny
        </Link>
        <div className="flex items-center">
          <ul className="flex space-x-6">
            {navbarItems.map((item) => (
              <li
                key={item.id}
                className="ml-[24px] font-serif font-bold uppercase tracking-wider"
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex space-x-4">
            {socialIcons.map(({ id, href, target, icon, ariaName }) => (
              <li
                key={id}
                className="ml-6 font-serif font-bold uppercase tracking-wider"
              >
                <Link
                  href={href}
                  target={target}
                  className="text-gray-600 hover:text-pink-500"
                  aria-label={ariaName}
                >
                  <FontAwesomeIcon icon={icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
