import {Box, BoxProps, Text} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: (
            <>
            <Text>Testando o elemento box</Text>
            </>
        )
        
    }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
    
}
