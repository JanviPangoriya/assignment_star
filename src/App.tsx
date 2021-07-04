import React from 'react';
import About from './components/About';
import CashCard from './components/CashCard';
import EarningStar from './components/EarningStar';
import EndlessExtra from './components/EndlessExtra';
import Footer from './components/Footer';
import GettingStarted from './components/GettingStarted';
import Hero from './components/Hero';
import Nav from './components/Nav';
import StarCodes from './components/StarCodes';
import SubHeader from './components/SubHeader';
import GetyourFavourites from './components/GetyourFavourites';
interface Props{

}

const App:React.FC<Props>=(props) => {
    return(
        <>
        <Nav />
        <SubHeader />
        <Hero />
        <GettingStarted />
        <GetyourFavourites />
        <EndlessExtra />
        <CashCard />
        <StarCodes />
        <EarningStar />
        <About />
        <Footer />
        </>
    );

}

App.defaultProps={
    
}
export default App;