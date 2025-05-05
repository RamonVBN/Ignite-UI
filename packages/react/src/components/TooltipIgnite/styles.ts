import { styled } from "../../styles";
import * as Toast from '@radix-ui/react-tooltip'


export const TooltipContent = styled(Toast.Content, {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    color: '$gray100',
    borderRadius: '5px',
    boxSizing: 'border-box',
    maxHeight: '44px',

    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$medium',
    lineHeight: '$short',
    boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',
    

    svg: {
        fill: '$gray900'
    }
    
})