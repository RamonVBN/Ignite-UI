import { VariantProps } from "@stitches/react";
import { Label, MultiStepContainer, Step, Steps } from "./styles";
import { ComponentProps } from "react";


export function MultiStep({size, currentStep = 1}: MultiStepProps){

    return (
        <MultiStepContainer>
            <Label>Passo {currentStep} de {size}</Label>

            <Steps css={{'--steps-size': size}}>
                {Array.from({length: size}, (_, i) => i + 1).map((step) => {
                    return <Step key={step} active={currentStep >= step}/>
                })}
            </Steps>
        </MultiStepContainer>
    )

}

interface MultiStepComponentProps extends ComponentProps<typeof MultiStepContainer> {}
export interface MultiStepProps extends VariantProps<MultiStepComponentProps> {
    size: number,
    currentStep?: number
}

MultiStep.displayName = 'MultiStep'