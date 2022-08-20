import { Box, Typography } from '@mui/material'
import React from 'react'

function Header({ title, subtitle }) {
    return (
        <Box sx={{ mb: 5 }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    mb: 1,
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                    },
                }}
            >
                {title}
            </Typography>
            <Typography variant="subtitle1" align="center">
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header
