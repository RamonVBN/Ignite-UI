import {Box, Text, TextArea, TextAreaProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Form/TextArea',
    component: TextArea,

    decorators: [
        (Story) => {
            return (
                <Box as='label' css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                    <Text size='sm'>Email address</Text>
                    {Story()}
                </Box>
            )
        }
    ]
    
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    
    args: {
        placeholder: 'Add any observations'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true
    }
}

