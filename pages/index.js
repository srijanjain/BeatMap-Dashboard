import {
  Button,
  Code,
  Heading,
  Text,
  Image,
  Icon,
  Box,
  Flex
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <head>
        <title>BeatMap</title>
      </head>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        maxW="300px"
      >
        <Image boxSize="sm" src="BeatMap.png" alt="BeatMap logo" />
        <Heading> BeatMap</Heading>
        {/* <Icon color="black" name="logo" size="100px"></Icon> */}
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </Flex>
    </div>
  );
}
