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
  Button
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
// import { AddIcon } from '@chakra-ui/icons'

const DashboardShell = ({ children }) => {
  //   <ChakraProvider resetCSS>
  const auth = useAuth();
  const router = useRouter();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="#191414"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline align="center">
          <Icon name="logo" size="24px" /> //to do
          <Link
            color="white"
            onClick={() => {
              router.push('/dashboard');
            }}
          >
            How it works
          </Link>
          <Link
            color="white"
            onClick={() => {
              router.push('/contribute');
            }}
          >
            Contribute
          </Link>
        </Stack>
        <Flex>
          <Link mr={4} color="white">
            Account
          </Link>
          <Avatar size="sm" src={auth.user.photoUrl} /> //src
        </Flex>
      </Flex>
      <Flex backgroundColor="#1DB954" p={8} height="100vh">
        <Flex
          //   justifyContent="center"
          maxWidth="800px"
          // alignItems="center"
          w="100%"
          ml="auto"
          mr="auto"
          direction="column"
        >


          {children}
        </Flex>
      </Flex>
    </Flex>
  );
  //   </ChakraProvider>
};

export default DashboardShell;
