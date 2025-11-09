import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchForm() {
    const [srcForm, setSrcForm] = useState(""); 

    const handleSearch = (e) => {
        e.preventDefault();
        alert("Searhing your key...");
    }

    return (
        <div className="absolute top-20 right-0 bg-white shadow-lg border-t border-gray-200 animate-slideDown">
            <form onSubmit={handleSearch} className="flex items-center justify-between px-4 py-3">
              <input
                onChange={(e) => setSrcForm(e.target.value)}
                type="text"
                value={srcForm}
                name="search"
                placeholder="Search listings, locations, or agents..."
                className="border border-gray-300 text-secondary-dark rounded-lg px-4 py-2 focus:outline-none focus:border-primary-default"
              />
              <button
                type="submit"
                className="ml-3 bg-primary-default hover:bg-secondary-dark hover:text-white text-white px-4 py-2 rounded-lg hover:bg-secondary transition-all"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
    );
}