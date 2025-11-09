import HeaderMenu from "./HeaderMenu";
import HeaderTop from "./HeaderTop";

export default function Header() {
    return (
        <div className="">
            <div className="bg-dark">
                <HeaderTop />

            </div>
            <div className="shadow bg-white py-5">
                <HeaderMenu />
            </div>
        </div>
    );
}