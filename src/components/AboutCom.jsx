import { CoffeeIcon, HousePlusIcon, LockIcon, Sunrise } from "lucide-react";

export default function AboutCom() {
    return (
        <div className="section-spacing flex flex-col items-center md:flex-row gap-y-4 md:gap-x-6">
            <div className="w-full lg:w-[45%]">
                <img src="img/about.png" className="w-full" alt="about" />
            </div>
            <div className="w-full lg:w-[55%] md:ml-6">
                <span className="sm-title">About US </span>
                <h1 className="my-5 big-title text-secondary-dark leading-tight">The Leading Real Estate Rental Marketplace.</h1>
                <p className="pera">
                    Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
                </p>
                <div className="flex gap-x-10">
                    <div className="flex items-center gap-x-2 mt-6">
                        <HousePlusIcon className="text-primary-default bg-primary-light w-12 h-12 p-3 rounded-full"/> 
                        <span className="text-lg text-neutral-dark">Smart Home Design</span>
                    </div>
                    <div className="flex items-center gap-x-2 mt-6">
                        <Sunrise className="text-primary-default bg-primary-light w-12 h-12 p-3 rounded-full"/> 
                        <span className="text-lg text-neutral-dark">Beautiful Scene Around</span>
                    </div>
                </div>

                <div className="flex gap-x-10">
                    <div className="flex items-center gap-x-2 mt-6">
                        <CoffeeIcon className="text-primary-default bg-primary-light w-12 h-12 p-3 rounded-full"/> 
                        <span className="text-lg text-neutral-dark">Exceptional Lifestyle</span>
                    </div>
                    <div className="flex items-center gap-x-2 mt-6">
                        <LockIcon className="text-primary-default bg-primary-light w-12 h-12 p-3 rounded-full"/> 
                        <span className="text-lg text-neutral-dark">Complete 24/7 Security</span>
                    </div>
                </div>
                <div className="mt-6 pl-6 pr-10 py-4 bg-background-light border-l-4 border-l-primary-default">
                    <p className="leading-relaxed">
                        Enimad minim veniam quis nostrud exercitation
                        llamco laboris. Lorem ipsum dolor sit amet"
                    </p>
                </div>
                <button className="btn-primary mt-6 text-xl">Our Services </button>
            </div>
        </div>
    );
}