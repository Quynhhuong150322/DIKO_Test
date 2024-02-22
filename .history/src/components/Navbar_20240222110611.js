import React from 'react'
import Logo from '../assets/images/Header/Logo.png'
import EL from '../assets/images/Header/England.png'
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='bg-neutral '>
            <div className="">
                {/* Header Section  */}
                <div className='flex'>
                    <div className="flex gap-3 ">
                        <img src={Logo} alt="" />
                        <FaRegQuestionCircle />
                        <img src={EL} alt="" className='w-7 h-7' />
                    </div>
                    <div>
                        <div className="flex items-center">
                            <input type="text"
                                placeholder="search"
                                className="w-[200px] group-hover:w-[300px] transition-all duration-200 rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:bg-gray-500 dark:bg-gray-800"
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute " />
                        </div>
                    </div>
                </div>

                {/* Upper Nav  */}
                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default Navbar
