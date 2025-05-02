import {Box, Text, CheckBox, CheckBoxProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Form/CheckBox',
    component: CheckBox,

    decorators: [
        (Story) => {
            return (
                <Box as='label' css={{display: 'flex', flexDirection: 'row', gap: '$2'}}>
                    {Story()}
                    <Text size='sm'>Accept terms of use</Text>
                </Box>
            )
        }
    ]
    
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
    
    args: {
        placeholder: 'Type your name '
    }
}

