import {Box, Text, TextInput, TextInputProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Form/TextInput',
    component: TextInput,

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
    
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    
    args: {
        placeholder: 'Type your name'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true
    }
}

