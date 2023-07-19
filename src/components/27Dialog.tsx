import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material"
import { useState } from "react"

function LessonDialog() {

    const [dialogOpen,setDialogOpen] = useState(false)

    /* for more variants of dialogs, check the mui website */
  return (
    <Stack>
        <Button onClick={()=>setDialogOpen(true)}>Open the dialog</Button>
        <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}>
            <DialogTitle>Which of them do you like?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Which one of the frontend technologies is your favorite?
                </DialogContentText>
                <DialogActions >
                    <Button onClick={()=>setDialogOpen(false)}>React</Button>
                    <Button>Angular</Button>
                    <Button>Vue</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    </Stack>
  )
}

export default LessonDialog