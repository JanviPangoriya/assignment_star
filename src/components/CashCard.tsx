import React from 'react';
import img1 from '../img/1A.png'
import img12 from '../img/1B.png'
import img2 from '../img/2A.png'
import img22 from '../img/2B.png'
import img3 from '../img/3A.png'
import InnerCashCard from './InnerCashCard'
import InnerCashCard2 from './InnerCashCard2'
interface Props{

}

const CashCard:React.FC<Props>=(props) => {
    return(
        <section className="bg-pink-50 py-16 px-6">
    <div className="grid justify-items-center">
        <h1 className="text-2xl font-semibold">Cash or Card, you earn Stars</h1>
        <p className="max-w-xl text-center text-base">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
    </div>
        <InnerCashCard img1={img1} img2 = {img12}  text="1* per dollar" hq="Pay as you go" head1="Scan and pay seperately" head2="Use cash or credit/debit card at the register. Scan and pay in one step or order ahead in the app." head3 ="Save payment in the app" head4="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."/>
    <hr/>
    <InnerCashCard img1={img2} img2 = {img22} text="2* per dollar" hq="Add funds in the app" head1="Preload" head2="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app." head3 ="Register your gift card" head4="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."/>
    <hr/>
    <InnerCashCard2 img1={img3} text="Up to 3* per dollar " hq="Works Starbucks® Rewards Visa® Card " head1="Earns Stars even faster" head2="Earn Stars on all purchases you make with our " head6="credit card " head5="in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."/>
   
</section>
    );

}

CashCard.defaultProps={
    
}
export default CashCard;