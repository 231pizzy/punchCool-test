import { useEffect, useState } from 'react';
import logo from '/logo.png';
import logoIcon from '/Vector.png';

function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Find Work", link: "#find-work" },
        { name: "Find Talent", link: "#find-talent" },
        { name: "Articles", link: "#articles" },
        { name: "About Us", link: "#about" },
        { name: "Contact Us", link: "#faq" },
    ];

 
    const scrollToSection = (link) => {
        const section = document.querySelector(link);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
          const nav = document.querySelector("nav");
        });
      }, []);

    return (
        <div style={{marginTop: "36px", marginLeft: "auto", marginRight: "auto", alignContent: "center", alignItems: "center", textAlign: "center" }} className='lg:w-[1300px] w-full'>
            <nav style={{ height: "60px", borderRadius: "15px", backgroundColor: "rgba(82, 90, 160, 1)", boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
                {/* Logo */}
                <div className="flex items-center">
                    <div style={{ width: "71.73px", height: "25.23px" }}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div style={{ width: "34.16px", height: "21.37px", marginLeft: "8px" }}>
                        <img src={logoIcon} alt="logo icon" />
                    </div>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex flex-grow justify-center text-white">
                    <ul className="flex items-center gap-1 md:gap-0 py-2 md:py-1 lg:text-[14px] md:text-[12px]">
                        {navLinks?.map((menu, i) => (
                            <li key={i} className="px-4 hover:underline">
                                <a href="#" onClick={() => scrollToSection(menu.link)}>{menu.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Login */}
                <div className='hidden md:flex justify-end gap-6 cursor-pointer' style={{ fontFamily: "Switzer", alignContent: "center", alignItems: "center" }}>
                    <h1 className='text-white'>Log In</h1>
                    <div style={{ top: "9px", borderRadius: "16px", backgroundColor: "rgba(255, 255, 255, 1)", alignContent: "center", alignItems: "center" }} className='lg:h-[43px] md:h-[38px] lg:w-[102px] md:w-[90px]'>
                        <h1 style={{ color: "rgba(32, 34, 41, 1)" }}>Join Now</h1>
                    </div>
                </div>
                {/* </div> */}

                {/* Hamburger Icon */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-gray-900" : "text-white"} text-3xl sm:hidden cursor-pointer`}
                    style={{ marginLeft: "auto", zIndex: 10000 }}
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`sm:hidden fixed top-0 right-0 w-2/3 h-screen shadow-lg transition-transform duration-300`}
                    style={{ transform: open ? "translateX(0)" : "translateX(100%)", backgroundColor: "rgba(255, 255, 255, 1)", zIndex: 9999 }}
                >
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg cursor-pointer">
                        {navLinks?.map((menu, i) => (
                            <li
                                onClick={() => setOpen(false)}
                                key={i}
                                className="px-6 hover:text-purple-900 hover:font-bold font-switzer"
                            >
                                <a href="#" onClick={() => scrollToSection(menu.link)}>{menu.name}</a>
                            </li>
                        ))}
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-purple-900 hover:font-bold font-switzer">
                            <a href="#login">Login</a>
                        </li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-purple-900 ml-[86px]" style={{ height: "43px", width: "110px", top: "9px", borderRadius: "16px", backgroundColor: "rgba(82, 90, 160, 1)", alignContent: "center", alignItems: "center", color: "white" }}>
                            <a href="#join">Join</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}  

export default Navbar;
