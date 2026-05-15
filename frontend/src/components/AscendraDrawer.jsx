import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { mainListItems } from '../listitems.jsx';

export function AscendraDrawer({ open, onDrawerClose }) {


    return (

        open &&
        (<div>
            <Drawer variant="permanent">
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={onDrawerClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Divider>Ascendra</Divider>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
        </div>)
    );
}