import AboutCom from "../components/AboutCom";
import CounterCom from "../components/CounterCom";
import Header from "../components/home/header/Header";
import HeroSlider from "../components/home/hero/HeroSlider";


export default function Home() {
    return (
        <div className="">
            <div className="container">
                {/* <HeroSlider />  */}

                {/* About Section  */}
                <AboutCom />   
            </div> 
            {/* Counter Section  */}
            <div className="bg-background-light">
                <CounterCom />    
            </div>
        </div>
    );
}
