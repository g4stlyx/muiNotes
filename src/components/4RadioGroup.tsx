import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function LessonRadioGroup() {

    const [value,setValue] = useState("")

    return (
        <FormControl>
        <FormLabel color="error">What is your salary expectancy?</FormLabel>
        <RadioGroup row name="expectedSalary" value={value} onChange={e=>setValue(e.target.value)}>
            <FormControlLabel
            label="2000$"
            value="2000"
            control={<Radio color="error" />}
            ></FormControlLabel>
            <FormControlLabel
            label="3000$"
            value="3000"
            control={<Radio color="error" />}
            ></FormControlLabel>
            <FormControlLabel
            label="4000$"
            value="4000"
            control={<Radio color="error" />}
            ></FormControlLabel>
        </RadioGroup>
        <FormHelperText>HelperText</FormHelperText>
        </FormControl>
    );
}

export default LessonRadioGroup;
