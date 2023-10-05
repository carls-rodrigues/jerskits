import Box from "@/app/core/components/box/box";
import Typography from "@/app/core/components/typography/typography";
import FavoriteButton from "@/app/core/components/favorite";
import StarIcon from '@/app/core/assets/icons/star.svg'
import PlusIcon from '@/app/core/assets/icons/plus.svg'

import {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";

import './styles/product_card.css'

type ProductCardProps = {
	size?: 'sm' | 'md' | 'lg';
	landscape?: boolean;
	productData: {
		id: number;
		title: string;
		image: StaticImageData;
		brand: string;
		originalPrice: number;
		priceWithDiscount?: number;
		productCategory: string;
		isFavorite: boolean;
		isAvailable: boolean;
		rating: number;
	}
}
export default function ProductCard({ productData }: ProductCardProps){
	const [priceWithDiscountPercentage, setPriceWithDiscountPercentage] = useState<string | null>(null)
	const [isFavorite, setIsFavorite] = useState<boolean>(productData.isFavorite)
	const handleFavoriteClick = () => {
		setIsFavorite( prevState => !prevState)
	}
	useEffect(() => {
		if (!productData.priceWithDiscount) return
		if (productData.priceWithDiscount > 0) {
			const totalDiscount = Math.ceil((productData.originalPrice - productData.priceWithDiscount) / productData.originalPrice * 100)
			setPriceWithDiscountPercentage(`${totalDiscount.toFixed(0)}% Off`)
		}
	}, []);
	return (
		<Box className="w-370 h-635 flex flex-col justify-between">
			<Box className="px-[2rem] pt-[5rem] w-full h-460 bg-neutral-light-grey relative product_card">
				<Box className="w-full h-full">
					<Image
						className="w-full h-full object-contain"
						src={productData.image} alt={productData.title} />
				</Box>
				<button
					className={
					`absolute top-[3rem] right-[2rem] w-44 h-44 bg-white rounded-full flex items-center justify-center cursor-pointer`}
					onClick={handleFavoriteClick}
				>
					<FavoriteButton isFavorite={isFavorite} />
				</button>
				<button
					className="absolute bottom-0 left-1/2 -translate-x-1/2 h-50 w-190 bg-neutral-black px-[2.4rem] py-[1.3rem] flex items-center justify-center product_card_action"
				>
					<PlusIcon/>
					<Typography className="uppercase text-neutral-white text-base font-bold ml-[1.7rem]">
						ADD TO BAG
					</Typography>
				</button>
			</Box>
			<Box className="flex flex-col items-start justify-between gap-[1rem]">
				<Typography
					className="text-xl font-bold leading-[1.5]"
				>
					{productData.title}
				</Typography>
				<Box className="flex items-center justify-between w-full">
					<Typography
						className="text-lg font-normal leading-[1.5] text-neutral-dark-grey"
					>
						{productData.productCategory}
					</Typography>
					<Box className="flex items-center select-none">
						<StarIcon />
						<Typography
							className="text-base font-semibold leading-[1.5] text-neutral-black"
						>
							{productData.rating}
						</Typography>
					</Box>
				</Box>
				<Box className="flex items-end justify-between w-full">
					<Box className="flex gap-[1rem]">
						<Typography
							className={`text-xl leading-[1.5]
								${
								productData.priceWithDiscount ?
									'text-neutral-grey line-through font-normal' :
									'text-neutral-black font-semibold'
							}
							`}
						>
							${productData.originalPrice}
						</Typography>
						{
							productData.priceWithDiscount && (
								<Typography
									className="text-xl font-semibold leading-[1.5] text-neutral-black"
								>
									${productData.priceWithDiscount}
								</Typography>
							)
						}
					</Box>
					<Box>
						{
							!!priceWithDiscountPercentage && (
								<Typography
									className="text-lg font-semibold leading-[1.5] text-secondary-red"
								>
									{priceWithDiscountPercentage}
								</Typography>
							)
						}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}