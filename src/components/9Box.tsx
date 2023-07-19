import { Box } from '@mui/material'

function LessonBox() {
  return (
    <Box
    sx={{backgroundColor:"error.dark",
    width:"100px", height:"100px", color:"white",
    textAlign:"center", margin:"auto", padding:"20px",
    "&:hover":{backgroundColor:"error.light"}
    }}>
        g4
    </Box>
  )
}

export default LessonBox