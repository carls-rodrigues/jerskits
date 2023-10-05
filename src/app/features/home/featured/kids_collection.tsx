'use client'

import Box from "@/app/core/components/box/box";
import FeaturedSection from "@/app/core/layout/featured";
import ProductCard from "@/app/core/components/product/product_card";
import Typography from "@/app/core/components/typography/typography";

import LiverpoolBlackShirt from "@/app/core/assets/products/liverpool-black-shirt.png";
import BrandNikeIcon from '@/app/core/assets/icons/brand-nike.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function KidsCollection() {
	const productData = {
		id: 1,
		title: 'Liverpool F.C. 21/22 Home Kit Goalkeeper',
		image: LiverpoolBlackShirt,
		brand: BrandNikeIcon,
		originalPrice: 59.66,
		priceWithDiscount: 49.66,
		productCategory: 'Football Shirt',
		isFavorite: true,
		isAvailable: true,
		rating: 4.5,
	}

	return (
		<FeaturedSection className="">
			<Box
				className="w-full flex gap-[10rem]"
			>
				<Box className="max-w-325">
					<Typography className="text-4xl font-bold" variant="h1">
						New Kids Collection
					</Typography>
					<Typography
						className="text-lg font-normalleading-[1.5] mt-[2rem]"
					>
						We are proud of our new work and are happy to present them to you.
					</Typography>
				</Box>
				<Box className="w-full">
					<Swiper
						modules={[EffectFade]}
						spaceBetween={30}
						slidesPerView={3}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide><ProductCard productData={productData} /></SwiperSlide>
						<SwiperSlide><ProductCard productData={productData} /></SwiperSlide>
						<SwiperSlide><Box className="w-370 h-635 bg-transparent" /></SwiperSlide>
						...
					</Swiper>
				</Box>
			</Box>
		</FeaturedSection>
	)
}