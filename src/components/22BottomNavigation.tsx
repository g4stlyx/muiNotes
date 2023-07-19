import { BottomNavigation, BottomNavigationAction, Stack } from "@mui/material"

import RestoreIcon from "@mui/icons-material/Restore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocationIcon from "@mui/icons-material/LocationOn"

import {useState} from "react"

function LessonBottomNavigation() {

    const [value,setValue] = useState(0)

  return (
    <BottomNavigation 
    showLabels
    value={value}
    onChange={(event,newValue)=>{
        setValue(newValue)
    }}
    sx={{width:"98%",position:"absolute",bottom:"0"}}>
        <BottomNavigationAction icon={<RestoreIcon />} label="Past" />
        <BottomNavigationAction icon={<FavoriteIcon />} label="Liked"/>
        <BottomNavigationAction icon={<LocationIcon />} label="My Location"/>
    </BottomNavigation>
  )
}

export default LessonBottomNavigation