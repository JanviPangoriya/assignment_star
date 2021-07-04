import React from 'react';
import img1 from '../img/getting-started-1@2x.webp';
import img2 from '../img/getting-started-2@2x.webp';
import img3 from '../img/getting-started-3@2x.webp';
import InnerGettingStarted  from './InnerGettingStarted';

interface Props{

}

const GettingStarted:React.FC<Props>=(props) => {
    return(
<section className="pt-16 ">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Getting started is easy</h1>
            <p className="max-w-xl text-center text-lg pt-4">Earn Stars and get rewarded in a few easy steps.</p>
        </div>
        <div className="mx-10 my-10">
            <div className="flex flex-col md:flex-row justify-center items-center">
             <InnerGettingStarted img={img1} title="Create an account" text1='To get started,' text2= 'join now ' text3= '. You can also ' text4= 'join in the app' text5= ' to get access to the full range of Starbucks® Rewards benefits. '/>

             <InnerGettingStarted img={img2} title="Order and pay how you’d like" text1=' Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. ' text2= 'Learn how'/>
            
             <InnerGettingStarted img={img3} title="Earn Stars, get Rewardse" text1='  As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars! '/>
                </div> 
        </div>
        
       </section>
    );


}

GettingStarted.defaultProps={
    
}
export default GettingStarted;