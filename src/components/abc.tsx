import React, { useState } from 'react';

interface Props{

}

const Aabc:React.FC<Props>=(props) => {
    const[b,setB]=useState(false);
    const[c,setC]=useState(false);
    const chnage = (e:any)=>
        {
            e.currentTarget.placeholder="";
            console.log(e.currentTarget.className)
            setB(false)
            setC(true);
        }
        const blur = (e:any)=>
        {
            e.currentTarget.placeholder="Enter Your Star Code";
            e.currentTarget.className= e.currentTarget.className +" border-red-700 placeholder-red-500"
            console.log(e.currentTarget.className)
            setB(true);
            setC(false)
        }
    return(
        <>
        <p className={"relative top-7 ml-6 z-10 bg-white text-green-600 font-bold text-md "+(c?"inline":"hidden")}>
        Enter Your Star Code 
        </p>
   

         <input type="text" className="border-solid border-2 w-full my-4 border-gray-600 p-3 px-6 rounded-xl font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" placeholder="Enter Your Star Code" onFocus={chnage} onBlur={blur} >
             </input>
             <p className={"text-red-500 text-xl font-semibold "+ (b?"inline":"hidden" )}>
                 <span className="text-red-500 ml-4">X </span>
             Please Enter Your Star Bucks Code
         </p>
        </>
    );

}
     {/* <svg viewBox="0 0 24 24" className=" realtive valign-middle color-red flex-shrink-none w-6 h-6 overflow-visible" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><path d="M12.65 3.04l7.66 14.165c.264.558-.04 1.2-.662 1.2H4.352c-.622 0-.926-.642-.652-1.22l7.644-14.137c.297-.61 1.025-.606 1.307-.008zM11 8.904v3.192c0 .5.448.904 1 .904s1-.405 1-.904V8.904c0-.5-.448-.904-1-.904s-1 .405-1 .904zM11 15c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"></path></svg> */}
Aabc.defaultProps={
    
}
export default Aabc;