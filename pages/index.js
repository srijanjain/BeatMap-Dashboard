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

const Home =()=> {
  const auth = useAuth();

  return (
    <Flex
    as="main"
    direction="column"
    align="center"
    justify="center"
    h="100vh"
    // maxW="300px"
  >
      <head>
        <title>BeatMap</title>
      </head>

        <Image boxSize="100px" src="BeatMap.png" alt="BeatMap logo" />
        <Heading> BeatMap</Heading>
        {/* <Icon color="black" name="logo" size="100px"></Icon> */}
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? ( 

        <Button mt={4} size="sm" onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </Flex>

  );
}
 export default Home