import { Card, CardMedia, CardContent, Typography, CardActions, Button, Stack } from '@mui/material'

function LessonCard() {
  return (
    <Stack direction="row" spacing={3} textAlign="center" justifyContent="center">
        <Card sx={{width:"350px"}}>
            <CardMedia component="img" height="150"
            image="https://source.unsplash.com/random"
            />
            <CardContent>
                <Typography variant="h5" component="div">Title</Typography>
                <Typography variant="body2" component="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate provident earum, ipsa, sit omnis soluta amet placeat, ratione aperiam deserunt iste explicabo quo officia ipsum perspiciatis minima neque architecto illum.</Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
                <Button sx={{width:"100px"}} color="error" variant="contained">Reset</Button>
                <Button sx={{width:"100px"}} color="success" variant="contained">Save</Button>
            </CardActions>
        </Card>
        <Card sx={{width:"350px"}}>
            <CardMedia component="img" height="150"
            image="https://source.unsplash.com/random"
            />
            <CardContent>
                <Typography variant="h5" component="div">Title</Typography>
                <Typography variant="body2" component="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate provident earum, ipsa, sit omnis soluta amet placeat, ratione aperiam deserunt iste explicabo quo officia ipsum perspiciatis minima neque architecto illum.</Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
                <Button sx={{width:"100px"}} color="error" variant="contained">Reset</Button>
                <Button sx={{width:"100px"}} color="success" variant="contained">Save</Button>
            </CardActions>
        </Card>
        <Card sx={{width:"350px"}}>
            <CardMedia component="img" height="150"
            image="https://source.unsplash.com/random"
            />
            <CardContent>
                <Typography variant="h5" component="div">Title</Typography>
                <Typography variant="body2" component="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate provident earum, ipsa, sit omnis soluta amet placeat, ratione aperiam deserunt iste explicabo quo officia ipsum perspiciatis minima neque architecto illum.</Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
                <Button sx={{width:"100px"}} color="error" variant="contained">Reset</Button>
                <Button sx={{width:"100px"}} color="success" variant="contained">Save</Button>
            </CardActions>
        </Card>
    </Stack>
  )
}

export default LessonCard