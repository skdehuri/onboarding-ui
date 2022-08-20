import {
    Box,
    FormControl,
    FormHelperText,
    InputLabel,
    Typography,
} from '@mui/material'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CustomButton } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { FormContext } from '../../../context/FormContext'
import Header from './Header'

function FirstStep({ setNextStep }) {
    const { setFormData, formData } = useContext(FormContext)

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({
        mode: 'all',
    })

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
                title="Welcome! First things first..."
                subtitle="You can always change them later."
            />

            <Box sx={{ mx: { xs: 0, sm: 5 } }}>
                <FormControl
                    variant="standard"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <InputLabel shrink htmlFor="full-name">
                        <Typography variant="label">Full Name</Typography>
                    </InputLabel>
                    <Input
                        id="full-name"
                        placeholder="Steve Jobs"
                        {...register('fullName', {
                            required: true,
                        })}
                    />
                    {errors.fullName && (
                        <FormHelperText error={true} sx={{ mb: 2 }}>
                            Full name is required
                        </FormHelperText>
                    )}
                </FormControl>

                <FormControl
                    variant="standard"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <InputLabel shrink htmlFor="display-name">
                        <Typography variant="label">Display Name</Typography>
                    </InputLabel>
                    <Input
                        id="display-name"
                        placeholder="Steve"
                        {...register('displayName', {
                            required: true,
                        })}
                    />
                    {errors.displayName && (
                        <FormHelperText error={true} sx={{ mb: 2 }}>
                            Dsiplay name is required
                        </FormHelperText>
                    )}
                </FormControl>
                <CustomButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textTransform: 'capitalize' }}
                >
                    Create Workspace
                </CustomButton>
            </Box>
        </Box>
    )
}

export default FirstStep
