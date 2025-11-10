import { BathIcon, BedIcon, CarFrontIcon, CheckCircleIcon, RulerIcon } from "lucide-react";

export default function TodaySell() {

    const sellItems = [
        {label: 'Live Music Cocerts at Luviana', icon: CheckCircleIcon},
        {label: 'Our SecretIsland Boat Tour is Just for You', icon: CheckCircleIcon},
        {label: 'Live Music Cocerts at Luviana', icon: CheckCircleIcon},
        {label: 'Live Music Cocerts at Luviana', icon: CheckCircleIcon},
    ];

        const features = [
        { id: 1, label: "Bedrooms", value: "2", icon: BedIcon },
        { id: 2, label: "Bathrooms", value: "2", icon: BathIcon },
        { id: 3, label: "Car Parking", value: "2", icon: CarFrontIcon },
        { id: 4, label: "Square Ft", value: "3450", icon: RulerIcon },
        ];



    return (
        <div className="section-spacing flex flex-col items-center md:flex-row gap-y-4 md:gap-x-6">
            
            <div className="w-full lg:w-[55%]">
                <span className="sm-title">Today Sells  </span>
                <h1 className="my-5 big-title text-secondary-dark leading-tight">Today Sells Properties</h1>
                <p className="pera">
                    Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information
                </p>
                
                <div  className="mt-6">
                {sellItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                            <div key={i} className="flex items-center">
                                <Icon className="text-primary-default w-12 h-12 p-3"/> 
                                <span className="text-lg text-neutral-dark font-semibold">{item.label}</span>
                            </div>
                            
                        );
                    })}
                </div>
                

                <div className="my-6 flex items-center gap-x-6 text-gray-700">
                    {features.map((item, index) => (
                        <div key={item.id} className="flex items-center gap-x-6">
                        <div className="flex flex-col items-center">
                            <span className="flex items-center gap-x-2 text-lg font-bold">
                            {item.value} <item.icon className="w-5 h-5 text-primary-default" />
                            </span>
                            <h5 className="text-sm font-medium">{item.label}</h5>
                        </div>

                        {/* vertical divider except for last item */}
                        {index !== features.length - 1 && (
                            <div className="w-px h-8 bg-gray-300"></div>
                        )}
                        </div>
                    ))}
                    </div>

                <button className="btn-primary mt-6 text-xl">Our Services </button>
            </div>
            <div className="w-full lg:w-[45%] md:ml-6">
                <img src="img/sell.png" className="w-full" alt="about" />
            </div>
        </div>
    );
}