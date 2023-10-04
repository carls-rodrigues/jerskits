import {createElement, HTMLAttributes, ReactNode} from "react";
import Box from "@/app/core/components/box/box";

type IconBoxProps = {
    children: JSX.Element
} & HTMLAttributes<HTMLElement>
export default function IconBox({ children, ...props }: IconBoxProps) {
    return (
        <Box className="flex flex-wrap justify-center w-24 h-24" {...props}>
            {children}
        </Box>
    )
}