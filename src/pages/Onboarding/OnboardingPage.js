import { Box, Container } from '@mui/material'
import { useState } from 'react'

import Brand from '../../components/Brand'
import FirstStep from './components/FirstStep'
import CustomStepper from '../../components/Stepper'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'
import SuccessStep from './components/SuccessStep'
import FormProvider from '../../context/FormContext'

function OnboardingPage() {
    const stepperLabels = [1, 2, 3, 4]

    const [currentStep, setCurrentStep] = useState(0)

    const setNextStep = () => setCurrentStep((currentStep) => currentStep + 1)

    const renderSteps = () => {
        switch (currentStep) {
            case 0:
                return <FirstStep setNextStep={setNextStep} />
            case 1:
                return <SecondStep setNextStep={setNextStep} />
            case 2:
                return <ThirdStep setNextStep={setNextStep} />
            case 3:
                return <SuccessStep />
            default:
                return <FirstStep setNextStep={setNextStep} />
        }
    }

    return (
        <FormProvider>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        mx: { sm: 5 },
                        mt: 10,
                    }}
                >
                    <Brand />

                    <CustomStepper
                        activeStep={currentStep}
                        labels={stepperLabels}
                    />

                    {renderSteps()}
                </Box>
            </Container>
        </FormProvider>
    )
}

export default OnboardingPage
