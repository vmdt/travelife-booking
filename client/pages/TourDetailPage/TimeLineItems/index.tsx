import { Box, VStack, Icon, Text, Stack, Divider } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { MdLocationOn } from 'react-icons/md';

// Define the props type for TimelineItem
interface TimelineItemProps {
  icon: IconType;
  title: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, title, isFirst, isLast }) => {
  return (
    <> 
      <Stack direction="row" align="center" spacing={4}>
        <VStack align="center">
          <Icon as={icon} color="red.500" boxSize={6} />
          {!isFirst && !isLast && (
            <Box width="1px" bg="gray.300" flex="1" />
          )}
        </VStack>
        <Text fontSize="md" fontWeight="medium">{title}</Text>
      </Stack>
      <Divider />
    </>
  );
};

// Main Timeline component
const Timeline: React.FC = () => {
  return (
    <Box borderLeft="2px" borderColor="gray.300" pl={6}>
      <TimelineItem icon={MdLocationOn} title="Discovery Whale Watch" isFirst />
      <TimelineItem icon={MdLocationOn} title="Old Fisherman's Wharf" />
      <TimelineItem icon={MdLocationOn} title="Cannery Row" />
      <TimelineItem icon={MdLocationOn} title="Monterey Bay National Marine Sanctuary" />
      <TimelineItem icon={MdLocationOn} title="Monterey Bay" />
      <TimelineItem icon={MdLocationOn} title="Arrive back at: Discovery Whale Watch" isLast />
    </Box>
  );
};

export default Timeline;
