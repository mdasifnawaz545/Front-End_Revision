"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import { AiFillDatabase } from "react-icons/ai"
import Menu from "./menu"
import { useSearchParams } from "next/navigation"
import { CiMedicalCross } from "react-icons/ci"
export const Navbar = ({ }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isCross, setIsCross] = useState(false);

    const handleHamburgerClick = () => {

        setIsOpen((value) => (!value));
        setIsCross((val) => (!val))
        console.log("Hi")

    }


    return (
        <>
            <nav className="min-w-full h-12 bg-blue-300 flex px-4 items-center justify-between ">
                <div>LOGO</div>
                <div className="lg:hidden" onClick={() => {
                    handleHamburgerClick()
                }}>
                    <li className=" list-none " >
                        {
                            isCross ? <CiMedicalCross /> : <AiFillDatabase />
                        }

                    </li>
                </div>
            </nav>
            {
                (isOpen) ? <Menu /> : ""
            }
        </>
    )
}