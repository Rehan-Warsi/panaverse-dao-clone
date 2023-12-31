"use client";
import Wrapper from "@/Components/Shared/Wrapper";
import Image from "next/image";
import Logo from "/public/panaverse-log.png";
import angel from "@/Assets/Images/angle-down-solid.svg";
import { useState } from "react";
import { programData } from "../Widgets/SpecializedTrack";
import Link from "next/link";

const Header = () => {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to show the dropdown
  // const showDropdown = () => {
  //   setDropdownOpen(true);
  // };

  // Function to hide the dropdown
  // const hideDropdown = () => {
  //   setDropdownOpen(false);
  // };

  return (
    
      <header className="sticky top-0 bg-white z-10 opacity-90 backdrop-blur-md">
        <Wrapper>
          <nav className="flex justify-between items-center">
            <div>
              <Image
                src={Logo}
                alt="Panaverse Logo"
                width={150}
                height={150}
              ></Image>
            </div>
            <ul
              className="flex gap-x-8 cursor-pointer font-medium"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <div className="cursor-pointer flex">
                <li className="relative flex">
                  Courses
                  <span className="flex">
                    <Image
                      className="mt-1 ml-2"
                      src={angel}
                      alt="Angel Down"
                    ></Image>
                  </span>
                  {/* Dropdown content */}
                  {isDropdownOpen && (
                    <ul className="absolute bg-white mx-2 my-6 min-w-max right-0 px-4 border rounded-md ">
                      {programData.map((item) => (
                        <Link key={item.header} href={`/quarter/${item.slug}`}>
                          <li className="my-2 px-4 py-2 text-slate-600 hover:bg-slate-100">
                            {item.header}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            </ul>
          </nav>
        </Wrapper>
      </header>

  );
};

export default Header;
