import React from 'react'
import {SideBarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SidebtnWrap,
        SidebarRoute
        } from './SideBarElements'


export const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Signup
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}
