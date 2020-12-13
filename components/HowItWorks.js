import React from 'react'
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react'
// import { AddIcon } from '@chakra-ui/icons'
import DashboardShell from './DashboardShell'

const HowItWorks = () => (
    <DashboardShell>
            <Box backgroundColor="white" mb={4} borderRadius="8px" p={8}>
              <Heading size="md" pb={4} fontSize="lg">
                Discover & create music wherever you go:
              </Heading>
              <Text pt={2} pb={2} fontSize="md" textAlign="justify">
                1. Login 👥 and head over to get started page
              </Text>
              <Text pt={2} pb={2}>
                2. Give permission for your location 🛰️ and camera 📷
              </Text>
              <Text pt={2} pb={2}>
                3. Tap on any available BeatMap📍in mixed reality or use the
                discover button to find nearby BeatMaps
              </Text>
              <Text pt={2} pb={2}>
                4. Listen to existing music 🎶 or create your own dope beats 💫
              </Text>
              <Button variant="solid" size="md">
                Get Started
              </Button>
            </Box>
    </DashboardShell>
)

export default HowItWorks