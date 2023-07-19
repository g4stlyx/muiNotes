import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
function LessonTimeline() {
  return (
    <div>
        <Timeline>
            <TimelineItem> 
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem> 
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem> 
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem> 
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

export default LessonTimeline