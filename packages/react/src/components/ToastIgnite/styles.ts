
import { styled, keyframes } from '../../styles'
import * as Toast from "@radix-ui/react-toast";



const slideIn = keyframes({
    from: {
        transform: 'translateX(100%)'
    },

    to: {
         transform: 'translateX(0)'
    }
})

const slideOut = keyframes({
    from: {
        transform: 'translateX(0)'
    },

    to: {
        transform: 'translateX(100%)'
    }
})

const hide = keyframes({
    from: {
        opacity: 1
    },

    to: {
        opacity: 0
    }
})

export const ToastContainer = styled(Toast.Root, {
    
    width: '22.5rem',
    height: '5.125rem',
    boxSizing: 'border-box',

    backgroundColor: '$gray800',
    padding: '0.75rem 1.25rem',
    borderRadius: '$sm',

    border: '1px solid $colors$gray600',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '$1',

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    
    '&[data-state="open"]': {
        animation: `${slideIn} 150ms ease`,

    },

    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,

    },

    '&[data-state="cancel"]': {
        animation: `${slideOut} 100ms ease`,

    },

    

})



export const ToastTitle = styled(Toast.Title, {

    fontFamily: '$default',
    fontWeight: '$bold',
    lineHeight: '$base',
    fontSize: '$xl',
    color: '$white',
    
})

export const ToastDescription = styled(Toast.Description, {
    
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$xs',
    color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {

    width: '$5',
    height: '$5',
    color: '$gray200',
    cursor: 'pointer'
    
})

export const ToastIgniteViewport = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 121212121212,
    padding: 25

})
