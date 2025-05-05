import { ComponentProps } from "react";
import { ToastClose, ToastContainer, ToastDescription, ToastIgniteViewport, ToastTitle } from "./styles";
import { VariantProps } from "@stitches/react";
import { X } from "phosphor-react";
import { ToastProvider } from "@radix-ui/react-toast";


export function ToastIgnite({title, description, open, onOpenChange, duration = 2000}: ToastIgniteProps) {

    return (
        <ToastProvider>
        <ToastContainer  duration={duration} open={open} onOpenChange={onOpenChange}>
            <div>
                <ToastTitle>{title}</ToastTitle>
                <ToastClose asChild>
                    <X/>
                </ToastClose>
            </div>
            
            <ToastDescription>{description}</ToastDescription>
            
        </ToastContainer>

        <ToastIgniteViewPort/>
        </ToastProvider>
    )
}

interface ToastIgniteComponentProps extends ComponentProps<typeof ToastContainer> {}

export interface ToastIgniteProps extends VariantProps<ToastIgniteComponentProps> {
    title: string,
    description: string,
    open?: boolean,
    onOpenChange?: any,
    duration: number
}

export function ToastIgniteViewPort(){

    return (
        <ToastIgniteViewport/>
    )
}


ToastIgnite.displayName = 'ToastIgnite'

