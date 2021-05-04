import React from 'react'
import {Nav, 
        NavBarContainer, 
        NavLogo, 
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks} from './NavBarElements'

import {FaBars} from 'react-icons/fa'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Test</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar
