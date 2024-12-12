"use client"
import React from 'react'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className='pt-[100px] px-[128px] mb-[70px] bg-[#F3F0F0]'>
			<div className="flex items-center justify-between overflow-hidden z-10 relative">
				<div className="w-[595px] pb-[130px] text-left">
					<h2 className="mb-[6px] text-[#0A1729] text-[40px] font-black leading-[120%]">Siz kutgan Xiaomi 12 Mi Laite</h2>
					<p className="mb-[22px] text-[#545D6A] text-[16px] font-normal leading-[19px]">Orginallik va qulay narxni o'zida jamlagan  Xiaomi 12 Mi Laite  siz uchun eng yaxshi arziydigan takliflarimizdan biridir!ii</p>
					<button className="bg-[#0F4A97] py-[14px] px-[24px] rounded-[6px] text-center text-white text-[16px] font-normal leading-[120%]">Batafsil</button>
				</div>
				<Image className='absolute buttom-[-300px] right-[150px] z-0' style={{width: "auto", height: "auto"}} src={"/HeroImg.png"} alt="hero img" width={730} height={730}/>
			</div>
		</div>
	)
}

export default Hero