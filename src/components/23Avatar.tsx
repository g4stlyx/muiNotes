import { Avatar, AvatarGroup, Stack } from "@mui/material";

function LessonAvatar() {
  return (
    <Stack spacing={10}>

        <Stack direction="row" spacing={10}>
            <AvatarGroup max={3}>
                <Avatar
                sx={{ marginRight: 10 }}
                src="https://randomuser.me/api/portraits/women/56.jpg"
                />
                <Avatar
                sx={{ marginRight: 10 }}
                src="https://randomuser.me/api/portraits/women/56.jpg"
                />
                <Avatar
                sx={{ marginRight: 10 }}
                src="https://randomuser.me/api/portraits/women/56.jpg"
                />
                <Avatar
                sx={{ marginRight: 10 }}
                src="https://randomuser.me/api/portraits/women/56.jpg"
                />
                <Avatar
                sx={{ marginRight: 10 }}
                src="https://randomuser.me/api/portraits/women/56.jpg"
                />                
                <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
            </AvatarGroup>
        </Stack>

        <Stack direction="row">
            <AvatarGroup>
                <Avatar
                variant="rounded"
                sx={{
                    marginRight: 10,
                    bgcolor: "primary.light",
                    width: 75,
                    height: 75,
                }}
                >
                Name
                </Avatar>
                <Avatar sx={{ bgcolor: "success.light", width: 75, height: 75 }}>
                g4
                </Avatar>
            </AvatarGroup>
        </Stack>
    </Stack>
  );
}

export default LessonAvatar;
