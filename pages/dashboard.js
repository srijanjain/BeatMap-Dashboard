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
  import HowItWorks from '@/components/HowItWorks';
  
  const Dashboard =()=> {
    const auth = useAuth();

    if (!auth.user){
        return 'Loading...'
    }
    return <HowItWorks />;
  }

  
  export default Dashboard