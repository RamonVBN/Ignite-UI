import { TooltipArrow, TooltipTrigger } from "@radix-ui/react-tooltip";
import {  TooltipContent } from "./styles";
import * as Tooltip from '@radix-ui/react-tooltip'

export function TooltipIgnite({children, content}: TooltipIgniteProps){
    return (
        <Tooltip.TooltipProvider>
        <Tooltip.Root>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>

            <TooltipContent sideOffset={8}>
                {content}
                <TooltipArrow/>
                
            </TooltipContent>

        </Tooltip.Root>
        </Tooltip.TooltipProvider>
    )
}

export interface TooltipIgniteProps {
    children: React.ReactNode
    content: string
}

TooltipIgnite.displayName = 'TooltipIgnite'