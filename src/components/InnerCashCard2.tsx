import React from 'react';

interface Props{
    text:string;
    hq:string;
    img1:string;
    head1 : string;
    head2 : string;
    head5 : string;
    head6 : string
}

const InnerCashCard2:React.FC<Props>=(props) => {
    return(
        <div className="lg:flex">
        <div className="text-sm mt-8 w-full sm:w-3/12">
            <span className="text-xl font-semibold sm:text-2xl">{props.text} </span><br/>
            {props.hq}
        </div>
        <div className="md:flex">
            <div className="flex py-3 md:py-6 w-full md:w-5/12">
                <img className="w-28" src={props.img1} alt=""/>
                <div className="ml-4">
                    <h3 className="font-semibold">{props.head1}</h3>
                    <p className="mt-3 text-sm md:text-l sm:text-md">{props.head2}<a href="#" target="" className="text-green-700 underline">{props.head6}</a>
                    {props.head5}</p>
                </div>
            </div>
           
        </div>
    </div>
    );

}

InnerCashCard2.defaultProps={
    
}
export default InnerCashCard2;