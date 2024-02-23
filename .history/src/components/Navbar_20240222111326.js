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
                <div className='flex gap-1 items-center'>
                    <img src={Logo} alt="" />
                    <div className="flex gap-3 items-center">
                        <FaRegQuestionCircle className='text-primary' />
                        <img src={EL} alt="" className='w-7 h-7' />
                        <div className="flex items-center">
                            <input type="text"
                                placeholder="search"
                                className="w-[605px] h-[32px] group-hover:w-[300px] rounded-sm border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:bg-gray-500 dark:bg-gray-800"
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary  -translate-y-1/2 right-3" />
                        </div>
                    </div>
                    <div>
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
