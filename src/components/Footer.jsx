import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1f2b] text-gray-300">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-3xl">
              <i className="ri-home-4-line"></i>
            </span>
            <h2 className="text-white text-2xl font-semibold">Quarter</h2>
          </div>
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is dummy text of the printing.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p className="flex items-center gap-2"><MapPin size={16}/> Brooklyn, New York, United States</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +0123-456789</p>
            <p className="flex items-center gap-2"><Mail size={16}/> example@example.com</p>
          </div>
          <div className="flex gap-4 mt-5 text-gray-400">
            <Facebook className="cursor-pointer hover:text-white" size={18}/>
            <Twitter className="cursor-pointer hover:text-white" size={18}/>
            <Instagram className="cursor-pointer hover:text-white" size={18}/>
            <Dribbble className="cursor-pointer hover:text-white" size={18}/>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>All Products</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Cart</li>
            <li>Wish List</li>
            <li>Login</li>
            <li>Checkout</li>
            <li>Terms & Conditions</li>
            <li>Promotional Offers</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            <li>Login</li>
            <li>My Account</li>
            <li>Wish List</li>
            <li>Add Listing</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Newsletter</h3>
          <p className="text-sm leading-6 mb-4">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>
          {/* <div className="flex bg-white rounded-md overflow-hidden">
            <input 
              type="email" 
              placeholder="Email*" 
              className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-orange-500 px-4 hover:bg-orange-600">
              Submit
            </button>
          </div> */}
          <div className="flex">
            <input type="text" className="rounded-l px-3 py-2 focus:outline-none text-secondary-dark" />
            <button className="bg-primary-default rounded-r px-3 py-2 hover:bg-primary-dark"> <Send className=" w-5 h-5"  /> </button>
          </div>
          <div className="mt-6">
            <h4 className="text-white text-sm font-semibold mb-2">We Accept</h4>
            <img src="/img/payment.png" alt="payment methods" className="w-full max-w-[220px]" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6">
        <p>All Rights Reserved © Company 2025</p>
        <div className="flex gap-5 mt-3 md:mt-0">
          <p>Terms & Conditions</p>
          <p>Claim</p>
          <p>Privacy & Policy</p>
        </div>
      </div>
    </footer>
  );
}
