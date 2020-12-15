import { FaGithub } from 'react-icons/fa';
import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Image,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="#191414"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Stack spacing={4} isInline color="whiteAlpha.500">
          <Image width="50px" src="/static/beatmap_w.png" alt="BeatMap logo white" />
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
              router.push('/app');
            }}
          >
            How it works
          </Link>
          <Link
            color="white"
            onClick={() => {
              router.push('/app');
            }}
          >
            Contribute
          </Link>
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.50">
        <Flex
          justifyContent="center"
          maxWidth="800px"
          alignItems="center"
          width="100vh"
          ml="auto"
          mr="auto"
        >
          <Breadcrumb backgroundColor="#1DB954" p={8} height="100%" w="full">
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="black">About</BreadcrumbLink>
            </BreadcrumbItem>

            <Heading color="White">About</Heading>
            <Box
              backgroundColor="white"
              borderRadius="8px"
              p={8}
              w="full"
              display="block"
            >
              <Heading size="lg" pb={4} fontSize="lg" fontWeight="bold">
                Love music? Try BeatMap.
              </Heading>
              
                <Flex flexDirection="column" p={8}>
                  <AspectRatio w="full" mb={2}>
                  <iframe
    title="naruto"
    src="https://www.youtube.com/embed/f49FlCwZRXU"
    allowFullScreen
  />

                  </AspectRatio>

                  <Flex>
                    <Button
                      isFullWidth={true}
                      variant="solid"
                      m={4}
                      size="md"
                      color="black"
                      as="a"
                      href="https://drive.google.com/file/d/1guP7KzjojV6Bqi4blgW9pNuCVZEYcsRx/view?usp=sharing"
                    >
                      Whitepaper
                    </Button>
                    <Button
                      isFullWidth={true}
                      m={4}
                      as="a"
                      leftIcon={<FaGithub />}
                      href="https://github.com/srijanjain/BeatMap-Dashboard"
                    >
                      GitHub
                    </Button>
                  </Flex>
                  <Button
                    variant="solid"
                    size="lg"
                    backgroundColor="#1DB954"
                    color="white"
                    isFullWidth={true}
                    onClick={(e) => router.push('/app')}
                  >
                    Get Started
                  </Button>
                </Flex>
          
            </Box>
          </Breadcrumb>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
