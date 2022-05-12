import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displayMenu = e => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = e => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((sublink, index) => (
            <li key={index}>
              <button className='link-btn' onMouseOver={displayMenu}>
                {sublink.page}
              </button>
            </li>
          ))}
        </ul>
        <button className='btn signin-in'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
