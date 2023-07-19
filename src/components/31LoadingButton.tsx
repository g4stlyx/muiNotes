import { LoadingButton } from "@mui/lab"
import { Stack } from "@mui/material"
import { useState } from "react"

function LessonLoadingButton() {
  const [value,setValue] = useState(false)
  
  return (

    // bir butona bir kere basılmasını sağlıyor

    <Stack spacing={3} direction="row">
        <LoadingButton loading>Submit</LoadingButton>
        <LoadingButton loading variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="contained">Submit</LoadingButton>

        <LoadingButton onClick={()=>setValue(true)} loading={value} variant="outlined">Click</LoadingButton>

    </Stack>
  )
}

export default LessonLoadingButton