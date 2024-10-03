import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbWorldCode } from 'react-icons/tb';
import { MdOutlineWbSunny, MdNightlight } from 'react-icons/md';

function Navbar() {
    const [colorTheme, setColorTheme] = useState('light');
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setColorTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', colorTheme === 'dark');
        localStorage.setItem('theme', colorTheme);
    }, [colorTheme]);

    const toggleTheme = () => {
        setColorTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleWindowResize = () => {
        if (window.innerWidth > 640 && showMenu) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [showMenu]);

    return (
        <div className="flex mt-[-2px] justify-between py-8 px-3.5 items-center relative">
            <TbWorldCode className="h-8 w-32 sm:h-7 sm:w-28" />
            <ul className="hidden tm:block sm:block md:flex font-normal text-black dark:text-white gap-20">
                <li><a onClick={() => scrollToComponent('experience')}>Experience</a></li>
                <li><a onClick={() => scrollToComponent('projects')}>Projects</a></li>
                <li><a onClick={() => scrollToComponent('contact')}>Contact</a></li>
                <li>
                    <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-4">
                        {colorTheme === 'dark' ? <MdOutlineWbSunny size={24} /> : <MdNightlight size={24} />}
                    </button>
                </li>
            </ul>
            <div className="flex">
                <div className="tm:hidden sm:hidden absolute top-8 right-3.5">
                    <GiHamburgerMenu className="h-6 w-6 cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
                </div>
                {showMenu && (
                    <ul className="flex flex-col font-normal text-black dark:text-white gap-4 absolute top-16 right-3.5 z-10 bg-[#fdd6cf] p-4 shadow-md rounded">
                        <li><a onClick={() => scrollToComponent('experience')}>Experience</a></li>
                        <li><a onClick={() => scrollToComponent('projects')}>Projects</a></li>
                        <li><a onClick={() => scrollToComponent('contact')}>Contact</a></li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;
