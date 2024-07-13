import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import { FaBurger } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import gsap from "gsap";
const NavBar = () => {
  const [activeTab, setactiveTab] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const { contextSafe } = useGSAP();
  const openNavBar = contextSafe(() => {
    const tl2 = gsap.timeline({ delay: 0 });

    tl2.from(
      "#mobile_nav",
      {
        borderTopRightRadius: 3000,
        borderBottomRightRadius: 3000,
        duration: 0.5,
        // ease: "circ.inOut",
      },
      "anime3"
    );
    tl2.from(
      "#mobile_nav",
      {
        x: -500,
        duration: 0.5,
        // ease: "back.inOut",
      },
      "anime3"
    );
    tl2.from(".nav_items", {
      stagger: 0.5,
      duration: 1,
      x: -400,
    });
    // if (navOpen) {
    //   //   tl2.play();
    // } else {
    //   //   tl2.reverse();
    // }
  });
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          openNavBar();
          setNavOpen(!navOpen);
        }}
      >
        <FaBurger className="text-2xl" />
      </button>
      {/* <div
        id="mobile_nav"
        className=" bg-gray-700 text-7xl flex flex-col gap-3 items-center justify-center  fixed h-[100svh] left-0 w-full z-[5000] "
      >
        {["home", "projects", "about"].map((tab) => (
          <button
            onClick={() => {
              setactiveTab(tab);
            }}
            className=" nav_items font-bold text-white capitalize  flex items-center"
          >
            {tab === activeTab && <GoDotFill className="text-3xl" />} {tab}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default NavBar;
