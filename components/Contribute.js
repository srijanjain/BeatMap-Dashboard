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
import { AddIcon } from '@chakra-ui/icons'
import DashboardShell from './DashboardShell'

const Contribute = () => (
    <DashboardShell>
            <Box backgroundColor="white" borderRadius="8px" p={8}>
              <Heading size="md" pb={4} fontSize="lg">
                We want to empower indie music artists and make music creation fun, simple and open source.
              </Heading>
              <Text pt={2} pb={2} fontSize="md" textAlign="justify">
              Hi, I'm Srijan and I currently maintain BeatMap. BeatMap started as course project at IIIT-Delhi and is now a part of a global movement to democratize music discovery and creation.
              </Text>
              <Text pt={2} pb={2} fontSize="md" textAlign="justify">
              We're currently in beta phase and are looking for cool developers, designers and musicians to help us take BeatMap forward. If you think you're up for a ride to learn and build an application which uses technologies like Mixed Reality (XR), Machine Learning and Dynamic Website generation drop me a line at buzzsj@gmail.com
              </Text>
            <Text>
            Check out BeatMap on GitHub:
            </Text>
              <Button variant="solid" size="md">
                GitHub
              </Button>
            </Box>
    </DashboardShell>
)

export default DashboardShell