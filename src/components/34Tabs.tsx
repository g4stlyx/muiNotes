import { Tabs,Tab,TabList,TabPanel } from "@mui/joy"

function LessonTabs() {
  return (
    <Tabs defaultValue={0}>
        <TabList>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
        </TabList>
        <TabPanel value={0}> {/* for the content of tabs */}
            First Tab
        </TabPanel>
        <TabPanel value={1}>
            Second Tab
        </TabPanel>
        <TabPanel value={2}>
            Third Tab
        </TabPanel>
    </Tabs>
  )
}

export default LessonTabs