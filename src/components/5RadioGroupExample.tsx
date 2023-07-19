import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { useState } from "react";
  
  function ExampleRadioGroup() {
  
      const [value,setValue] = useState("")
      const [helperText,setHelperText] = useState("")
      const [error,setError] = useState(false)

      const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        if(value==="g4stly"){
            setHelperText("You're goddamn right!")
            setError(false)
        }
        else if(value==="not-g4stly"){
            setHelperText("SAY MY FUCKING NAME!")
            setError(true)
        }
        else{
            setHelperText("MAKE A FUCKING CHOICE!")
            setError(true)
        }
        event.preventDefault()
      }

      const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
      }

      return (
          <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
            <FormControl error={error}>
                <FormLabel>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SAY MY NAME!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</FormLabel>
                <RadioGroup onChange={handleRadioChange}>
                    <FormControlLabel label="G4stLy" value="g4stly" control={<Radio/>}/>
                    <FormControlLabel label="..." value="not-g4stly" control={<Radio/>}/>
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type="submit" variant="outlined">Submit</Button>
            </FormControl>
          </form>
          
      );
  }
  
  export default ExampleRadioGroup;
  