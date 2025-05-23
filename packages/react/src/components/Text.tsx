import { VariantProps } from "@stitches/react";
import { styled } from "../styles";
import { ComponentProps} from "react";

export const Text = styled('p', {

    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    color: '$gray100',

    variants: {
        size: {
            xxs: {fontSize: '$xxs'},
            xs: {fontSize: '$xs'},
            sm: {fontSize: '$sm'},
            md: {fontSize: '$md'},
            lg:{fontSize: '$lg'},
            xl: {fontSize: '$xl'},
            '2xl': {fontSize: '$2xl'},
            '4xl': {fontSize: '$4xl'},
            '5xl': {fontSize: '$5xl'},
            '6xl': {fontSize: '$6xl'},
            '7xl': {fontSize: '$7xl'},
            '8xl': {fontSize: '$8xl'},
            '9xl': {fontSize: '$9xl'},
        }
    },

    defaultVariants: {
        size: 'md',
    }
})

interface TextComponentProps extends ComponentProps<typeof Text> {}
export interface TextProps extends VariantProps<TextComponentProps> {}

Text.displayName = 'Text'