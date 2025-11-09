import { Facebook, Instagram, MailIcon, Twitter, Youtube } from "lucide-react";

export default function HeaderTop() {
    return (
        <div className="container hidden sm:flex justify-between items-center">
            <div className="">
                <span className="flex items-center gap-x-2 text-gray-500 font-semibold"><MailIcon className="w-5 h-5 text-primary-light" /> supoort@cursorbyte.com</span>
            </div>
            <div className="flex items-center gap-x-6">
                <div className="flex gap-x-2">
                    <span className="text-gray-500 cursor-pointer"><Facebook className="w-5 h-5" /> </span>
                    <span className="text-gray-500 cursor-pointer"><Twitter className="w-5 h-5" /> </span>
                    <span className="text-gray-500 cursor-pointer"> <Instagram className="w-5 h-5" /> </span>
                    <span className="text-gray-500 cursor-pointer"><Youtube className="w-5 h-5" /> </span>
                </div>
                <div className="">
                    <button className="btn-secondary">Add Listing</button>
                </div>
            </div>
        </div>
    );
}