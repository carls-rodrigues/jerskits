import {ReactNode} from "react";
import Box from "@/app/components/box/box";

type HeroProps = {
    children: ReactNode
}
export default function Hero({ children }: HeroProps) {
    return(
        <Box variant="section">
            {children}
        </Box>
    )
}