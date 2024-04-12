"use client"
import Image from "next/image";
import Post from "./components/Post"
import Chart from "./components/Chart"
import { array } from "prop-types";
import Lottie from "lottie-react"
import animationdata from "../public/animation.json"
import img from "../public/clothes.jpg"
export default function Home() {
var list = []
  for (let i = 0; i < 10; i++) {
    list.push(<Post key={i}/>)
    
  }


  var list = [0,1,2,3,4,5,6,7]
  return (
    <main className="">
      <div className=" bg-blue-500 py-2  mt-1 text-center text-white font-bold text-3xl">CLOTHES WEBSITE</div>
      <div className="m-auto flex  justify-between ">
        <div className=" z-10  h-[26rem] mt-[14rem] w-full mx-[20rem]  ">
          <div className="bg-white p-4 rounded-2xl opacity-85 flex flex-col items-center shadow-2xl">
          <h1 className="font-bold text-4xl">Welcom to your shopieng clothes store.</h1>
          <p className=" text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit aut vel voluptates, veniam quaerat necessitatibus impedit magnam, dolorem eligendi illum nihil deserunt illo dolores quas! Consequatur obcaecati, deleniti numquam facilis sit labore?</p>
          <button className=" w-fit my-2 mt-4 px-2 py-1 rounded-md border-[1.5px] border-gray-700">Shop Now!</button>
          </div>
        </div>
        <Image 
        className=" absolute  z-0 w-full h-[38rem]"
        src={img}
        width={500}
        height={500}
        />
        {/* <Lottie className=" w-[50vw]" animationData={animationdata}/> */}
      </div>
      <div className="p-4 m-4 rounded-lg ">
        <Chart/>
      </div>
      <div className="grid grid-cols-2 gap-6  max-xl:grid-cols-1 justify-between p-24">
        <div className="bg-gray-100 border border-gray-300 rounded-md w-full" >
          <div className="m-4 p-4 bg-white rounded-md border border-gray-300">This is a Clothes vending website</div>
          <p className="m-4 font-light p-2 bg-purple-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum placeat ipsum ipsa cum, cupiditate, magnam, nobis doloribus . Assumenda eaque eveniet exercitationem quae saepe nequ harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-red-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum potam ipsam suscipit temporibus beatae exercitationem quaerat earum laudantium ea distinctio! Pariatur, eos voluptates. Assumenda eaque eveniet exercitationem quae saepe neque necessitatibus rem iste vitae, deserunt quam non fugit obcaecati rerum quis illum aspernatur suscipit dolores? Laborum ducimus quibusdam maxime distinctio labore repellat? Unde pariatur sunt consequuntur, veniam ipsam ad beatae? Provident consequatur quisquam harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-yellow-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet placeat ipsum ipsa cum, cupiditate, magnam, nobis doloribus aperiam totam ipsam suscipit temporibus beatae exercitationem quaerat earum laudantium ea distinctio! Pariatur, eos voluptates. Assumenda eaque eveniet exercitationem quae saepe neque necessitatibus rem iste vitae, deserunt quam non fugit obcaecati rerum quis illum aspernatur suscipit dolores? Laborum ducimus quibusdam maxime distinctio labore repellat? Unde pariatur sunt consequuntur, veniam ipsam ad beatae? Provident consequatur quisquam harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-purple-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum placeat ipsum ipsa cum, cupiditate, magnam, nobis doloribus . Assumenda eaque eveniet exercitationem quae saepe nequ harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-red-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum potam ipsam suscipit temporibus beatae exercitationem quaerat earum laudantium ea distinctio! Pariatur, eos voluptates. Assumenda eaque eveniet exercitationem quae saepe neque necessitatibus rem iste vitae, deserunt quam non fugit obcaecati rerum quis illum aspernatur suscipit dolores? Laborum ducimus quibusdam maxime distinctio labore repellat? Unde pariatur sunt consequuntur, veniam ipsam ad beatae? Provident consequatur quisquam harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-yellow-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet placeat ipsum ipsa cum, cupiditate, magnam, nobis doloribus aperiam totam ipsam suscipit temporibus beatae exercitationem quaerat earum laudantium ea distinctio! Pariatur, eos voluptates. Assumenda eaque eveniet exercitationem quae saepe neque necessitatibus rem iste vitae, deserunt quam non fugit obcaecati rerum quis illum aspernatur suscipit dolores? Laborum ducimus quibusdam maxime distinctio labore repellat? Unde pariatur sunt consequuntur, veniam ipsam ad beatae? Provident consequatur quisquam harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-purple-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum placeat ipsum ipsa cum, cupiditate, magnam, nobis doloribus . Assumenda eaque eveniet exercitationem quae saepe nequ harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-red-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum potam ipsam suscipit temporibus beatae exercitationem quaerat earum laudantium ea distinctio! Pariatur, eos voluptates. Assumenda eaque eveniet exercitationem quae saepe neque necessitatibus rem iste vitae, deserunt quam non fugit obcaecati rerum quis illum aspernatur suscipit dolores? Laborum ducimus quibusdam maxime distinctio labore repellat? Unde pariatur sunt consequuntur, veniam ipsam ad beatae? Provident consequatur quisquam harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
          <p className="m-4 font-light p-2 bg-yellow-50 border-gray-400 border  rounded-md">Lorem, ipsum dolor sit amet placeat ipsum ipsa cum, cupiditate, magnam, nobis doloribus aperiam totam ipsam suscipit temporibus beatae exercitationem quaerat earum laudantium ea distinctio! Pariatur, eos voluptates. Assumenda eaque eveniet exercitationem quae saepe neque necessitatibus rem iste vitae, deserunt quam non fugit obcaecati rerum quis illum aspernatur suscipit dolores? Laborum ducimus quibusdam maxime distinctio labore repellat? Unde pariatur sunt consequuntur, veniam ipsam ad beatae? Provident consequatur quisquam harum exercitationem beatae obcaecati repellat facilis, laudantium ducimus culpa iure deserunt neque ut dolor temporibus accusamus tempora vero earum sint. Natus recusandae a sit sed minus laboriosam?</p>
        </div>
        <div className="h-full flex flex-col gap-4 w-full  md:w-[36rem] md:m-auto xl:w-full">
          {list.map((e,index)=>(
            <Post index={index} key={e}/>
          ))}
        </div>
      </div>
      
    </main>
  );
}
