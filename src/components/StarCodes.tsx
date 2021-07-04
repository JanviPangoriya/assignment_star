import React, { useState } from 'react';

interface Props{

}

const StarCodes:React.FC<Props>=(props) => {
    const[b,setB]=useState(false);
    const[c,setC]=useState(false);
    const[e,setE]=useState(true);
    const chnage = (e:any)=>
        {
            e.currentTarget.placeholder="";
            console.log(e.currentTarget.className)
            setB(true)
            setC(true);
        }
        const blur = (e:any)=>
        {
            e.currentTarget.placeholder="Enter Your Star Code";
            e.currentTarget.className= e.currentTarget.className +" border-red-700 placeholder-red-600"
            console.log(e.currentTarget.className)
            setB(true);
            setC(false)
        }
        
    return(
        <section className="px-6 my-8 md:w-5/12 md:ml-48 md:max-w-2xl">
    <h1 className="text-2xl font-semibold my-4 md:text-3xl">
        Star Codes
    </h1>
    <p className="text-sm  my-5 md:text-base">
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.
    </p>
  
        
    <p className={"relative top-7 ml-6 z-10 bg-white text-red-700 font-bold text-md "+(c?"inline":"hidden")}>
        Enter Your Star Code 
        </p>
       
    <input type="text" className="border-solid border w-full my-4 border-gray-600 p-3 px-6 rounded-xl font-semibold text-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 focus:border-transparent" placeholder="Enter Your Star Code" onFocus={chnage} onBlur={blur}>
             </input>
             <svg viewBox="0 0 24 24" className={"w-10 h-10 -mt-14 mr-2 ml-auto text-red-800 fill-current "+(c? "":"hidden")} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><path d="M12.65 3.04l7.66 14.165c.264.558-.04 1.2-.662 1.2H4.352c-.622 0-.926-.642-.652-1.22l7.644-14.137c.297-.61 1.025-.606 1.307-.008zM11 8.904v3.192c0 .5.448.904 1 .904s1-.405 1-.904V8.904c0-.5-.448-.904-1-.904s-1 .405-1 .904zM11 15c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"></path></svg>
             <p className={"text-red-700 text-md font-semibold "+ (b?"inline":"hidden" )}>
                 <span className="text-red-700 ml-4">X </span>
             Please Enter Your Star Bucks Code
         </p>
<div className="flex flex-row-reverse">
    <button className="mb-10 mt-2 border-2 border-gray-600 px-4 h-9 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
        Submit
    </button>
    </div>
    <p className="text-sm my-4">
        Have a receipt but don't have a code? <br/> 
        </p>
        <p className="text-sm -my-0.5">
        Go to
        <a href="#" className="text-green-400 underline">  
            starbucks-stars.com</a> to upload your receipt and collect your Stars
    </p>
    <h1 className="text-2xl font-semibold mt-24 md:text-3xl">
        Questions?
    </h1>
    <p className="text-sm md:max-w-3xl mt-4 mb-20 md:text-base">
        We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a href="#" className="text-green-400 underline">  
            right over here.</a>

    </p>
    </section>
    );

}

StarCodes.defaultProps={
    
}
export default StarCodes;