import React from 'react';

interface Props{
img:string;
title : string;
text: string;
}

const InnerEndlessExtra:React.FC<Props>=(props) => {
    return(
        <div className="w-full md:w-81.25 mb-2 w-xs md:mx-4  rounded">
        <div className="flex flex-row md:flex-col">
        <div className="pb-8">
            <a href="#">
                <img className="rounded w-40 h-32 mr-10 md:w-28 md:m-auto" src={props.img}/>
            </a>
        </div>
      <div className="px-3">
        
            <h1 className="text-left text-sm md:text-center mb-2 font-semibold md:text-2xl">{props.title}</h1>
            <p className="text-gray-900 text-left md:text-center pb-3 md:pb-8">  
            {props.text}
            </p>
            <p className="text-left md:text-center underline text-green-800 pb-1 md:pb-5 ">Learn More</p>
        </div>
        </div>
    </div>
    );

}

InnerEndlessExtra.defaultProps={
    
}
export default InnerEndlessExtra;