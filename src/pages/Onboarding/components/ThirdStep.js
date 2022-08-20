import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'

import IndividualLogo from '../../../assets/individual.png'
import GroupLogo from '../../../assets/group.png'
import { FormContext } from '../../../context/FormContext'
import { useForm } from 'react-hook-form'
import { CustomButton } from '../../../components/Button'
import Header from './Header'

function ThirdStep({ setNextStep }) {
    const { setFormData, formData } = useContext(FormContext)

    const { handleSubmit, setValue, watch } = useForm({
        mode: 'all',
    })

    const workspaceType = watch('workspaceType', 1)

    const onSubmit = (values) => {
        setFormData({ ...formData, ...values })
        setNextStep()
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
        >
            <Header
                title="How are you planning to use Eden?"
                subtitle="We'll streamline your setup experience accordingly."
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 4,
                }}
            >
                <Box
                    sx={{
                        padding: { xs: 2.5, sm: 5 },
                        border: '1px solid #eaeef5',
                        borderRadius: 3,
                        cursor: 'pointer',
                        ...(workspaceType === 1
                            ? {
                                  border: '1px solid #664de5',
                              }
                            : null),
                    }}
                    onClick={() => setValue('workspaceType', 1)}
                >
                    <Box
                        component="img"
                        src={IndividualLogo}
                        sx={{ height: 'auto', width: 30 }}
                    />
                    <Typography>For myself</Typography>
                    <Typography>
                        Write better. Think more clearly. Stay organized
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: { xs: 2.5, sm: 5 },
                        border: '1px solid #eaeef5',
                        borderRadius: 3,
                        cursor: 'pointer',
                        ...(workspaceType === 2
                            ? {
                                  border: '1px solid #664de5',
                              }
                            : null),
                    }}
                    onClick={() => setValue('workspaceType', 2)}
                >
                    <Box
                        component="img"
                        src={GroupLogo}
                        sx={{ height: 'auto', width: 30 }}
                    />
                    <Box>
                        <Typography>With my team</Typography>
                        <Typography>
                            Wikis, docs, tasks & projects, all in one place
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: 'capitalize' }}
            >
                Create Workspace
            </CustomButton>
        </Box>
    )
}

export default ThirdStep
