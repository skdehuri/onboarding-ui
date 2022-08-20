import { Box } from '@mui/material'
import React, { useContext } from 'react'

import SuccessTickLogo from '../../../assets/success-tick.png'
import { CustomButton } from '../../../components/Button'
import { FormContext } from '../../../context/FormContext'
import Header from './Header'

function SuccessStep() {
    const { formData } = useContext(FormContext)

    return (
        <>
            <Box sx={{ mb: 5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        src={SuccessTickLogo}
                        sx={{ height: 'auto', mb: 5 }}
                    />
                </Box>

                <Header
                    title={`Congratulations, ${formData.displayName}!`}
                    subtitle="You have completed onboarding, you can start using the Eden!"
                />

                <CustomButton
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textTransform: 'capitalize' }}
                    onClick={() => console.log(formData)}
                >
                    Launch {formData.workspaceName}
                </CustomButton>
            </Box>
        </>
    )
}

export default SuccessStep
