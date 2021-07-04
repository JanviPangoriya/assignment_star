import React from 'react';
import img1 from '../img/dektop.png';
import img2 from '../img/mobile.png';
interface Props{

}

const Hero:React.FC<Props>=(props) => {
    return(
        <section  className="md:flex md:justify-between pl-6 bg-background">
        <div className="grid justify-items-center md:w-full py-6 md:justify-items-start md:align-middle max-h-96 md:py-10 md:px-5 md:pt-80">
            <h3 className="text-3xl text-center font-semibold md:text-left md:text-4xl">FREE COFFEE <br/> IS A TAP AWAY</h3>
            <p className="my-4 font-medium md:text-xl">Join now to start earning Rewards</p>
            <button className="bg-green-600 h-8  text-white py-1 px-4 rounded-full font-medium my-3 hidden md:block">Join now</button>
            <p className="text-lg font-medium hidden md:block">Or <a href="https://www.starbucks.com/rewards" className="underline hover:no-underline  md:text-xl">join in the app</a> for the best experience</p>
            <a href="#" className="bg-green-600 text-white py-1 px-4 rounded-full font-medium my-3 md:hidden">Join in the app</a>
            <a className="md:hidden underline hover:no-underline">Or join online</a>
        </div>
        <div className="w-full"> 
            <img className="hidden h-screen md:block " src={img1} alt=""></img>
            <img className="md:hidden w-screen" src={img2} alt=""></img>
        </div>
    </section>
    );

}

Hero.defaultProps={
    
}
export default Hero;