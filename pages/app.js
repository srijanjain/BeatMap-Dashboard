import {
  Button,
  Code,
  Heading,
  Text,
  Image,
  Icon,
  Box,
  Spacer,
  Flex
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';

const Home = () => {
  const auth = useAuth();
  const router = useRouter();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      // maxW="300px"
      backgroundColor="#1DB954"
    >
      <head>
        <title>BeatMap</title>
      </head>
      <Box backgroundColor="white" mb={4} borderRadius="8px" p={8}>
        <Image w="300px" src="/static/BeatMap.png" alt="BeatMap logo" />
        <Heading> BeatMap</Heading>
        {/* <Icon color="black" name="logo" size="100px"></Icon> */}
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Flex>
            <Button mt={4} size="sm" onClick={(e) => auth.signout()}>
              Sign Out
            </Button>
            <Spacer />
            <Button mt={4} size="sm" onClick={(e) => router.push('/dashboard')}>
              Go to DashBoard
            </Button>
          </Flex>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
            Sign In
          </Button>
        )}
      </Box>
    </Flex>
  );
};
export default Home;
