// import Contribute from '@/components/Contribute';
import Contribute from '@/components/Contribute';
import { useAuth } from '@/lib/auth';
import React from 'react';
  
  const contribute =()=> {
    const auth = useAuth();

    if (!auth.user){
        return 'Loading...'
    }
    return <Contribute />;
  }
  
  export default contribute