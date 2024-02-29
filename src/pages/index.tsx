import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import ThreeScene from "@/components/ThreeScene";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex-grow flex flex-col items-center justify-center w-full overflow-x-clip max-w-[1240px]">
        <section className="h-[85vh] w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4">
          <div className="h-80 md:h-1/2 w-auto pt-6 z-10">
            <Image
              src="/steik23.svg"
              className="cursor-pointer object-contain mix-blend-multiply h-4 min-h-full w-auto py-2"
              height={30}
              width={30}
              alt="Logo STEI-K 23"
              blurDataURL="https://steik23.netlify.app/steik23.svg"
              priority
            />
          </div>
          <div className="w-fit space-y-2 md:space-y-4">
            <h1 className="font-bold text-xl sm:text-3xl md:text-5xl">Syntax | STEI-K 23</h1>
            <h2 className="text-lg sm:text-2xl italic">
              <TypeAnimation
                sequence={["Code", 500, "Code, Create", 500, "Code, Create, Connect!", 1000, "", 0]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />{" "}
            </h2>
            <p>Website masih dalam pembuatan, mohon bersabar</p>
            <div className="pt-4">
              <p>Contact:</p>
              <ul className="list-disc pl-6">
                <li>
                  <p>@yonatan_nyo (instagram)</p>
                </li>
                <li>
                  <p>@yonatanedwardn (line)</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="h-0 min-h-screen w-full flex items-center justify-center rounded-t-[6%] bg-slate-50 px-4">
          <ComingSoon showKembali={false} />
        </section>
      </section>
    </>
  );
}
