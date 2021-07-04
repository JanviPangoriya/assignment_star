import React from 'react';
import img1 from '../img/1-fun-freebies.webp'
import img2 from '../img/2-order-and-pay-ahead.webp'
import img3 from '../img/3-get-to-free-faster.webp'
import InnerEndlessExtra from './InnerEndlessExtra';
interface Props{

}

const EndlessExtra:React.FC<Props>=(props) => {
    return(
        <section className="pt-16">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Endless Extras</h1>
            <p className="max-w-xl text-center text-base pt-4">Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee</p>
        </div>
        <div className="mx-10 my-10">
            <div className="flex flex-col md:flex-row justify-center items-center">
             <InnerEndlessExtra img={img1} title="Fun freebies"
                 text=" Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."/>
            <InnerEndlessExtra img={img2} title="Order & pay ahead"
                 text="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."/>
            <InnerEndlessExtra img={img3} title="Get to free faster"
                 text="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."/>
    
        </div>
        
        </div>
       </section>
    );

}

EndlessExtra.defaultProps={
    
}
export default EndlessExtra;