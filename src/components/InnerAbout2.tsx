import React, { AnchorHTMLAttributes, useState } from 'react';

interface Props{
    text1:string;
text2?:string;
text3?:string;
text4?:string;
text5?:string;
text6?:string;
text7?:string;
}

const InnerAbout2:React.FC<Props>=(props) => {
    const [update, setUpdate] = useState(false);
    return(
        <>
        <div className="mb-4 ml-4 flex flex-row items-center justify-between cursor-pointer lg:hidden" onClick= {()=>{setUpdate(!update);
        console.log(update)
        }}>
            <div className="text-md text-black 
            ">{props.text1}</div>
            <div className={(update? "transform  rotate-180 transition duration-200":"")}>
            <button className={"hover:bg-gray-200 text-white font-bold py-2 px-2 rounded-full "}>

                <svg viewBox="0 0 24 24" className="valign-middle absoluteCenter w-8 h-8 overflow-visible " preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle className="sb-icon-hover" fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg>
                </button>
                </div>
         </div>
       <ul className={"ml-5 " + (update?"block transition duration-500 ease-in-out animationDirection:reverse lg:hidden":"hidden lg:hidden")}>
           <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text2}</li></a>
           <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text3}</li></a>
           <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text4}</li></a>
           <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text5}</li></a>
           <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text6}</li></a>
           <a href="#"> <li className="mb-2 py-2 text-gray-600 hover:text-black hover:font-semibold" >{props.text7}</li></a>
        </ul> 

         </>
    );

}

InnerAbout2.defaultProps={
    
}
export default InnerAbout2;