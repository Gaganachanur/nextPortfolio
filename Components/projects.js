import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import fashionimg from '../assets/Fashion.png'

const Projects = () => {
    const fashionUrl = 'https://payment-gateway-stripe-indol.vercel.app/'
  return <Fragment>
    <h1 className=" font-Michroma text-3xl py-10  dark:text-white" >Projects</h1>
 <div className="flex flex-wrap justify-around ">
     <div className="dark:text-white text-xl py-2 leading-8 ">
           <h1 className=" pb-1 text-3xl"> Fashion.com</h1>
           <h3 className="pb-4"> Fashion.com is E-commers Website Demo of latest Clothes for genZ.. </h3>
           <p>Built Using Tech Stack</p>
           <h3>- Next Js ,TailwindCSS ,Material UI ,Semantic UI.</h3>
            <h3>- Stripe as Payment gateway feel free to checkout your fav Dress :)</h3>
     </div>
     <div onClick={()=>window.open(fashionUrl)} className="border-spacing-4 cursor-pointer dark:text-black  dark:bg-gray-100 shadow-md hover:shadow-2xl p-10 m-5 rounded-xl  dark:ring-offset-slate-900 ... transform transition-all hover:scale-110 delay-75 ease-in-out duration-500">
     <Image
     src={fashionimg}
     height={300}
     width ={700}
     /> 
     </div>

 </div>
                



  </Fragment>;
};

export default Projects;
