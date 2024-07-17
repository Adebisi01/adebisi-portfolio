"use client";

import { ProjectBox } from "@/components";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import {
  FaFacebookMessenger,
  FaLinkedin,
  FaRegCircle,
  FaStarOfLife,
  FaWhatsapp,
} from "react-icons/fa6";
import { GoDotFill, GoNorthStar } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { PiPerson } from "react-icons/pi";
import { TbNorthStar } from "react-icons/tb";
import { useEffect, useLayoutEffect } from "react";
import { SiKdenlive } from "react-icons/si";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);
  const { contextSafe } = useGSAP();
  const showSocials = contextSafe(() => {
    gsap.from(".socials", {
      opacity: 0,
      y: 10,
      stagger: 0.3,
      duration: 1,
    });
  });
  const scrollToAbout = contextSafe(() => {
    gsap.to(window, { duration: 2, scrollTo: { y: "#about", offsetY: 50 } });
  });
  const scrollToProjects = contextSafe(() => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#projects_title", offsetY: 50 },
    });
  });
  useGSAP(() => {
    gsap.to("#circle", {
      rotateZ: 360,
      rotateX: 360,
      duration: 5,
      repeat: -1,
    });
    const tl = gsap.timeline();
    tl.from(
      ".hello",
      {
        y: 50,
        duration: 4,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic",
      },
      "anime0"
    );
    tl.from(
      "#introduction > h3,#introduction > section > p",
      {
        y: 50,
        duration: 4,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic",
      },
      "anime0"
    );

    tl.from(
      "#role p",
      {
        y: 50,
        duration: 4,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic",
      },
      "anime0"
    );
    gsap.from("#projects_title", {
      x: 10,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        // scroller: "b",
        scrub: 0.5,
        trigger: "#projects_title",
        // markers: true,
        start: "top 70%",
      },
    });
    [1, 2, 3, 4, 5].forEach((elem) => {
      gsap.from(`#projectbox${elem}`, {
        y: 150,
        opacity: 0,
        duration: 3,
        ease: "elastic",
        scrollTrigger: {
          trigger: `#projectbox${elem}`,
          start: "top bottom",
          // end: "top top",
          // scrub: true,
        },
      });
    });
    gsap.from("#talk", {
      backgroundImage: "linear-gradient(to left, purple, blue)",
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    gsap
      .from(".container_border", {
        backgroundImage: "linear-gradient(to left, purple, blue )",
        duration: 1,
        repeat: -1,
        yoyo: true,
      })
      .then(() => {
        gsap.to(".container_border", {
          backgroundImage: "linear-gradient(to right, purple, yellow)",
          duration: 1,
          repeat: -1,
          yoyo: true,
        });
      });
    gsap.from(".about", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        scrub: 0.5,
      },
    });
    gsap.to(".resume", {
      repeat: -1,
      x: -500,
      duration: 10,
      yoyo: true,
    });
  });

  return (
    <>
      {document.readyState === "complete" && (
        <main className="main bg-gray-950 text-white  min-h-[100svh] ">
          <div className="p-3">
            <section className="flex justify-between w-auto items-center">
              <p className="flex items-center gap-2">
                <span className="rounded-xl bg-white p-2">
                  <PiPerson className="text-3xl text-black" />
                </span>{" "}
                <span
                  onClick={() => {
                    scrollToAbout();
                  }}
                  className="text-lg cursor-pointer"
                >
                  Adebisi .{" "}
                  <FaRegCircle
                    id="circle"
                    className="inline-block font-extrabold text-xl "
                  />
                </span>
              </p>
              <button
                className="animate-bounce"
                onClick={() => {
                  scrollToProjects();
                }}
              >
                <SiKdenlive
                  id="project_button"
                  className="text-2xl rotate-90  text-purple-700 "
                />
              </button>
            </section>
            {/* <section className="h-[svh]  ">
          <Image src="/me_no _bac.png" alt="Adebisi's picture" fill={true} />
        </section> */}
            <section>
              <h1 className="text-9xl pt-28 text-center flex justify-center ">
                <p className="hello">h</p>
                <p className="hello">e</p>
                <p className="hello">l</p>
                <p className="hello">l</p>
                <p className="hello">o</p>
              </h1>
              <div
                className=" text-7xl pt-5 text-center introduction"
                id="introduction"
              >
                <h3>I&apos m</h3>
                <section className="flex justify-center">
                  <p>A</p>
                  <p>d</p>
                  <p>e</p>
                  <p>b</p>
                  <p>i</p>
                  <p>s</p>
                  <p>i</p>
                </section>
              </div>
              <div id="role" className="text-5xl pt-5 text-center ">
                <p>A</p>
                <p>Full</p>
                <p>Stack</p>
                <p>Developer</p>
              </div>
            </section>
            <section>
              <p className="text-5xl pt-16" id="projects_title">
                Live & functional projects
              </p>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  id={`projectbox${num}`}
                  className=" bg-gradient-to-r container_border from-blue-500 via-yellow-400 to-purple-500 px-1 rounded-lg"
                >
                  <section className="py-1">
                    <ProjectBox />
                  </section>
                </div>
              ))}
            </div>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/16NWCjzTL_Z6QardCY03Mp4PcmhAsrIsAFy3sMrOmV80/edit?usp=sharing"
              className="flex items-center justify-around"
            >
              <button
                id=""
                className=" resume text-white py-5 text-xl flex items-center gap-3"
              >
                <TbNorthStar /> <GoNorthStar />
                Check Out My Resume <FaStarOfLife />
              </button>
              <button
                id=""
                className=" resume text-white py-5 text-xl flex items-center gap-3"
              >
                <TbNorthStar /> <GoNorthStar />
                Check Out My Resume <FaStarOfLife />
              </button>
              <button
                id=""
                className=" resume text-white py-5 text-xl flex items-center gap-3"
              >
                <TbNorthStar /> <GoNorthStar />
                Check Out My Resume <FaStarOfLife />
              </button>
            </a>

            <div className="flex flex-col gap-3 w-auto">
              <center>
                <button
                  type="button"
                  onClick={() => {
                    showSocials();
                  }}
                  id="talk"
                  className="bg-gradient-to-r my-2 from-blue-500 to-purple-500 border p-3 w-fit"
                >
                  Lets Talk
                </button>
              </center>
              <section className="flex justify-evenly text-5xl ">
                <a target="_blank" href="https://wa.me/qr/QXQT4FQ75E56I1">
                  <FaWhatsapp className="socials" />{" "}
                </a>
                <FaFacebookMessenger className="socials" />{" "}
                <a href="mailto:oluwafemiadebisi01@gmail.com">
                  <IoMdMail className="socials" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/oluwafemi-adebisi"
                >
                  <FaLinkedin className="socials" />
                </a>
              </section>
            </div>
            <div id="about" className=" text-center text-white">
              <h1 className="text-white font-bold  wor text-5xl  py-5">
                About Me
              </h1>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
              <p className=" font-light about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                illo!
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
