import React from 'react'
import {Nav, 
        NavBarContainer, 
        NavLogo, 
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks, Navbtn, NavBtnLink} from './NavBarElements'

import {FaBars} from 'react-icons/fa'

const NavBar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Test</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <Navbtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </Navbtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
