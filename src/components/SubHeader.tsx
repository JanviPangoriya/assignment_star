import React from 'react';
import RoundedLink from './RoundedLink'
interface Props{

}

const SubHeader:React.FC<Props>=(props) => {
    return(

    <div className="sticky top-0 md:top-24 flex flex-row justify-between bg-nav z-20">
    <div className="sticky top-0 w-full pl-4 py-2 h-5 pt-4 tracking-tight text-white font-bold text-sm md:text-lg md:pl-28 md:h-12">
        STARBUCKS® REWARDS
        </div>
        <RoundedLink linktext='Join in the app'></RoundedLink>
</div>
    );

}

SubHeader.defaultProps={
    
}
export default SubHeader;