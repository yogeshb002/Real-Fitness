import React from 'react'

const Articles = ({ data }) => {
    console.log(data);
    return (
        <>
            {
                data?.map((val) => {
                    return <div className='flex w-full p-5 gap-5 justify-between'>
                        <div className='w-[300px] h-[200px]'>
                            <img src={val?.urlToImage} className='w-full h-full object-cover ' />
                        </div>
                        <div className='flex flex-col gap-3 justify-start items-start'>
                            <p className=' text-[30px]'>{val?.title?.slice(0,30)}</p>
                            <p className=' text-[14px]'>{val?.content}</p>
                        </div>
                        {/* <div>
                            <img src='images\fitness.png' className='w-200 h-200 ' />
                        </div> */}
                    </div>
                })
            }
        </>
    )
}

export default Articles