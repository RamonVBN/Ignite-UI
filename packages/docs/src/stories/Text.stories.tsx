import {Text, TextProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quod nulla doloribus aliquam non sequi delectus quibusdam quis minima eum laboriosam voluptates explicabo, consequatur fugit distinctio ipsam nam laborum quas.',
        size: '9xl'
    },

    argTypes: {
        size: {
            options: ['xxs','xs','sm','md','lg','2xl','5xl','6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
    
}


export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}




            