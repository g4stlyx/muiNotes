import { Alert, AlertTitle, Stack } from "@mui/material"

function LessonAlert() {
  return (
    <Stack padding={1} spacing={1}>
        <Alert>Success Alert (default)</Alert>
        <Alert severity="error">Error Alert</Alert>
        <Alert severity="warning">Warning Alert</Alert>
        <Alert severity="info">Info Alert</Alert>

        <Alert severity="error">
            <AlertTitle>Error Alert Title</AlertTitle>
            Alert with a title on it
        </Alert>
    </Stack>
  )
}

export default LessonAlert