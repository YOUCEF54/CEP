"use client"
import {motion,useAnimate,useAnimation,usePresence, useInView} from 'framer-motion'
import PropTypes from 'prop-types';
import Image from "next/image";
import { useEffect, useRef } from "react";
import img from "@/public/clothes.jpg"
export default function Post({post, index}){

    const ref= useRef(null);
    const isInView = useInView(ref, {once: true})
    const mainConrols = useAnimation()
    useEffect(()=>{
      if(isInView){
        mainConrols.start("visible")
      }
    },[isInView])
    
    return(
        <div ref={ref}>
            <motion.div
            variants={{
                hidden: {opacity:0, y:55},
                visible: {opacity:1, y:0},
            }}
            initial="hidden"
            animate={mainConrols}
            transition={{duration:0.5, delay:0.25}}
            key={Post.id} 
            className="p-3 pb-4 max-md:w-[90vw] flex flex-col  m-auto rounded-3xl bg-gray-50 border  h-fit  gap-3 shadow-[0_35px_60px_-5px_rgba(0,0,0,0.15)]">
            <Image
                className="size-full rounded-2xl text-black text-center flex "
                src={img}
                width={500}
                height={500}
            />
            <div>
            <h1 className="mt-2 mb-2">Title</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rerum atque, provident nostrum eligendi enim itaque inventore aliquid excepturi aut earum mollitia!</p>
            </div>
            <div className='flex justify-end gap-4'>
                <button className='p-3 border border-violet-700  rounded-full px-5 '>Add to cart</button>
                <button className='p-3  bg-violet-700 shadow-lg shadow-violet-200 text-white rounded-full px-5 '>Buy now</button>
            </div>
        </motion.div>
        </div>
    )
}

    Post.propTypes = {
        post: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired,
    };
    