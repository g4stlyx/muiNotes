import { Stack,Badge } from '@mui/material'
import MailIcon from "@mui/icons-material/Mail"

function LessonBadge() {
  return (
    <Stack direction="row" spacing={5}
    sx={{marginTop:"50px",marginLeft:"50px"}}>
        
        <Badge badgeContent={50} color="secondary">
            <MailIcon />
        </Badge>

        <Badge badgeContent={50} color="secondary" max={40}>
            <MailIcon />
        </Badge>

        <Badge badgeContent={50} color="secondary" anchorOrigin={{
            vertical:"bottom",horizontal:"left"
        }}>
            <MailIcon />
        </Badge>

        
    </Stack>
  )
}

export default LessonBadge