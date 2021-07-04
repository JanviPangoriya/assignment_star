import React, { useState } from 'react';
import img1 from '../img/025.webp'
import img2 from '../img/050.webp'
import img3 from '../img/150.webp'
import img4 from '../img/200.webp'
import img5 from '../img/400.webp'
interface Props {

}

const GetyourFavourites:React.FC<Props>=(props) => {
    const[Image,setImage]=useState(img1);
    const[Text,setText]=useState("Customise your drink");
    const[Text1,setText1]=useState("Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup");
    const[clciked,setclick]=useState(true);
        const[clciked1,setclick1]=useState(false);
    const[clciked2,setclick2]=useState(false);
    const[clciked3,setclick3]=useState(false);
    const[clciked4,setclick4]=useState(false);
    return(
        <>
        <div className="bg-blue-50 pt-8 grid justify-items-center">
            <h1 className="text-2xl font-bold mb-6">Get your favourites for free</h1>
            <ul className="flex">
           <button onClick={()=>{setImage(img1);
            setText("Customize your drink");
            setText1("Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.");
        setclick(true);
        setclick1(false);
        setclick2(false);
        setclick3(false);
        setclick4(false);}}>    <li className={"text-2xl font-bold py-6 px-10 "+(clciked?"border-b-4 border-green-700":"" )}>25<span className="text-sm text-yellow-300">★</span> </li></button>
           <button onClick={()=>{setImage(img2);
          setText("Brewed hot coffee, bakery item or hot tea");
          setText1("Pair coffee cake or an almond croissant with your fresh cup of hot brew.");
           setclick(false);
        setclick1(true);
        setclick2(false);
        setclick3(false);
        setclick4(false);}}><li className={"text-2xl font-bold py-6 px-10 "+(clciked1?"border-b-4 border-green-700":"" )}>50<span className="text-sm text-yellow-300">★</span> </li></button>
           <button onClick={()=>{setImage(img3); 
             setText("Handcrafted drink, hot breakfast or parfait");
             setText1("Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.");
           setclick(false);
        setclick1(false);
        setclick2(true);
        setclick3(false);
        setclick4(false);}}><li className={"text-2xl font-bold py-6 px-10 "+(clciked2?"border-b-4 border-green-700":"" )}>150<span className="text-sm text-yellow-300">★</span> </li></button>
           <button onClick={()=>{setImage(img4); 
           setText("Salad, sandwich or protein box");
           setText1("Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.");
           setclick(false);
        setclick1(false);
        setclick2(false);
        setclick3(true);
        setclick4(false);}}><li className={"text-2xl font-bold py-6 px-10 "+(clciked3?"border-b-4 border-green-700":"" )}>200<span className="text-sm text-yellow-300">★</span> </li></button>
           <button onClick={()=>{setImage(img5);
           setText("Select merchandise or at-home coffee");
           setText1("Take home a signature cup, a bag of coffee or your choice of select coffee accessories.");
           setclick(false);
        setclick1(false);
        setclick2(false);
        setclick3(false);
        setclick4(true);}}><li className={"text-2xl font-bold py-6 px-10 "+(clciked4?"border-b-4 border-green-700":"" )}>400<span className="text-sm text-yellow-300">★</span> </li></button>
            </ul>
        </div>
        <div className="bg-blue-100 md:flex justify-center py-2 lg:py-6">
            <img className="w-full md:w-96" src={Image} alt=""/>
            <div className="grid justify-items-center md:w-72 py-16 ml-8">
                <h3 className="font-bold text-xl mb-4">{Text}</h3>
                <p className="text-sm font-medium text-center md:text-left">{Text1}</p>
            </div>
        </div>
    </>
    );

}

GetyourFavourites.defaultProps={
    
}
export default GetyourFavourites;