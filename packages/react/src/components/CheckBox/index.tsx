import { Check } from "phosphor-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";
import { ComponentProps } from "react";
import { VariantProps } from "@stitches/react";

export function CheckBox(props: CheckBoxProps){

    return (
        <CheckBoxContainer {...props}>
            <CheckBoxIndicator asChild>
                <Check weight="bold"/>
            </CheckBoxIndicator>
        </CheckBoxContainer>
    )
}

interface CheckBoxComponentProps extends ComponentProps<typeof CheckBoxContainer> {}
export interface CheckBoxProps extends VariantProps<CheckBoxComponentProps> {}

CheckBox.displayName = 'CheckBox'