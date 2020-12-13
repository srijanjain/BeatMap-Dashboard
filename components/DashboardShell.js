import React from 'react';
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
  Button,
  useRadio
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
// import { AddIcon } from '@chakra-ui/icons'

const DashboardShell = ({ children }) => {
  //   <ChakraProvider resetCSS>
  const auth=useAuth();
  <Flex flexDirection="column">
    <Flex
      backgroundColor="#191414"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={8}
    >
      <Stack spacing={4} isInline align="center">
        <Icon name="logo" size="24px"/> //to do
        <Link color="white">How it works</Link>
        <Link color="white">Contribute</Link>
      </Stack>
      <Flex>
        <Link mr={4} color="white">
          Account
        </Link>
        <Avatar size="sm" src={auth.user.photoURL}/> //src
      </Flex>
    </Flex>
    <Flex backgroundColor="#1DB954" p={8} height="100vh">
      <Flex
        //   justifyContent="center"
        maxWidth="800px"
        alignItems="center"
        w="100%"
        ml="auto"
        mr="auto"
        direction="column"
      >
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">How it works</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading color="White" mb={4}>
          How it works
        </Heading>
        {children}
      </Flex>
    </Flex>
  </Flex>
  //   </ChakraProvider>
};

export default DashboardShell;
