import Post from "./components/Post";
import Chart from "./components/Chart";
import { array } from "prop-types";
import Lottie from "lottie-react";
import animationdata from "../public/animation.json";
import Image from "next/image";


export default function Home() {
var list = []
  for (let i = 0; i < 10; i++) {
    list.push(<Post key={i}/>)
  }

  return (
    <div>
      <div className="" >
      {/* <div className="p-4 m-4 rounded-lg ">
        <Chart/>
      </div> */}
        <div className="h-full flex flex-col gap-32 w-full  md:w-[36rem] md:m-auto xl:w-full">
          {list.map((e,index)=>(
            <Post index={index} key={e}/>
          ))}
        </div>
    </div>
    </div>
  );
}
