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
      <header className="flex justify-around py-3 items-center align-middle bg-yellow-100">
        <Link href={""}>
          <Image src="/logo1.jpg" alt="logo" width={100} height={50} />
        </Link>
        <div className="flex gap-10">
          <h3 className="hover:text-cyan-300">Tata Play DTH Connection</h3>
          <h3 className="hover:text-cyan-300"> Dish Tv New connection</h3>
        </div>
        <button>Call us</button>
      </header>
      <main className="flex flex-col items-center justify-between pt-10">
        <div className="z-10 w-full items-center justify-center font-mono text-sm lg:flex h-2/3">
          <div className=" items-center mt-5 justify-center">
            <h1 className=" text-center text-3xl">Tata Play Network</h1>
            <h3 className=" text-center text-2xl">1299</h3>

            <div className="flex gap-24 mt-10">
              <Signupform />
              <Image
                src="/Setupbox.png"
                alt="show"
                width={400}
                height={100}
                className="p-8"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center gap-5">
            <h1 className=" text-center text-4xl">
              {" "}
              Choose your Set Top Box now.
            </h1>
            <h2 className="text-xl">
              View our range of Set Top Boxes available with different
              specifications
            </h2>
            <h1 className="text-center text-3xl">1 Month Offer</h1>
          </div>
          <div className="grid text-center mt-10 lg:max-w-5xl  lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-10">
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
            <h1>Why to Choose Us</h1>
          </div>

          <div className="grid text-center mt-10 lg:max-w-5xl  lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-10">
            {Info.map((info) => (
              <CardDetail key={info.title} title={info.title} img={info.img} />
            ))}
          </div>
        </div>
      </main>
      <footer className="">
        <div className="mt-10 bg-black flex justify-center gap-5">
          <h1 className=" text-gray-50">Privacy Policy</h1>
          <h2 className=" text-gray-50 "> Terms & Conditions</h2>
        </div>
      </footer>
    </Fragment>
  );
}
