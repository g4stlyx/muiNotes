import { Button, IconButton, Snackbar, Stack } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close"
import React,{useState} from "react"

function LessonSnackbar() {

    const [openSnackbar,setOpenSnackbar] = useState(false)

    const handleClick = ()=>{
        setOpenSnackbar(true)
    }

    const action = (
        <React.Fragment>
            <Button color="secondary" size="large" 
            onClick={()=> setOpenSnackbar(false)}>
                Undo
            </Button>
            
            <IconButton sx={{color:"white"}} onClick={()=> setOpenSnackbar(false)}>
                <CloseIcon/>
            </IconButton>
            
        </React.Fragment>
    )

    return (
        <Stack>
            <Button onClick={handleClick}>Open the snackbar</Button>
            <Snackbar 
            open={openSnackbar}
            message="This is an error message!"
            action={action}
            onClose={()=>setOpenSnackbar(false)}
            autoHideDuration={3000}
            />
            
        </Stack>
    )
}

export default LessonSnackbar