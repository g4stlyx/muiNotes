import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"

import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

function LessonList() {
  return (
    <Stack>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Inbox Text with disabled padding"></ListItemText>
                </ListItemButton>
            </ListItem>            
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon> 
                    <ListItemText primary="Drafts Text"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>

        <Divider/>
        
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary="Inbox Text"></ListItemText>
                </ListItemButton>
            </ListItem>            
            <ListItem>
                <ListItemButton>
                    <ListItemText primary="Drafts Text"></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    </Stack>
  )
}

export default LessonList