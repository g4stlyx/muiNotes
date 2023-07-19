import { InputAdornment, Stack, TextField } from "@mui/material"
import {useState} from "react"

function LessonTextField() {

    const [value,setValue] = useState("")

  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="Name" />
            <TextField label="Name" variant="outlined" />
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Color:error" color="error" />
            <TextField label="Color:secondary" color="secondary"/>
            <TextField label="Size" size="small" />
            <TextField label="Name" helperText="helperText"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Pwd" type="password" />
            <TextField label="disabled" disabled />
            <TextField label="readonly" InputProps={{readOnly:true}} />
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField 
            label="Price" 
            type="number"
            InputProps={{startAdornment:(
                <InputAdornment position="start">USD</InputAdornment>
            )}} />
            <TextField 
            label="Price" 
            type="number"
            InputProps={{endAdornment:(
                <InputAdornment position="end">USD</InputAdornment>
            )}} />
        </Stack>

        <Stack >
            <TextField 
            label="Pwd" 
            type="password" 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            helperText={!value ? "Please enter your password" : "Don't share your password with others"}
            />
        </Stack>

    </Stack>
  )
}

export default LessonTextField