import AboutCom from "../components/AboutCom";
import CounterCom from "../components/CounterCom";
import Aminities from "../components/home/Aminities";
import FloorPlans from "../components/home/FloorPlans";
import FeaturedListings from "../components/home/Listing";
import Services from "../components/home/Services";
import TodaySell from "../components/home/TodaySell";


export default function Home() {
    return (
        <>
            <div className="container">
                {/* <HeroSlider />  */}

                    {/* About Section  */}
                    <AboutCom />  
            </div>
            {/* Counter Section  */}
            <div className="bg-background-light">
                <CounterCom />    
            </div>
            {/* Toady Sells Properties  */}
            <div className="container">
                <TodaySell /> 
            </div>

            {/* Counter Section  */}
            <div className="bg-background-light">
                <Services />
            </div>
            {/* Apartment Listing */}
            <div>
                <FeaturedListings /> 
            </div>
            {/* Apartment Floor Planing  */}
            <div className="container">
                <FloorPlans /> 
            </div>

            <div className="bg-background-ligh ">
                <Aminities />
            </div>
            
        </>
    );
}
