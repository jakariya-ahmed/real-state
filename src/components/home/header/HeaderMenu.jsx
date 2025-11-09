import { useState } from "react";
import { Menu, X, Search, User, ShoppingCart, Home, Info, List, Phone, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function HeaderMenu() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchOpen, setSearcOpen] = useState(false);
    const [active, setActive] = useState("Home");
    const items = ["Home", "Listing", "About", "Contact"];



  return (
    <>
      {/* Desktop Header */}
      <header className="container hidden sm:flex justify-between items-center px-6 py-3  text-white">
        {/* Left - Logo */}
        <div className="font-bold text-xl">
            <Link to="/"><img src="/img/logo.png" /></Link>
        </div>

        {/* Center - Navigation */}
        <nav className="flex gap-x-8">
            {items.map((item) => {
            const isActive = active === item;
            return (
                <button
                key={item}
                onClick={() => setActive(item)}
                className={`pb-1 text-lg font-semibold text-secondary-dark hover:text-primary-default transition-all duration-150 border-b-2 ${
                    isActive
                    ? "font-semibold border-primary-default text-primary-default "
                    : "border-transparent"
                } hover:font-semibold hover:border-primary-default`}
                >
                {item}
                </button>
            );
            })}
        </nav>

        {/* Right - Icons */}
        <div className="relative flex items-center gap-4">
            {/* Search Icon & Close  */}
            {searchOpen ? (
                <X  
                onClick={() => setSearcOpen(false)}
                className="w-14 h-14 p-3 hover:bg-primary-default shadow-md cursor-pointer hover:text-white text-secondary-default transition-all duration-100 "/>
            ) : (
                <Search 
                onClick={() => setSearcOpen(true)}
                className="w-14 h-14 p-3 hover:bg-primary-default shadow-md cursor-pointer hover:text-white text-secondary-default transition-all duration-100 " />
            )}
          
          <User className="w-14 h-14 p-3 hover:bg-primary-default shadow-md cursor-pointer hover:text-white text-secondary-default transition-all duration-100 " />
            <ShoppingCart className="w-14 h-14 p-3 hover:bg-primary-default shadow-md cursor-pointer hover:text-white text-secondary-default transition-all duration-100 " />
            
            {/* Search Form  */}
            {searchOpen && (<SearchForm  />)}
        </div>
        
        

      </header>

      {/* ======= Mobile Dropdown Menu ======= */}
      {mobileMenu && (
        <nav className="sm:hidden bg-white text-white text-center py-4 space-y-3">
          {items.map((item) => {
            const isActive = active === item;
            return (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`block w-full pb-2 font-medium transition-all duration-150 border-b-2 ${
                  isActive
                    ? "font-semibold border-amber-400 text-amber-400"
                    : "border-transparent"
                } hover:font-semibold hover:border-amber-400`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      )}

      {/* ======= Mobile Bottom Navigation ======= */}
      <nav className="fixed bottom-0 left-0 w-full bg-white text-white flex justify-around items-center py-2 sm:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <a href="#" className="flex flex-col items-center text-xs">
          <Home className="w-5 h-5 mb-1" /> Home
        </a>
        <a href="#" className="flex flex-col items-center text-xs">
          <Info className="w-5 h-5 mb-1" /> About
        </a>
        <a href="#" className="flex flex-col items-center text-xs">
          <List className="w-5 h-5 mb-1" /> Listing
        </a>
        <a href="#" className="flex flex-col items-center text-xs">
          <Phone className="w-5 h-5 mb-1" /> Contact
        </a>
        <a href="#" className="flex flex-col items-center text-xs">
          <MoreHorizontal className="w-5 h-5 mb-1" /> More
        </a>
      </nav>
    </>
  );
}
