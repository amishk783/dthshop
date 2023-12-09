import Image from "next/image";
import { Fragment } from "react";

import Link from "next/link";
import Signupform from "./components/Signupform";
import { dthinfo } from "@/constants";
import CardDth from "./components/CardDth";
import CardDetail from "./components/CardDetail";
import { Info } from "@/constants";
export default function Home() {
  return (
    <Fragment>
      <header className="flex justify-center md:justify-around py-3 items-center align-middle bg-yellow-100">
        <Link href={""}>
          <Image src="/logo1.jpg" alt="logo" width={100} height={50} />
        </Link>
        <div className="hidden md:flex gap-10">
          <h3 className="hover:text-cyan-300">Tata Play DTH Connection</h3>
          <h3 className="hover:text-cyan-300"> Dish Tv New connection</h3>
        </div>
        <button className="hidden md:block md:text-lg bg-red-600 m-2 px-4 py-2 rounded-md text-slate-50 text-center">Call us</button>
      </header>
      <main className="flex flex-col items-center justify-between pt-10">
        <div className="z-10 w-full items-center justify-center font-mono text-sm lg:flex h-2/3">
          <div className=" items-center mt-5 justify-center">
            <h1 className="text-center text-3xl">Tata Play Network</h1>
            <h3 className=" text-center text-2xl">1299</h3>

            <div className="flex flex-col md:gap-24 mt-10 md:flex-row items-center">
              <Signupform />
              <Image
                src="/Setupbox.png"
                alt="show"
                width={400}
                height={100}
                className="p-8 md:w-[300px] h-[250px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center gap-5">
            <h1 className=" text-center text-4xl">
              Choose your Set Top Box now.
            </h1>
            <h2 className=" text-sm px-5 text-center md:text-xl">
              View our range of Set Top Boxes available with different
              specifications
            </h2>
            <h1 className="text-center text-3xl">1 Month Offer</h1>
          </div>
          <div className="grid m-6 text-center mt-10 lg:max-w-5xl  lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-10">
            {dthinfo.map((dth) => (
              <CardDth
                key={dth.plan}
                price={dth.price}
                img={dth.img}
                plan={dth.plan}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center text-3xl font-mono">
          <div>
            <h1>Why Choose Us</h1>
          </div>

          <div className="grid m-6 text-center mt-10 lg:max-w-5xl  lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-10">
            {Info.map((info) => (
              <CardDetail key={info.title} title={info.title} img={info.img} />
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-black ">
        <div className="mt-10 flex flex-col justify-center md:gap-5 items-center">
          <h1 className=" text-gray-50">Privacy Policy</h1>
          <h2 className=" text-gray-50 "> Terms & Conditions</h2>
        </div>
      </footer>
    </Fragment>
  );
}
