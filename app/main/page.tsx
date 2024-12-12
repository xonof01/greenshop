"use client"
import { Products, ProductsType } from '@/service/Products';
import Hero from '../hero/page';
import { ProductCardIcon1, ProductCardIcon2, ProductCardIcon3 } from '@/assets/images/icon';

const Main = () => {
	const products = Products()

	return (
		<div>
			<Hero />
			<section className='px-[128px] pb-[100px]'>
				<h3 className="mb-[50px] text-black text-[32px] font-bold leading-[130%]">Most popular product</h3>
				<div className="flex justify-between gap-[30px] overflow-x-auto overflow-hidden">
					{products.map((item: ProductsType) => (
						<div className=' min-w-[275px] min-h-[400px] relative rounded-[8px] bg-[#EBEFF3] cursor-pointer' key={item.id}>
							<button className="absolute top-[18px] right-[18px] z-10"><ProductCardIcon1 /></button>
							<img className='object-contain absolute z-0 mb-[10px]' style={{ width: "275px", height: "275px" }} src={item.images[0]} alt="img" width={275} height={275} />
							<div className="left-[10px] absolute bottom-0 right-0">
								<h4 className='mb-[28px] text-[#545D6A] text-[18px] font-bold leading-[19px]'>{item.name}</h4>
								<strong className="text-[#0A1729] text-[20px] font-semibold leading-[26px]">${item.price}</strong>
								<div className="flex items-center justify-between">
									<div className="p-[5px] text-[#F02C96] text-[14px] font-normal leading-[94.52%] tracking-[0.5%] rounded-[3px] bg-[rgba(240,44,150,0.1)]">6 oy / 1 200 000 usz</div>
									<div className="flex items-center gap-[10px]">
										<button className="py-[10px] px-[14px] rounded-[6px] border-[1px] border-[#888] flex items-center justify-center text-[#545D6A] duration-500 hover:bg-[#134E9B] bg-transparent hover:border-transparent hover:text-white"><ProductCardIcon2 /></button>
										<button className="py-[10px] px-[14px] rounded-[6px] border-[1px] border-transparent flex items-center justify-center text-white duration-500 hover:bg-transparent bg-[#134E9B] hover:border-[#888] hover:text-[#545D6A]"><ProductCardIcon3 /></button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default Main