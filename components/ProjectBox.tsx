import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
const ProjectBox = () => {
  return (
    <>
      <div className=" px-2 py-4 bg-white rounded-lg ">
        <center className="bg-gradient-to-br py-3 from-[#1D2488] to-[#5a54eb] rounded-xl center">
          <Image
            className=""
            src="/F_big.png"
            alt="Firazi Image"
            width={150}
            height={150}
          />
        </center>

        <section className="space-y-2">
          <h6 className="text-gray-500 font-light pt-3">
            April 2023 - Still Ongoing
          </h6>
          <h3 className="text-lg text-gray-900 font-bold">
            Firazi -{" "}
            <span className="italic font-normal"> Uleval Technologies</span>
          </h3>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            officia fugit fuga aperiam quidem nulla exercitationem deleniti,
            pariatur aut perspiciatis amet culpa? Fugiat, aliquam perspiciatis?
          </p>
          <a
            href="app.firazi.com"
            className=" flex items-center bg-[#1d2488] mt-3 p-2 rounded-xl gap-2 w-fit text-white "
          >
            <span>Open App</span> <FiExternalLink />
          </a>
        </section>
      </div>
    </>
  );
};

export default ProjectBox;
