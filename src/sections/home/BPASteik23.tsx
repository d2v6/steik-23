"use client";
import Image from "next/image";
import React from "react";

const BPASteik23 = () => {
  return (
    <section className="max-w-[1200px] w-full mx-auto flex py-20 justify-between font-inter" data-aos="fade-up">
      <div className="flex flex-col w-[48%] items-start gap-4 justify-center">
        <h2 className="text-5xl font-bold">BPA STEI-K 2023</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <button className="bg-blue-900 px-4 py-2 text-white rounded-md hover:drop-shadow-xl hover:brightness-110">
          <p className="text-xl">Meet Our Team</p>
        </button>
      </div>
      <div className="w-[48%] h-full">
        <Image
          src="https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png"
          alt="https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png"
          width={1200}
          height={900}
          className="h-full w-full object-cover select-none rounded-xl drop-shadow-md hover:drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default BPASteik23;
