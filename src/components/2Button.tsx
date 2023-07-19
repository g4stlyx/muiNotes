import {Button,ButtonGroup,Stack} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

function LessonButton() {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant="text">Text Button</Button>
            <Button variant="outlined">Outlined Button</Button>
            <Button variant="contained">Contained Button</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">Primary Button</Button>
            <Button variant="contained" color="secondary">Secondary Button</Button>
            <Button variant="contained" color="success">Success Button</Button>
            <Button variant="contained" color="error">Error Button</Button>
            <Button variant="contained" color="warning">Warning Button</Button>
            <Button variant="contained" color="info">Info Button</Button>
        </Stack>

        <Stack spacing={2} direction="row" display="block">
            <Button variant="contained" color="error" size="small">Small Button</Button>
            <Button variant="contained" color="error" size="medium">Medium Button</Button>
            <Button variant="contained" color="error" size="large">Large Button</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary" startIcon={<AddIcon/>}>Add</Button>
            <Button 
            variant="contained" 
            color="secondary" 
            endIcon={<AddIcon/>}
            onClick={()=>{alert("clicked")}}
            >Add</Button>
        </Stack>

        {/* Button Group */}

        <Stack direction="row" spacing={2} display="block">
            <ButtonGroup variant="contained" color="info">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="info" orientation="vertical">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="info" orientation="vertical" size="small">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
        </Stack>


    </Stack>
  )
}

export default LessonButton