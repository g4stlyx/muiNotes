import { CircularProgress, LinearProgress, Stack } from "@mui/material"

function LessonProgress() {
  // loading screen while fetching data
  return (
    <Stack sx={{marginLeft:"100px",marginTop:"100px"}} spacing={3}>
        <CircularProgress color="secondary"/> 
        <CircularProgress variant="determinate" value={50}/> 
        <CircularProgress variant="determinate" value={100}/>

        <LinearProgress color="success"/>
        <LinearProgress color="warning"/>
        <LinearProgress variant="determinate" value={50}/>
    </Stack>
  )
}

export default LessonProgress