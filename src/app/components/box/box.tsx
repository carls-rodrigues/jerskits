import {createElement, HTMLAttributes, ReactNode} from "react";

type BoxProps= {
    children?: ReactNode,
    variant?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav'
} & HTMLAttributes<HTMLElement>

export default function Box({ children, variant = 'div', ...props }: BoxProps) {
    return createElement(variant, props, children)
}