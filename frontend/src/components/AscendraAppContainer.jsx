import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export function AscendraAppContainer({ children, drawerOpen }) {

    const drawerWidth = 240;

    return (
        <Box
            sx={{
                marginLeft: drawerOpen
                    ? `${drawerWidth}px`
                    : 0,

                transition: 'margin 0.8s ease',
                backgroundColor: '#121016',
            }}
        >
            <Toolbar/>

            {children}

        </Box>
    );
}
