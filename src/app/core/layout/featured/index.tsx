import Box from "@/app/core/components/box/box";
import {HTMLAttributes, ReactNode} from "react";

type FeaturedProps = {
	children: ReactNode
} & HTMLAttributes<HTMLElement>;
export default function FeaturedSection({ children, ...props }: FeaturedProps) {
	return (
		<Box
			{...props}
			className={`w-full max-w-1200 m-auto py-[10rem] ${props.className}`}
			variant="section"
		>
			{children}
		</Box>
	)
}