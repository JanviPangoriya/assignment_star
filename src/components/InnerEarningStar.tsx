import React from 'react';

interface Props{
head : string;
text : string;
}

const InnerEarningStar:React.FC<Props>=(props) => {
    return(
        <div className="text-sm md:flex-1 pr-4 space-y-4 mt-4">
            <h1 className="text-gray-800 tracking-normal font-bold">
             {props.head}
            </h1>
            <p className="text-justify">
            {props.text}
            </p>
            
         </div>
    );

}

InnerEarningStar.defaultProps={
    
}
export default InnerEarningStar;