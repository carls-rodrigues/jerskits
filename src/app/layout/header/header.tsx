'use client'

import Box from "@/app/components/box/box";
import Link from "next/link";
import Typography from "@/app/components/typography/typography";
import IconBox from "@/app/components/icon/icon-box";
import Logo from "@/app/components/logo/logo";
import MenuItem from "@/app/layout/header/components/menu-item";

import SearchIcon from "@/app/assets/icons/search.svg";
import ShoppingBagIcon from "@/app/assets/icons/shopping-bag.svg";
import HeartIcon from "@/app/assets/icons/heart.svg";

export default function Header() {
    const hasUser = false
    return (
        <Box variant="header" className="container m-auto h-90 p-5 max-w-1200">
            <Box className="flex justify-between items-center h-full">
                <Box>
                    <Link href="/">
                        <Logo />
                    </Link>
                </Box>
                <Box>
                    <Box variant="nav">
                        <ul className="flex gap-10">
                            <MenuItem item="Men" link="#" />
                            <MenuItem item="Women" link="#" />
                            <MenuItem item="Kids" link="#" />
                            <MenuItem item="Brands" link="#" />
                        </ul>
                    </Box>
                </Box>
                <Box className="flex gap-10 items-center">
                    <Link href="#">
                        <IconBox>
                            <SearchIcon />
                        </IconBox>
                    </Link>
                    <Link href="#">
                        <IconBox>
                            <ShoppingBagIcon />
                        </IconBox>
                    </Link>
                    <Link href="#">
                        <IconBox>
                            <HeartIcon />
                        </IconBox>
                    </Link>
                    <Link href="#">
                        <Typography className="text-sm font-semibold leading-5">
                            {hasUser ? 'Sign Out' : 'Sign In'}
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}