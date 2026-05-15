import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',

        primary: {
            main: '#bb86fc',
        },

        secondary: {
            main: '#ff79c6',
        },

        background: {
            default: '#121016',
            paper: '#1a1625',
        },

        text: {
            primary: '#f3eaff',
            secondary: '#c8b8db',
        },
    },
    typography: {
        fontFamily: '"Explora", cursive',
        fontSize: 40,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    userSelect: 'none',
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 240,
                    borderRight: '1px solid #2a2235',
                    background: 'linear-gradient(90deg, #191421 0%, #2a2235 50%, #191421 100%)',
                    color: '#f3eaff',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#d7aefb',
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: 35,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: '#f3eaff',
                    marginLeft: '10px',
                },
                primary: {
                    fontSize: '30px',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    margin: '2px 2px',

                    '&:hover': {
                        backgroundColor: '#2a2235',
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#2a2235',
                    marginTop: '15px',
                },
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#433755',
                    borderRadius: '8px',
                    padding: '4px',
                },
                '&:hover': {
                    backgroundColor: '#2a2235',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(90deg, #191421 0%, #2a2235 50%, #191421 100%)',
                    color: '#f3eaff',
                },
            },
        },
    },
})
