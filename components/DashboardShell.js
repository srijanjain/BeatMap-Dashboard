import { useAuth } from '@/lib/auth';
import { Avatar, Flex, Image, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
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
          <Image width="50px" src="/static/beatmap_w.png" alt="BeatMap logo" />
          <Link
            color="white"
            onClick={() => {
              router.push('/');
            }}
          >
            About
          </Link>
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
      <Flex backgroundColor="#1DB954" p={8} height="100%">
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
