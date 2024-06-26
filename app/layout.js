import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav.jsx"
import Image from "next/image";
import img from "../public/clothes.jpg"
import { Roboto ,Rubik_Glitch } from "next/font/google";

const roboto_init = Roboto({
    subsets:["latin"],
    weight:["100","300","400","500","700","900"],
    variable: "--font-roboto"
})
const Rubik_Glitch_init = Rubik_Glitch({
    subsets:["latin"],
    weight:"400",
    variable: "--font-Rubik_Glitch"
})


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto_init.variable} ${Rubik_Glitch_init.variable} `}>
        <div className="shadow-xl bg-white bg-opacity-75  z-50 fixed  w-full">
          <Nav/>
        </div>
        <div className="z-0 m-auto flex  justify-between">
        <div
          className=" z-10  h-[32rem] text-center mt-[16rem] max-md:w-[75vw] md:w-[80vw] xl:w-[55rem] m-auto ">
          <div className="bg-white  p-4 rounded-2xl opacity-85 flex flex-col items-center shadow-2xl">
            <h1 className="font-bold text-4xl font-roboto ">Welcom to your shopping clothes store.</h1>
            <p className="  mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit aut vel voluptates, veniam quaerat necessitatibus impedit magnam, dolorem eligendi illum nihil deserunt illo dolores quas! Consequatur obcaecati, deleniti numquam facilis sit labore?</p>
            <button className=" w-fit my-2 mt-4 px-2 py-1 rounded-md border-[1.5px] border-gray-700">Shop Now!</button>
          </div>
        </div>
        <Image 
          className=" absolute  z-0 w-full h-[46rem]"
          src={img}
          width={500}
          height={500}
        />
        {/* <Lottie className=" w-[50vw]" animationData={animationdata}/> */}
      </div>
        {children}
      </body>
    </html>
  );
}
