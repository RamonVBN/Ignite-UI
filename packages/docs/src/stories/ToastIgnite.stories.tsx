import { Button, ToastIgnite, ToastIgniteProps} from '@rignite-ui/react'
import type {StoryObj, Meta} from '@storybook/react'
import { useState } from 'react'

export default {
    title: 'Data display/ToastIgnite',
    component: ToastIgnite,

    decorators: [
        () => {
           const [isToastOpen, setIsToastOpen] = useState(false)
            return (
                <>
                <Button onClick={() => setIsToastOpen(true)}>Open Toast</Button>
                <ToastIgnite title='Agendamento' description='Quarta-feira, 23 de Outubro às 16h' open={isToastOpen} onOpenChange={setIsToastOpen}/>

                </>    
            )
        }
    ]

    

} as Meta<ToastIgniteProps>

export const Primary: StoryObj<ToastIgniteProps> = {
     
    args: {
        title: 'Agendamento realizado',
        description: 'Quarta-feira, 23 de Outubro às 16h'
    }
}



