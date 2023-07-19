import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React,{ useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function LessonAccordion() {

    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (panel:string) => (event:React.SyntheticEvent,isExpanded:boolean)=>{
        setExpanded(isExpanded ? panel : false)
    }

    return (
    <Stack spacing={10}>
        <Stack>
            <Typography variant="h4" component="h4">Basic Accordion</Typography>
            <Typography variant="h6" component="h6"> multiple accordions can be expanded simultaneously</Typography>
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>First Part</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                earum error temporibus voluptas labore excepturi optio dolore facere
                cum ad nostrum architecto explicabo blanditiis quidem sapiente quam
                ea consequuntur ipsum?
            </AccordionDetails>
            </Accordion>

            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Second Part</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                earum error temporibus voluptas labore excepturi optio dolore facere
                cum ad nostrum architecto explicabo blanditiis quidem sapiente quam
                ea consequuntur ipsum?
            </AccordionDetails>
            </Accordion>

            <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Third Part (disabled)</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                earum error temporibus voluptas labore excepturi optio dolore facere
                cum ad nostrum architecto explicabo blanditiis quidem sapiente quam
                ea consequuntur ipsum?
            </AccordionDetails>
            </Accordion>
        </Stack>


        <Stack>
            <Typography variant="h4" component="h4">Advanced Accordion</Typography>
            <Typography variant="h6" component="h6">Only One Accordion can be expanded</Typography>
            
            <Accordion expanded={expanded==="panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>First Part</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                earum error temporibus voluptas labore excepturi optio dolore facere
                cum ad nostrum architecto explicabo blanditiis quidem sapiente quam
                ea consequuntur ipsum?
            </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded==="panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Second Part</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                earum error temporibus voluptas labore excepturi optio dolore facere
                cum ad nostrum architecto explicabo blanditiis quidem sapiente quam
                ea consequuntur ipsum?
            </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded==="panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Third Part</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                earum error temporibus voluptas labore excepturi optio dolore facere
                cum ad nostrum architecto explicabo blanditiis quidem sapiente quam
                ea consequuntur ipsum?
            </AccordionDetails>
            </Accordion>
        </Stack>
    </Stack>
  );
}

export default LessonAccordion;
