import { useAuth } from '../lib/auth'


export default function Home() {
  const auth=useAuth();

  return (
    <div>
    <main>
    <h1> BeatMap</h1>
    <p>
      Current user: <code>{auth?.user?.email}</code>
    </p>
        <button onClick={(e)=> auth.signinWithGitHub()}>Sign In</button>
        
        {auth?.user && (<button onClick={(e)=> auth.signout()}>Sign Out</button>)}
      </main>


    </div>
  )
}
