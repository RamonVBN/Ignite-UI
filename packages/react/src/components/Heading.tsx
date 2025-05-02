import { VariantProps } from "@stitches/react";
import { styled } from "../styles";
import { ComponentProps } from "react";

export const Heading = styled('h2', {

    fontFamily: '$default',
    lineHeight: '$shorter',
    margin: 0,
    color: '$gray100',

    variants: {
        size: {
            sm: {fontSize: '$xl'},
            md: {fontSize: '$2xl'},
            lg:{fontSize: '$4xl'},
            xl: {fontSize: '$5xl'},
            '2xl': {fontSize: '$6xl'},
            '4xl': {fontSize: '$7xl'},
            '5xl': {fontSize: '$8xl'},
            '6xl': {fontSize: '$9xl'},
        }
    },

    defaultVariants: {
        size: 'md',
    }
})

interface HeadingComponentProps extends ComponentProps<typeof Heading> {}
export interface HeadingProps extends VariantProps<HeadingComponentProps> {}

Heading.displayName = 'Heading'