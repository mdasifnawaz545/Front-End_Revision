"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import { AiFillDatabase } from "react-icons/ai"
import Menu from "./menu"
import { useSearchParams } from "next/navigation"
import { CiMedicalCross } from "react-icons/ci"
import { FaCaretDown } from "react-icons/fa"
import BlockOne from "./block"

export const Navbar = ({ }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isCross, setIsCross] = useState(false);
    const [IsblockOpenOne, setIsBlockOpenOne] = useState(false);
    const [IsblockOpenTwo, setIsBlockOpenTwo] = useState(false);
    const [IsblockOpenThree, setIsBlockOpenThree] = useState(false);
    const [IsblockOpenFour, setIsBlockOpenFour] = useState(false);

    const handleHamburgerClick = () => {

        setIsOpen((value) => (!value));
        setIsCross((val) => (!val))
        console.log("Hi")

    }

    const handleBlockHoverOne = () => {
        setIsBlockOpenOne((val) => (!val));
    }
    const handleBlockHoverTwo = () => {
        setIsBlockOpenTwo((val) => (!val));
    }
    const handleBlockHoverThree = () => {
        setIsBlockOpenThree((val) => (!val));
    }
    const handleBlockHoverFour = () => {
        setIsBlockOpenFour((val) => (!val));
    }

    return (
        <>
            <nav className="min-w-full h-12 bg-blue-300 flex px-4 items-center justify-between ">
                <div className="flex gap-6">
                    <div className="flex flex-col overflow-y-auto">
                        <button onMouseEnter={() => { setIsBlockOpenOne(true) }}
                            onMouseLeave={() => setIsBlockOpenOne(false)}
                            className="flex gap-1 items-center justify-center">Features<FaCaretDown /></button>
                        <div>
                            {
                                IsblockOpenOne ? <BlockOne /> : ""
                            }
                        </div>

                    </div>
                    {/* <div>
                        <button onMouseEnter={()=>{handleBlockHoverTwo()}} className="flex gap-1 items-center justify-center">Company<FaCaretDown /></button>
                        {
                            IsblockOpenOne?<BlockOne/>:""
                        }
                    </div>
                    <div>
                        <button onMouseEnter={()=>{handleBlockHoverThree()}} className="flex gap-1 items-center justify-center">Resources<FaCaretDown /></button>
                        {
                            IsblockOpenOne?<BlockOne/>:""
                        }
                    </div>
                    <div>
                        <button onMouseEnter={()=>{handleBlockHoverFour()}} className="flex gap-1 items-center justify-center">Docs<FaCaretDown /></button>
                        {
                            IsblockOpenOne?<BlockOne/>:""
                        }
                    </div> */}
                </div>
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