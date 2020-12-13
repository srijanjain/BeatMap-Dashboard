import HowItWorks from '@/components/HowItWorks';
import { useAuth } from '@/lib/auth';
  
  const Dashboard =()=> {
    const auth = useAuth();

    if (!auth.user){
        return 'Loading...'
    }
    return <HowItWorks />;
  }
  
  export default Dashboard