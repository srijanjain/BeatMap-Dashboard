import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button
} from '@chakra-ui/react';
// import { AddIcon } from '@chakra-ui/icons'
import DashboardShell from './DashboardShell';

const Contribute = () => (
  <DashboardShell>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="bgray.700" fontSize="sm">
          Contribute
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading color="White" mb={4}>
      Contribute
    </Heading>
    <Box backgroundColor="white" borderRadius="8px" p={8}>
      <Heading size="md" pb={4} fontSize="lg">
        We want to empower indie music artists and make music creation fun,
        simple and open source.
      </Heading>
      <Text pt={2} pb={2} fontSize="md" textAlign="justify">
        BeatMap started as course project at IIIT-Delhi and is now a part of a
        global movement to democratize music discovery and creation.
      </Text>
      <Text pt={2} pb={2} fontSize="md" textAlign="justify">
        We're currently in beta phase and are looking for cool developers,
        designers and musicians to help us take BeatMap forward.
      </Text>
      <Image width="500px" align="center" src="/static/techstack.png" alt="BeatMap techstack" />
      <Text pt={2} pb={2} fontSize="md" textAlign="justify">
        If you think you're up for a challenge to build an application
        which uses Mixed Reality and Machine Learning
        generation drop me a line at <a href="mailto:srijan18319@iiitd.ac.in">srijan18319[at]iiitd[dot]ac[dot]in</a>
      </Text>
      <Text>Check us out on GitHub:</Text>
      {/* //check formatting later */}
      <Button as="a" leftIcon={<FaGithub />} href="https://github.com/srijanjain/BeatMap-Dashboard">
        GitHub
      </Button>
    </Box>
  </DashboardShell>
);

export default Contribute;
