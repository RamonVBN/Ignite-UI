import { ComponentProps } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";
import { VariantProps } from "@stitches/react";

export function TextInput({prefix,  ...props}: TextInputProps){
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props}/>
        </TextInputContainer>
    )
}


interface TextInputComponentProps extends ComponentProps<typeof Input> {}
export interface TextInputProps extends VariantProps<TextInputComponentProps> {
    prefix?: string,
    disabled?: boolean,
    placeholder: string
}

TextInput.displayName = 'TextInput'