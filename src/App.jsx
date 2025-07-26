import React, { useState } from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
// import { CSSPlugin } from "gsap/CSSPlugin";

// gsap.registerPlugin(CSSPlugin);

function App() {
  useState
  let [showcontent, setshowcontent]=useState(false);
  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",

    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1/8,
      ease:"Expo.easeInOut",
      transfromOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>=.9){
          document.querySelector(".svg").remove();
          setshowcontent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(()=>{

    if(!showcontent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",
    });

    gsap.to(".crime",{
      scale:1.2,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".criminal",{
      scale:0.8,
      rotate:0,
      bottom:"-15%",
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".text",{
      scale:1,
      rotate:0,
      bottom:"-15%",
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".vi",{
      scale:1,
      rotate:0,
      bottom:"-15%",
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    });

    const main=document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      console.log(e.clientX,e.clientY);
      //-0.5<console.log(e.clientX/window.innerWidth)<0.5
       const xmove=(e.clientX/window.innerWidth - 0.5)* 40;//*=>basically amplitude
      // console.log((e.clientX/window.innerWidth - 0.5)* 100);

      gsap.to(".main .text",{
        x:`${xmove * 0.4}%`,//doing intensity low by multiplying

      });

      gsap.to(".main .crime",{
        x:xmove,//doing intensity low by multiplying

      });

    });
  },[showcontent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bgi.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {
        showcontent && <div className="main w-full h-screen scale-[2.0] rotate-[-20deg] bg-black">
          <div className="landing relative overflow-hidden w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 w-full h-1/10 z-[12] px-3 py-2">
            <div className="logo flex gap-4">
              <div className="lines flex flex-col gap-1 mt-3">
                <div className="line1 w-12 h-1 bg-white"></div>
                <div className="line2 w-8 h-1 bg-white"></div>
                <div className="line3 w-5 h-1 bg-white"></div>
              </div>
              <h3 className="text-3xl text-white">Rockstar</h3>

            </div>

            </div>
            {/* <h1 className="text-white text-3xl">GTA VI</h1> */}
            
            <div className="imagesdiv w-full h-screen">
              <img className="crime absolute  top-0 left-0  w-full h-full object-cover z-[10] scale-[1.5] rotate-[-5deg]" src="./crime.png" alt=""/>
              <img className="criminal absolute -bottom-[40%] left-0 scale-[0.6] rotate-[-10deg] w-full h-full object-contain z-[20]" src="./criminal.png" alt=""/>
              {/* <img className="w-full h-full scale-[1.0] object-cover" src="./criminal.png" alt=""/> */}
              <div className="text text-white  absolute z-[15] top-8 left-1/2 -translate-x-1/2 flex flex-col gap-4 scale-[1.5] rotate-[-10deg]"style={{ textShadow: '4px 4px 0 #000' }}>
              <h1 className="text-[6rem]  leading-none -ml-60 "style={{ textShadow: '4px 4px 0 #000' }}>grand</h1>
              <h1 className="text-[6rem] leading-none   -ml-30 "style={{ textShadow: '4px 4px 0 #000' }}>theft</h1>
              <h1 className="text-[6rem] leading-none -ml-40 "style={{ textShadow: '4px 4px 0 #000' }}>auto</h1>
              
              </div>

              <div className="vi text-white  absolute z-[15] top-1/2 right-0 flex gap-4 scale-[1.5] rotate-[-10deg] mb-20 "style={{ textShadow: '4px 4px 0 #000' }}>
                <h1 className="text-[15rem]  leading-none mr-70"style={{ textShadow: '4px 4px 0 #000' }}>VI</h1>
              </div>

            </div>
            <div className="bottombar absolute z-[25] bottom-0 left-0 w-full px-10 py-10 mt-15 h-1/5 flex items-center bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-2 text-white items-center">
              <i className="ri-arrow-down-line text-2xl"></i>
              <h3 className="text-xl">Scroll-down</h3>
            </div>
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60px]"
            src="./ps5.png"
            />
            <div>

            </div>
              
            </div>
          </div>

          <div className="w-full h-screen bg-black px-10">
            <div className="cntnr w-full h-screen flex gap-6">
              <div className="relative w-1/2 h-full">
              <img className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[75%] " src="./secondpage.png" alt=""/>

              </div>
              <div className="relative w-1/2 h-full">
              <h1 className="text-6xl text-white absolute left-1/2 py-15 -ml-25">Yes</h1>
              <p className="text-xl text-white mt-40">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iusto cupiditate rerum velit asperiores, accusamus repellat officiis id dolorem nihil aperiam dolorum eaque. Laborum nulla reiciendis ducimus commodi. Quisquam, quo!
              </p>

              <p className="text-xl text-white mt-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi obcaecati at nulla rem tenetur iure, unde recusandae. Voluptate optio laboriosam quibusdam facilis dolor nulla beatae delectus rem alias, aliquid temporibus.
              </p>
              <button className="bg-yellow-500 px-5 py-5 text-2xl text-black mt-5 border-2 border-zinc-900 rounded-md ">Download Now</button>

              </div>

            </div>
            

          </div>
          
              
          </div>
          
      }

    </>
    
  )
}

export default App