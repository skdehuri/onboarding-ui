import { alpha, InputBase, styled } from '@mui/material'

export const Input = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 5,
        position: 'relative',
        border: '1px solid #eaeef5',
        // fontSize: 16,
        width: '100%',
        marginBottom: 20,
        padding: '14px 14px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(
                theme.palette.primary.main,
                0.25
            )} 0 0 0 0.1rem`,
            borderColor: theme.palette.primary.main,
        },
    },
    '& .MuiInputBase-inputAdornedStart': {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
    },
}))
