import {createElement, HTMLAttributes, ReactNode} from 'react'

type TypographyProps<T> = {
    children?: ReactNode,
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
} & HTMLAttributes<T>
export default function Typography<T>({ children, variant = 'p', ...props }: TypographyProps<T>) {
    return createElement(variant, props, children)
}