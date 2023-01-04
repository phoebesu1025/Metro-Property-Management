import React from 'react'
import ButtonGroup from './Buttons/ButtonGroup';
import ManagerArray from './ManagerInfo/ManagerInfoArray'

const ManagerInfoItems = () => {
    const ManagerArrayList = ManagerArray;
    return (
        <div className='flex justify-center
        
        ' >




            <div id='slider' className=' flex  flex-wrap justify-center gap-8
                    md:justify-start
            '>
                {ManagerArrayList.map((ManagerArrayList, index) => {
                    return (
                        <div className='w-[17.56rem] h-[15rem]  bg-white rounded-md shadow-lg px-7' key={index}>
                            <div className='top-section flex justify-between py-6'>
                                <div className='my-auto'><img src={ManagerArrayList.imgSrc} alt={ManagerArrayList.imgAlt} /></div>

                                <div className='flex flex-col text-[0.6rem] font-semibold text-end'>
                                    <div>{`${ManagerArrayList.successfulClient} Successful Clients`}</div>
                                    <div>{ManagerArrayList.email}</div>
                                    <div>{ManagerArrayList.phone}</div>
                                </div>
                            </div>



                            <div>
                                <h1 className='font-bold text-[0.9rem] -mt-[0.3rem] '>
                                    {ManagerArrayList.name}
                                </h1>
                                <p className=' w-[13.5rem] mx-auto text-[0.6rem] leading-4 mb-5'>
                                    {ManagerArrayList.detail} <br />
                                    {`Available to meet on ${ManagerArrayList.availableDate}`}
                                </p>
                            </div>
                            <ButtonGroup />
                        </div>
                    )
                })}
                {/*Might can divide into more components? */}
            </div>




        </div>

    )
}

export default ManagerInfoItems