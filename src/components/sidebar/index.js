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


export const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup">
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
