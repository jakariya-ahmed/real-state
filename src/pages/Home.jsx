import AboutCom from "../components/AboutCom";
import CounterCom from "../components/CounterCom";
import Header from "../components/home/header/Header";
import HeroSlider from "../components/home/hero/HeroSlider";
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
            
        </>
    );
}
