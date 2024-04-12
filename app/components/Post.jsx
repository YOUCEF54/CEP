import {motion,useAnimate,usePresence} from 'framer-motion'
import PropTypes from 'prop-types';



import { useEffect } from "react";
export default function Post({post, index}){
    const [isPresent,safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()
    
    useEffect(()=>{
        if(isPresent){
            const enterAnimation = async() =>{
                await animate(scope.current,{opacity:[0,1]},{y:75},{duration:0.5 , delay:0.2*index})
            }
            enterAnimation()
        }else{
            const exitAnimation = async () => {
                await animate(
                    scope.current,
                    {opacity:[1,0]},
                    {duration: 0.5, delay: 0.2*index}
                )
                safeToRemove()
            }
            exitAnimation()
        }
    }, [isPresent, index, animate, scope]);
    return(
        <div key={Post.id} ref={scope} className="p-4 rounded-lg bg-slate-50 border flex gap-3">
            <div className="w-full rounded-lg bg-gray-200 text-center flex "><h1 className="m-auto">Image</h1></div>
            <div>
            <h1 className="mt-2 mb-2">Title</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rerum atque, provident nostrum eligendi enim itaque inventore aliquid excepturi aut earum mollitia!</p>
            </div>
        </div>
    )
}
Post.propTypes = {
    post: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
  };
  