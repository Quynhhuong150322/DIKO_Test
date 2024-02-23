import React from 'react'
import Logo from '../assets/images/Header/Logo.png'
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="">
                {/* Header Section  */}
                <div className="">
                    <img src={Logo} alt="" />
                    <FaRegQuestionCircle />
                </div>
                {/* Upper Nav  */}
                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default Navbar
