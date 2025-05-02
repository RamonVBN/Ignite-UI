import {Heading, HeadingProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Typography/Heading',
    component: Heading,

    args: {
        children: 'Custom Title',
        size: 'md'
    },

    argTypes: {
        size: {
            options: ['sm','md','lg','2xl','5xl','6xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
    
    
}


export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 heading',
        as: 'h1',

        size: 'sm'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading será sempre um h2, mas pode ser alterado pela propriedade "as"'
            }
        }
    }
}


