import { Stack,AppBar,Toolbar,IconButton,Typography,Menu,MenuItem, Button} from "@mui/material"
import AppsIcon from "@mui/icons-material/Apps"
import React, { useState } from "react"

function LessonAppbar() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openControl = Boolean(anchorEl)

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
    setAnchorEl(event.currentTarget)
    console.log(event.currentTarget)
  }

  const handleClose = ()=>{
    setAnchorEl(null)
  }

  return (
    <AppBar>
        <Toolbar>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <Typography variant="h6">AppBar/ToolBar</Typography>
            <Stack direction="row" sx={{marginLeft:"auto"}}>
                <Button sx={{color:"white"}}>Home</Button>
                <Button sx={{color:"white"}}>About Us</Button>
                <Button sx={{color:"white"}}>Products</Button>
                <Button sx={{color:"white"}}>Prices</Button>
                <Button sx={{color:"white"}} onClick={handleClick}>Products on Sale</Button>
            </Stack>
            <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Books</MenuItem>
              <MenuItem onClick={handleClose}>Notebooks</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}

export default LessonAppbar