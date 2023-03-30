import React from 'react';
import logo from './images/logo.svg';
import {
    Closeicon,
    Header,
    Hstack,
    Logo,
    Menuicon,
    Menulist,
    Navspreader,
    Styledlist
} from './styled/Loopstudio.styled';
import menuicon from './images/icon-hamburger.svg';
import closeicon from './images/icon-close.svg';

export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <Header>
            <Navspreader>
                <Logo src={logo} alt='logo' />
                <Styledlist className='nav_header'>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </Styledlist>
                <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
            </Navspreader>
            <h1>
                Immersive experiences that deliver
            </h1>
        {toggleMenu && (
          <>
            <Menulist>
                <Hstack className='navbarmobile_spreader'>
                    <Logo src={logo} alt='logo' className='logomobile'/>
                    <Closeicon src={closeicon} alt='closeicon' onClick={()=>setToggleMenu(false)} />
                </Hstack>
                <Styledlist>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </Styledlist>
            </Menulist>
          </>
        )}
        </Header>
    )
  }

