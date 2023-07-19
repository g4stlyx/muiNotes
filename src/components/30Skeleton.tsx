import {useState} from "react"
import {Stack,Skeleton} from "@mui/material"



function LessonSkeleton() {
    //loading screen while fetching data
  
    const [loading,setLoading] = useState(true)

    return (
        <Stack>
            {loading ? (
                <Skeleton 
                width={250}
                height={145}
                animation="wave"
                />
            ) : (
                <img 
                src="https://source.unsplash.com/random/256*144"
                alt="random image"
                width={250}
                height={145}
                />
                // bu yüklenene kadar bunun iskeletini,silüteini gösteriyor
            )


            }
        </Stack>
  )
}

export default LessonSkeleton