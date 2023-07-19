import {Paper,Accordion, AccordionSummary,AccordionDetails} from "@mui/material"
import { Masonry } from "@mui/lab"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

function LessonMasonry() {
// Masonry garip bir kutu sığdırma tekniği sağlıyor, lazım olabilir

    const heights = [150,30,90,70,90,100,150,30,50,60]

    return (
        <Masonry columns={3} spacing={2}>
            {
                heights.map((height,index)=>(
                    <Paper key={index}>
                        <Accordion sx={{minHeight:height}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                Accordion {index +1}
                            </AccordionSummary>
                            <AccordionDetails>
                                Contents
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                ))
            }
        </Masonry>
    )
}

export default LessonMasonry