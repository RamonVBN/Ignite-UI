import { ComponentProps } from "react";
import { styled } from "../styles";
import { VariantProps } from "@stitches/react";


export const TextArea = styled('textarea', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',

    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 89,

    '&:focus': {
        outline: 0,
        borderColor: '$ignite300'
    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },

    '&::placeholder': {
       color: '$gray400'
    },

    display: 'flex',
    alignItems: 'baseline',
})

interface TextAreaComponentProps extends ComponentProps<typeof TextArea> {}
export interface TextAreaProps extends VariantProps<TextAreaComponentProps> {}

TextArea.displayName = 'TextArea'