import React from 'react'

const Test = () => {
    return (
        <>
            <div className="flex w-full  justify-center items-center h-full  mt-2 p-2 overflow-y-scroll  scroll  scroll-smooth">
                <div className='text-center flex flex-col items-center h-full'>
                    <div>
                        <h3 className='font-bold text-xl'>Innovation Starter Pack</h3>
                        <p className='text-sm text-gray-500'>Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>
                    </div>
                    {/* CONTENT */}
                    <div className="flex flex-wrap justify-center items-center gap-5 mt-2">
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col my-4'>
                                <div className='bg-gray-900 shadow-2xl shadow-green-500 p-4 rounded-full'>
                                    <PiChatCircleLight color='green ' />
                                </div>
                                <span className='font-bold'>Creative Assets</span>
                            </div>

                            {
                                Creativeassets.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-[#0D0F10] to-black bg-gradient-to-r p-4 w-48 mt-2 rounded-2xl flex justify-between items-center'>
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                            <IoIosArrowRoundForward size={21} color='gray' />
                                        </div>
                                    )
                                })
                            }
                        </div>


                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col my-4'>
                                <div className='bg-gray-900 shadow-2xl shadow-blue-500 p-4 rounded-full'>
                                    <FaCode />
                                </div>
                                <span className='font-bold' >Developer Tools</span>
                            </div>
                            {
                                DeveloperTools.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-[#0D0F10] to-black bg-gradient-to-r p-4 w-48 mt-2 rounded-2xl flex justify-between items-center'>
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                            <IoIosArrowRoundForward size={21} color='gray' />
                                        </div>
                                    )
                                })
                            }

                        </div>


                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col my-4'>
                                <div className='bg-gray-900 shadow-2xl shadow-violet-500 p-4 rounded-full'>
                                    <FaPenFancy />
                                </div>
                                <span className='font-bold' >Content Creation</span>
                            </div>

                            {
                                ContentCreation.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-[#0D0F10] to-black bg-gradient-to-r p-4 w-48 mt-2 rounded-2xl flex justify-between items-center'>
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                            <IoIosArrowRoundForward size={21} color='gray' />
                                        </div>
                                    )
                                })
                            }
                        </div>



                        <div className='flex flex-col items-center'>
                            <div className='flex items-center flex-col my-4'>
                                <div className='bg-[#0D0F10] shadow-2xl shadow-yellow-500 p-4 rounded-full'>
                                    <FaLightbulb />
                                </div>
                                <span className='font-bold' >Idea Generation</span>
                            </div>

                            {
                                IdeaGeneration.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-[#0D0F10] p-4 w-48 mt-2 rounded-2xl flex justify-between items-center'>
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                            <IoIosArrowRoundForward size={21} color='gray' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='flex flex-col items-center mt-8'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cumque, molestiae amet sequi totam in quaerat molestias repellat consectetur dolorem eius rerum, enim dolore accusamus. Accusamus autem doloremque nulla.</p>


                    </div>
                </div>
            </div>
            <div className='bg-gray-600 w-full  h-[100px] p-4 rounded-2xl'>
                <input className='w-full  h-full bg-transparent' type="text" />
            </div>
        </>
    )
}

export default Test