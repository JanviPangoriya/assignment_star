import React from 'react';
import InnerAbout from './InnerAbout';
import InnerAbout2 from './InnerAbout2';
interface Props{

}

const About:React.FC<Props>=(props) => {
    return(
        <>
         <div className=" my-12 border-t-2 border-gray-300 w-full"></div>
         <div className="flex flex-col lg:flex-row items-start lg:justify-start  ">
            <InnerAbout text1="About Us" text2="Our Hertiage" text3="Our Coffee" text4="Stories and News" text5="Investor Relations" text6="Policies and Stanadard" text7="Cutomer Services" />

            <InnerAbout text1="Careers" text2="Culture and Values" text3="Inclusion, Diversity, and Equity" text4="College Achievement Plan" text5="U.S. Careers" text6="International Careers"/> 
            
            <InnerAbout text1="Social Impact" text2="Ethical Sourcing" text3="Leading in Sustainability" text4="Strengthening Communities" text5="Creating Opportunities" text6="Global Social Impact Report"/> 

            <InnerAbout text1="For Business Partners" text2="Landlord Support Center" text3="Suppliers" text4="Corporate Gift Card Sale" text5="Office and Foodservice Coffee"/> 

            <InnerAbout text1="Order and Pickup" text2="Order on the App" text3="Order on the Web" text4="Delivery" text5="Order and Pickup Options" text6="Explore and Find Coffee for Home"/> 
        
         </div>
       <InnerAbout2 text1="About Us" text2="Our Hertiage" text3="Our Coffee" text4="Stories and News" text5="Investor Relations" text6="Policies and Stanadard" text7="Cutomer Services"/>

       <InnerAbout2 text1="Careers" text2="Culture and Values" text3="Inclusion, Diversity, and Equity" text4="College Achievement Plan" text5="U.S. Careers" text6="International Careers"/>

       <InnerAbout2 text1="Social Impact" text2="Ethical Sourcing" text3="Leading in Sustainability" text4="Strengthening Communities" text5="Creating Opportunities" text6="Global Social Impact Report"/>

       <InnerAbout2 text1="For Business Partners" text2="Landlord Support Center" text3="Suppliers" text4="Corporate Gift Card Sale" text5="Office and Foodservice Coffee"/>
       <InnerAbout2 text1="Order and Pickup" text2="Order on the App" text3="Order on the Web" text4="Delivery" text5="Order and Pickup Options" text6="Explore and Find Coffee for Home"/>

       
         <div className=" my-8 border-t-2 border-gray-300 w-full"></div>
        </>
    );

}

About.defaultProps={
    
}
export default About;