import { Link, Stack } from "@mui/material"

function LessonLink() {
  return (
    <Stack>
        <Link href="https://google.com">This is obviously a link.</Link>
        <Link href="https://google.com" color="error">This is obviously a link.</Link>
        <Link href="https://google.com" variant="body2">This is obviously a link.</Link>
        <Link href="https://google.com" underline="none">This is obviously a link.</Link>
        <Link href="https://google.com" underline="hover">This is obviously a link with a special hover property.</Link>
        <Link href="https://google.com" component="button" underline="hover" onClick={console.log("g4")}>This is obviously a link.</Link>
    </Stack>
  )
}

export default LessonLink