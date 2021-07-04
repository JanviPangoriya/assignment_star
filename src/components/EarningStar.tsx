import React from 'react';
import InnerEarningStar from './InnerEarningStar'
import InnerEs from './InnerEs'
interface Props{

}

const EarningStar:React.FC<Props>=(props) => {
    return(
        <div className="bg-gray-50 space-y-4 py-8 pb-6">
        <p className=" ml-6 lg:ml-10">At participating stores. Restrictions apply
         </p>
     <div className="md:flex  px-5 md:px-10">
         <InnerEs heading="EARNING STARS" text1="Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads." text2=" Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app." text3="Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase."/>

         <InnerEs heading="TERMS OF USE" text1="For full program details visit 
 starbucks.com/rewards/terms
 opens in new window" text2="* Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details." text3="  Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the 
 Starbucks Store Locator
 opens in new window and syearch for locations honoring “Redeem Rewards”." text4="Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC"/>
         </div>

     <div className="md:flex px-5 md:px-10 mb-10">
         <InnerEarningStar head="BENEFITS" text=" Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction."/>
        
         <InnerEarningStar head="REDEEMING REWARDS" text=" Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.."/>
        
     </div>
     
     </div>
     
    );

}

EarningStar.defaultProps={
    
}
export default EarningStar;