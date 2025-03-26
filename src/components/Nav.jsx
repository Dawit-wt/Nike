import {headerLogo} from "../assets/images";
import {navLinks} from "../constants";
import HamburgerMenu from "./HamburgerMenu.jsx";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-30 w-full">
            <nav className="flex items-center justify-between max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <HamburgerMenu navLinks={navLinks}/>
            </nav>
        </header>
    );
};

export default Nav;

// TODO add transition between navigations