import { ComponentProps, forwardRef, ComponentRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";
import { VariantProps } from "@stitches/react";

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(({prefix,  ...props}: TextInputProps, ref) => {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input  ref={ref} {...props}/>
        </TextInputContainer>
    )
})


interface TextInputComponentProps extends ComponentProps<typeof Input> {}
export interface TextInputProps extends VariantProps<TextInputComponentProps> {
    prefix?: string,
    disabled?: boolean,
    placeholder?: string
}

TextInput.displayName = 'TextInput'