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

function SecondStep({ setNextStep }) {
    const { setFormData, formData } = useContext(FormContext)

    const {
        handleSubmit,
        formState: { errors },
        register,
        watch,
    } = useForm({
        mode: 'all',
    })

    const watchWorkspaceName = watch('workspaceName', 'example')
    const workspaceDomain =
        watchWorkspaceName
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '') || 'example'

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
                title="Let's set up a home for all your work"
                subtitle="You can always create another workspace later"
            />

            <FormControl
                variant="standard"
                sx={{
                    display: 'flex',
                }}
            >
                <InputLabel shrink htmlFor="workspace-name">
                    <Typography variant="label">Workspace Name</Typography>
                </InputLabel>
                <Input
                    id="workspace-name"
                    placeholder="Eden"
                    {...register('workspaceName', {
                        required: true,
                    })}
                />
                {errors.workspaceName && (
                    <FormHelperText error={true} sx={{ mb: 2 }}>
                        Workspace name is required
                    </FormHelperText>
                )}
            </FormControl>

            <FormControl
                variant="standard"
                sx={{
                    display: 'flex',
                }}
            >
                <InputLabel shrink htmlFor="workspace-url">
                    <Typography variant="label">Workspace URL</Typography>
                    <Typography variant="Subtitle1">(optional)</Typography>
                </InputLabel>
                <Input
                    id="workspace-url"
                    placeholder="Example"
                    {...register('workspaceURL', {
                        required: false,
                    })}
                    startAdornment={
                        <Box
                            sx={{
                                display: 'flex',
                                alignSelf: 'baseline',
                                height: '3.3em',
                                padding: '14px 14px',
                                background: '#f8f9fc',
                                color: '#7e7e7e',
                                borderTopLeftRadius: '5px',
                                borderBottomLeftRadius: '5px',
                                border: '1px solid #eaeef5',
                                borderRightWidth: 0,
                            }}
                        >
                            www.{workspaceDomain}.com/
                        </Box>
                    }
                />
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
    )
}

export default SecondStep
