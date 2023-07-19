import { Breadcrumbs, Link, Stack } from "@mui/material"

function LessonBreadCrumb() {
  return (
    <Stack>
      <Breadcrumbs separator=">">
          <Link href="#" underline="hover">Home</Link>
          <Link href="#" underline="hover">Questions</Link>
          <Link href="#">Answers</Link>
      </Breadcrumbs>
      <Breadcrumbs separator=">" maxItems={2}>
          <Link href="#" underline="hover">Home</Link>
          <Link href="#" underline="hover">Questions</Link>
          <Link href="#">MaxItemFiller</Link>
          <Link href="#">MaxItemFiller</Link>
          <Link href="#">MaxItemFiller</Link>
          <Link href="#">Answers</Link>
      </Breadcrumbs>
    </Stack>
  )
}

export default LessonBreadCrumb