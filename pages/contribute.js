import Contribute from '@/components/Contribute';
import { useAuth } from '@/lib/auth';
  
  const contribute =()=> {
    const auth = useAuth();

    if (!auth.user){
        return 'Loading...'
    }
    return <Contribute />;
  }
  
  export default contribute