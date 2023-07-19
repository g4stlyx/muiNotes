import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Stack } from "@mui/material";
import { useState } from "react";

function LessonCheckbox() {

    const [isAccepted,setIsAccepted] = useState(false)
    const [techs,setTechs] = useState<string[]>([])

    const handleTechsChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const index = techs.indexOf(event.target.value)
        if(index===-1){ //index -1 ise array içinde yok demektir,ekledik
            setTechs([...techs,event.target.value])
        } 
        else{
            setTechs(techs.filter((tech)=>tech!==event.target.value))
        } //index -1 değilse array içinde bu değer zaten varmış, kaldırdık
    }

    return (
        <Stack spacing={5} direction="row">
            <Box>
                <FormControl>
                    <FormLabel>Education Status</FormLabel>
                    <FormGroup>
                        <FormControlLabel disabled control={<Checkbox/>} label="Primary School" />
                        <FormControlLabel control={<Checkbox/>} label="Middle School" />
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="High School" />
                        <FormControlLabel control={<Checkbox/>} label="College" />
                        <FormControlLabel control={<Checkbox/>} label="University" />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel></FormLabel>
                    <FormGroup>
                        <FormControlLabel 
                        control={<Checkbox checked={isAccepted} 
                        onChange={(e)=> setIsAccepted(e.target.checked)}
                        />} 
                        label="I accept the terms of licence agreement." />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Which Technologies You Know in Frontend Development?</FormLabel>
                    <FormGroup>
                        <FormControlLabel value="react"
                        control={<Checkbox checked={techs.includes("react")} 
                        onChange={handleTechsChange}
                        />} 
                        label="React JS" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel value="angular"
                        control={<Checkbox checked={techs.includes("angular")} 
                        onChange={handleTechsChange}
                        />} 
                        label="Angular" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel value="vue"
                        control={<Checkbox checked={techs.includes("vue")} 
                        onChange={handleTechsChange}
                        />} 
                        label="Vue JS" />
                    </FormGroup>
                </FormControl>
            </Box>
        </Stack>
    );
}

export default LessonCheckbox;
