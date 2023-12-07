import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-20 w-full bg-gradient-to-b from-stone-200 to-transparent'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={230}
                        height={29}
                    />
                </a>
                {/* on map à travers les liens déclarés dans un tableau dans le fichier index.js */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray transition-all hover:font-bold'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    {/* Le menu burger est caché de base mais apparaît sur les petits écrans */}
                    <img  
                        className='hidden max-lg:block'                   
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Nav