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
  Image,
  Button
} from '@chakra-ui/react'
// import { AddIcon } from '@chakra-ui/icons'
import DashboardShell from './DashboardShell'

const HowItWorks = () => (
    <DashboardShell>
              <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="bgray.700" fontSize="sm" align="center">
                How it works
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
              <Heading color="White" mb={4}>
            How it works
          </Heading>
            <Box backgroundColor="white" mb={4} borderRadius="8px" p={8}>
              <Heading size="lg" pb={4} fontWeight="bold">
                Discover & create music wherever you go:
              </Heading>
              <Text pt={2} pb={2} fontSize="md" textAlign="justify">
                1. Login 👥 and head over to get started page.
              </Text>
              <Text pt={2} pb={2}>
                2. Give permission for your location 🛰️ and camera 📷
              </Text>
              <Text pt={2} pb={2}>
                3. Tap on any available BeatMap📍in mixed reality or use the
                discover button to find nearby BeatMaps.
              </Text>
              <Text pt={2} pb={2}>
                4. Listen to existing music 🎶 or create your own dope beats 💫
              </Text>
        
              <Image  mb={4} src="/static/instructions.png" alt="Instructions" />
              <Box alignContent="center">
              <Button variant="solid" colorScheme="green" size="lg" as="a" href="https://srijanja.in/beatmap" isFullWidth={true} >
                Get Started
              </Button>
              </Box>
            </Box>
    </DashboardShell>
)

export default HowItWorks