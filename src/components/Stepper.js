import { Step, StepLabel, Stepper } from '@mui/material'
import StepConnector, {
    stepConnectorClasses,
} from '@mui/material/StepConnector'
import { styled } from '@mui/system'

export const StepperConntector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.root}`]: {},

    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },

    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },

    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },

    [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#eaeaf0',
        borderTopWidth: 1,
        borderRadius: 1,
    },
}))

export const StepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: '#000',
    display: 'flex',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #eaeaf0',
    borderRadius: 20,
    ...(ownerState.active && {
        color: '#fff',
        border: '1px solid #784af4',
        backgroundColor: '#784af4',
    }),
    ...(ownerState.completed && {
        color: '#fff',
        border: '1px solid #784af4',
        backgroundColor: '#784af4',
    }),
}))

export function StepIcon(props) {
    const { active, completed, className, icon } = props

    return (
        <StepIconRoot ownerState={{ active, completed }} className={className}>
            <div>{icon}</div>
        </StepIconRoot>
    )
}

function CustomStepper({ activeStep, labels }) {
    return (
        <Stepper
            activeStep={activeStep}
            sx={{ my: { sm: 10, xs: 5 }, mx: { md: 8 } }}
            connector={<StepperConntector />}
        >
            {labels.map((label, index) => (
                <Step
                    key={label}
                    sx={{
                        padding: 0,
                    }}
                >
                    <StepLabel
                        StepIconComponent={StepIcon}
                        sx={{
                            padding: 0,
                            position: 'relative',
                            '& .MuiStepLabel-iconContainer': {
                                padding: 0,
                            },
                            '& .MuiStepLabel-labelContainer':
                                index === activeStep &&
                                activeStep !== labels.length - 1
                                    ? {
                                          height: '1px',
                                          background: '#784af4',
                                          position: 'absolute',
                                          width: '30px',
                                          right: '-30px',
                                      }
                                    : null,
                        }}
                    ></StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default CustomStepper
