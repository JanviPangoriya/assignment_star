import React from 'react';

interface Props{
title : string;
img : string;
text1 : string;
text2? : string;
text3? : string;
text4? : string;
text5? : string;

}

const InnerGettingStarted:React.FC<Props>=(props) => {
    return(
        <div className="w-full md:w-81.25 mb-2 w-xs md:mx-4  rounded">
                <div className="flex flex-row md:flex-col">
                <div className="pb-8">
                    <a href="#">
                        <img className="rounded w-14 h-14 mr-10 md:w-14 md:m-auto" src={props.img}/>
                    </a>
                </div>
              <div className="px-3">
                
                    <h1 className="text-left text-sm md:text-center mb-2 font-semibold md:text-lg">{props.title}</h1>
                    <p className="text-gray-900 text-left md:text-center pb-3 md:pb-8">  
                    {props.text1}<a className="text-green-800 underline">{props.text2}</a>{props.text3}<a className="text-green-800 underline">{props.text4}</a>{props.text5}</p>
                </div>
                </div>
            </div>
    );

}

InnerGettingStarted.defaultProps={
    
}
export default InnerGettingStarted;