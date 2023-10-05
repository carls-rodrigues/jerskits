'use client';

import Box from "@/app/core/components/box/box";

import BrandNikeIcon from '@/app/core/assets/brands/icons/dark-nike.svg'
import FeaturedSection from "@/app/core/layout/featured";

export default function BrandsSection() {
	return (
		<FeaturedSection
			className="flex justify-between items-center"
		>
			{
				[1, 2, 3, 4, 5, 6].map((item, index) => (
					<Box
						key={index}
						className="w-60 h-60"
					>
						<BrandNikeIcon />
					</Box>
				))
			}
		</FeaturedSection>
	)
}