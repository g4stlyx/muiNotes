import { Stack, Drawer, IconButton,Typography } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from 'react'

function LessonDrawer() {

    const [isOpen,setIsOpen] = useState(false)
    


    return (
        <Stack>
            <IconButton size="large" onClick={()=>setIsOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={isOpen} onClose={()=>setIsOpen(false)} anchor="left">
                <Stack width="250px" textAlign="center">
                    <Typography variant="h6" component="div">Left Panel</Typography>
                </Stack>
            </Drawer>
        </Stack>
    )
}

export default LessonDrawer