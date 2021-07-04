import React from 'react';

interface Props{
heading : string;
text1 : string;
text2 : string;
text3 : string;
text4?: string;
}

const InnerEs:React.FC<Props>=(props) => {
    return(
        <div className="md:flex-1  space-y-4 text-sm mr-4">
        <h1 className="text-gray-800 tracking-wide font-bold">
         {props.heading}
        </h1>
        <p className="text-justify">
         {props.text1}
        </p>
        <p className="text-justify">
        {props.text2}
         </p>
         <p className="text-justify">
         {props.text3}
        </p>
        <p className="text-justify">
         {props.text4}
        </p>
     </div>
    );

}

InnerEs.defaultProps={
    
}
export default InnerEs;