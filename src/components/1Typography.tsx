import { Typography } from "@mui/material";

function LessonTypography() {
  return (
    <div>
        <Typography variant="body1">
            Body1: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            eaque porro voluptatibus neque consequatur, earum rerum quam dolor
            sapiente laudantium minus sunt et non. Sunt ex laborum perspiciatis
            temporibus magni.
        </Typography> <br />
        <Typography variant="body2">
            Body2,smaller: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            eaque porro voluptatibus neque consequatur, earum rerum quam dolor
            sapiente laudantium minus sunt et non. Sunt ex laborum perspiciatis
            temporibus magni.
        </Typography><hr />
        
        <Typography  variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
        <Typography variant="h4">H4</Typography>
        <Typography variant="h5">H5</Typography>
        <Typography variant="h6">H6</Typography> <hr />

        <Typography variant="h2" component="h4">Appearance=H2, Tag in HTML= H4</Typography><hr />

        <Typography variant="h5" align="left">align=left</Typography>
        <Typography variant="h5" align="right">align=right</Typography><hr />

        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>



    </div>
  );
}

export default LessonTypography;
