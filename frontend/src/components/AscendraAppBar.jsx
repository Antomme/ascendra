import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function AscendraAppBar({ drawerOpen, onDrawerOpen }) {
    const drawerWidth = 240;
    return (
        <AppBar style={{ display: 'flex' }} color="primary">
            <Toolbar sx={{ position: 'relative' }}>
                <IconButton sx={{ position: 'absolute', left: 8 }} onClick={onDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit"
                    sx={{
                        position: 'absolute',
                        left: drawerOpen
                            ? `calc(50% + ${drawerWidth / 2}px)`
                            : '50%',
                        transform: 'translateX(-50%)',
                        transition: 'left 0.8s ease',
                    }}>
                    Ascendra
                </Typography>
            </Toolbar>
        </AppBar>
    );
}