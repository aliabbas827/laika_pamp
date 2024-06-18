import React from 'react'
import * as images from "../../assets"
import ButtonImageP from '../ButtonImageP/ButtonImageP'
import { Link } from 'react-router-dom'
const ProfileCard = ({username, profile_id, points, rank, like, message, profile }) => {
    return (
        <>
            <div className='bg-[#050809]  rounded-3xl py-9 px-8'>
                <div className='flex items-center gap-2'>
                <div className='rounded-[50%]'>
                    <img src={images.dp} alt="" className='w-16' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-lg xl:text-xl font-medium'>{username}</h1>
                    <p className='text-lg xl:text-xl custom_text2 mt-1 font-light'>{profile_id}</p>
                </div>
                </div>

                <div className='mt-6 flex items-center flex-wrap justify-center sm:justify-between gap-3'>
                    <div className='flex flex-col items-start'>
                        <h1 className='font-bungee text-sm sm:text-lg text-nowrap'>{points} pts</h1>
                        <h1 className='text-sm sm:text-lg mt-1'>Rank: <span className='font-bungee  '>{rank}</span></h1>
                    </div>
                    <div className='flex items-center  gap-5'>
                    <div className='flex items-center gap-2'>
                        <img src={images.heart} alt="" className='w-5' />
                        <p className='text-white font-medium text-base md:text-lg'>{like}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={images.msg} alt="" className='w-4' />
                        <p className='text-white font-medium text-base md:text-lg'>{message}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={images.profile} alt="" className='w-4' />
                        <p className='text-white font-medium text-base md:text-lg'>{profile}</p>
                    </div>
                    </div>
                    <Link to={"/profile"}>
                    <ButtonImageP image={images.arrowr} />
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default ProfileCard