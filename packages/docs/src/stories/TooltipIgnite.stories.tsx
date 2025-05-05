import { Button, TooltipIgnite, TooltipIgniteProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'

export default {
    title: 'Data display/TooltipIgnite',
    component: TooltipIgnite,

    decorators: [
        () => {

            return (
                
                <TooltipIgnite content='tooltip example'>
                    <Button>Show tooltip</Button>
                </TooltipIgnite>
            )
        }
    ]
    

} as Meta<TooltipIgniteProps>

export const Primary: StoryObj<TooltipIgniteProps> = {
     
}



