import {Paper,Stack} from "@mui/material"

function LessonPaper() {
    /* elevation:gölge,shadow */
  return (
    <Stack direction="row" spacing={3}>
        <Paper sx={{width:100,height:100}}/>
        <Paper sx={{width:100,height:100}} elevation={2}/> 
        <Paper sx={{width:100,height:100}} elevation={5}/>
        <Paper sx={{width:100,height:100}} variant="outlined"/>
        <Paper sx={{width:100,height:100}} variant="outlined" square/>
    </Stack>
  )
}

export default LessonPaper