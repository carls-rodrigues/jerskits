import { HTMLAttributes, ReactNode} from "react";

type ContainerProps = {
    children: ReactNode
} & HTMLAttributes<HTMLElement>

export default function Container({ children, ...props }: ContainerProps) {
    return (
        <main {...props}>
            {children}
        </main>
    )
}