import { Stack,Divider } from '@mui/material'

function LessonStack() {
  return (
    <Stack 
    direction={{xs:"column",sm:"row", md:"row"}} // responsive design, cihaz çok küçükse alt alta büyükse yan yana gelsinler
    justifyContent="center"
    alignItems="center"
    spacing={{xs:1,sm:2,md:3}} // responsive design, cihaz büyüdükçe boşluk büyüyor
    divider={<Divider orientation='vertical' flexItem />}>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
    </Stack>
  )
}

export default LessonStack