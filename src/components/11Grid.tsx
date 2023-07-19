import { Box, Grid } from '@mui/material'

function LessonGrid() {
  return (
    <Box>
        <Grid container> {/* bir row */}
            <Grid xs={8}>8-Unit Space</Grid>
            <Grid xs={4}>4-Unit Space</Grid>
        </Grid>
        <Grid container>
            <Grid xs={12} sm={8}>Responsive</Grid>
            <Grid xs={12} sm={4}>Responsive</Grid>
        </Grid>
    </Box>
  )
}

export default LessonGrid