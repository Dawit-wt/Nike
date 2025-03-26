import {useState} from "react";

const HamburgerMenu = ({navLinks}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="hidden max-lg:block relative z-[9995]">
                <button
                    className="relative w-[25px] h-[25px] flex flex-col justify-center items-center gap-[8px] cursor-pointer"
                    onClick={toggleMenu}
                >
                    <span
                        className={`w-full h-[3px] rounded transition-all duration-500 ease-in-out origin-right ${
                            isMenuOpen
                                ? "absolute -top-[8px] -right-[8px] -rotate-45 bg-coral-red"
                                : "rotate-0 bg-slate-gray"
                        }`}
                    ></span>
                    <span
                        className={`w-full h-[3px] rounded transition-all duration-500 ease-in-out origin-right ${
                            isMenuOpen
                                ? "absolute bottom-[13px] left-[7px] rotate-45 bg-coral-red"
                                : "rotate-0 bg-slate-gray"
                        }`}
                    ></span>
                </button>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-[9993] transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } lg:hidden`}
            >
                <ul className="flex flex-col items-center gap-6 pt-10">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[9992] lg:hidden transition-opacity duration-300"
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};

export default HamburgerMenu;