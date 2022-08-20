import { Box, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/eden.png'

function Brand() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
            }}
        >
            <Box
                component="img"
                src={Logo}
                sx={{ height: 'auto', width: 30 }}
            />
            <Typography
                variant="h5"
                align="center"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                Eden
            </Typography>
        </Box>
    )
}

export default Brand
