import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi';

import {logo} from '../assets';
import {links} from '../assets/constants';

const NavLinks = ({handleClick}) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <div className='md:flex hidden flex-col w-[240px] pt-14 pb-10 px-4 bg-[#191624]'>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className='absolute md:hidden block top-16 right-4'>
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className='w-7 h-7 mr-2 text-white'
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className='w-7 h-7 mr-2 text-white'
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute md:hidden block top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 pt-14 pb-14 px-4  smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
