import React, {useState} from 'react'
import {SideBar}from '../components/sidebar'
import NavBar from '../components/Navbar/index'




export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
                <SideBar isOpen={isOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/>
        </>

    )
}
