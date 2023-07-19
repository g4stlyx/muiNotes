import { Tooltip,IconButton } from "@mui/material"

import DeleteIcon from "@mui/icons-material/Delete"

function LessonToolTip() {
  return (
        /* where will the tip be => placement, default bottom i think */
        <Tooltip
        sx={{margin:"100px"}}
        title="Delete"
        placement="top-end"> 
            <IconButton><DeleteIcon/></IconButton>
        </Tooltip>
  )
}

export default LessonToolTip