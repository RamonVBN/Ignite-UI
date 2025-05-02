import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from 'phosphor-react'
import { VariantProps } from "@stitches/react";

interface AvatarComponentProps extends ComponentProps<typeof AvatarImage> {}
export interface AvatarProps extends VariantProps<AvatarComponentProps> {}

export function Avatar(props: AvatarProps){

    return (
        <AvatarContainer>
            <AvatarImage {...props}/>

            <AvatarFallback delayMs={600}>
                <User/>
            </AvatarFallback>
        </AvatarContainer>
    )
}


Avatar.displayName = 'Avatar'
