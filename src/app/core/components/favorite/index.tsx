import {useEffect, useState} from "react";

type FavoriteButtonProps = {
	isFavorite: boolean;
}
export default function FavoriteButton({ isFavorite }: FavoriteButtonProps) {
	const [strokeColor, setStrokeColor] = useState('#262D33')
	const [fillColor, setFillColor] = useState('')
	useEffect(() => {
		if (isFavorite) {
			setStrokeColor('#D6484C')
			setFillColor('#D6484C')
		} else {
			setStrokeColor('#262D33')
			setFillColor('')
		}
	}, [isFavorite]);
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7 4C4.23858 4 2 6.23858 2 9C2 10.1256 2.07548 11.4927 3.35671 12.9874C4.63793 14.4822 12 21.0004 12 21.0004C12 21.0004 19.3621 14.4822 20.6433 12.9874C21.9245 11.4927 22 10.1256 22 9C22 6.23858 19.7614 4 17 4C14.2386 4 12 6.23858 12 9C12 6.23858 9.76142 4 7 4Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.2"/>
		</svg>
	)
}