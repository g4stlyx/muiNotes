import { SpeedDial, SpeedDialAction, Stack, SpeedDialIcon } from '@mui/material'

import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"
import EditIcon from "@mui/icons-material/Edit"


function LessonSpeedDial() {
  return (
    <Stack>
        <SpeedDial icon={<SpeedDialIcon openIcon={<EditIcon />}/>}
        ariaLabel='Navigation'>
            <SpeedDialAction icon={<CopyIcon/>} tooltipTitle="Copy" tooltipOpen />
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" tooltipOpen />
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" tooltipOpen />
        </SpeedDial>
    </Stack>
  )
}

export default LessonSpeedDial