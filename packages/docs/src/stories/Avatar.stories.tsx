import {Avatar, AvatarProps} from '@ignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'


export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/RamonVBN.png',
        alt: 'Ramon Barros'
    },
    

} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
    
}

export const WithFallBack: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}
