import React from 'react'
import { FaAngleDown, FaRegSquare } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";


const SideBar = () => {
    return (
        <>
            <div className='w-[312px]  h-full min-h-[670px] gap-1 hidden md:flex flex-col justify-between'>
                <div className='flex flex-col gap-1'>
                    {/* GROUP SECTION */}
                    <div className='GROUP flex flex-row justify-between items-center p-[24px] rounded-t-xl bg-[#131619] '>
                        <div className='flex flex-row justify-center items-center gap-5'>
                            <div>
                                <div className='w-10 h-10 rounded-full bg-red-950'></div>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-[16px]'>Intellisys</p>
                                <p className='text-[12px]'>12 members</p>
                            </div>
                        </div>
                        <div>
                            <FaAngleDown className='' color='gray' />
                        </div>
                    </div>
                    {/* <hr className='bg-gray-600 opacity-10 mt-2' /> */}

                    {/* GENERAL SECTION */}

                    <div className='flex flex-col bg-[#131619]  p-[24px]'>
                        <div className='py-[8px]'>
                            <p className='text-[12px] text-gray-500'>GENERAL</p>
                        </div>
                        <div className='SEARCH flex justify-start items-center gap-5 p-4'>
                            <span><MdOutlineSearch color='gray' /></span>
                            <p className='text-[14px] '>Search</p>
                        </div>

                        <div className='SEARCH flex justify-start items-center gap-5 p-4'>
                            <span><RiBillLine color='gray' /></span>
                            <p className='text-[14px]'>Billing</p>
                        </div>
                    </div>


                    {/* PROJECTS SECTION */}

                    <div className='flex flex-col bg-[#131619] p-4'>
                        <div className='py-[8px]'>
                            <p className='text-[12px] text-gray-500'>PROJECTS</p>
                        </div>

                        <div className='flex gap-1 flex-col'>
                            <div className=' bg-gray-600 rounded-xl'>
                                <div className='flex justify-start items-center p-2 gap-5'>
                                    <span>
                                        <FaRegSquare color='#B6F09C' />

                                    </span>
                                    <p className='text-[14px] '>Orbital Oddysey</p>
                                </div>
                            </div>

                            <div className='  rounded-xl'>
                                <div className='flex justify-start items-center p-2 gap-5'>
                                    <span>
                                        <FaRegSquare color='#B6F09C' />

                                    </span>
                                    <p className='text-[14px] '>Digital Product Launch</p>
                                </div>
                            </div>

                            <div className='  rounded-xl'>
                                <div className='flex justify-start items-center p-2 gap-5'>
                                    <span>
                                        <FaRegSquare color='#B6F09C' />

                                    </span>
                                    <p className='text-[14px] '>Brand Refresh</p>
                                </div>
                            </div>

                            <div className='  rounded-xl'>
                                <div className='flex justify-start items-center p-2 gap-5'>
                                    <span>
                                        <FaRegSquare color='#B6F09C' />

                                    </span>
                                    <p className='text-[14px] '>Social Media Strategy</p>
                                </div>
                            </div>

                            <div className='  rounded-xl'>
                                <div className='flex justify-start items-center p-2 gap-5'>
                                    <span>
                                        <FaRegSquare color='gray' />

                                    </span>
                                    <p className='text-[14px] text-gray-600'>Add new project</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>



<div>
    jk
</div>

            </div>

        </>
    )
}

export default SideBar