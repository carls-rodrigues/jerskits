import Link from "next/link";
import Typography from "@/app/components/typography/typography";
import {HTMLAttributes} from "react";

type MenuItemProps = {
    item: string
    link: string
} & HTMLAttributes<HTMLAnchorElement>

export default function MenuItem({ item, link, ...props }: MenuItemProps) {
    return (
        <li className="font-semibold text-sm leading-5 list-none">
            <Link href={link} {...props}>
                <Typography>{item}</Typography>
            </Link>
        </li>
    )
}