import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import GoalIcon from '@mui/icons-material/AddTask';
import GanttIcon from '@mui/icons-material/EventNote';
import FlagIcon from '@mui/icons-material/Flag';
import KanbanIcon from '@mui/icons-material/ViewKanban';

export const mainListItems = (
  <div>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <GoalIcon />
        </ListItemIcon>
        <ListItemText primary="Goals" />
      </ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <FlagIcon/>
        </ListItemIcon>
        <ListItemText primary="Milestones" />
      </ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <KanbanIcon />
        </ListItemIcon>
        <ListItemText primary="Kanban Board" />
      </ListItemButton>
    </ListItem>

    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <GanttIcon/>
        </ListItemIcon>
        <ListItemText primary="Gantt Chart" />
      </ListItemButton>
    </ListItem>
  </div>
);