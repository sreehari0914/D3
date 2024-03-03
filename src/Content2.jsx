/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wTXYY564boY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import './Home.css'
import { SignInButton, UserButton } from "@clerk/clerk-react"
export default function Component() {
  return (
    
    <div className="background-container">
      <div className="background-image"></div>
    <div className="content  h-100 w-screen object-contain ">
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <FlagIcon className="h-8 w-8 text-black" />
          <h1 className="text-2xl font-bold">zen.fit</h1>
        </div>
        <div className="flex space-x-6">
          <a className="text-base clickcolor hover:text-gray-300" href="/dashboard">
            FITNESS
          </a>
          <a className="text-base hover:text-gray-300" href="/dashboard">
            CARE
          </a>
          <a className="text-base hover:text-gray-300" href="/dashboard">
            MIND
          </a>
          <a className="text-base hover:text-gray-300" href="/dashboard">
            GEAR
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-base hover:text-gray-300" href="#">
            KOCHI
          </a>
          <Button className="clickbutton text-black">GET APP</Button>
          <SignInButton mode="modal" redirectUrl="/dashboard"/>
          <UserIcon className="h-6 w-6 text-white" />
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h2 className="text-6xl font-bold mb-4">
          WE ARE <span className="clickcolor">ZEN</span>
        </h2>
        <p className="text-xl mb-6">A fitness movement that is worth breaking a sweat for</p>
        <Button className="clickbutton text-black">EXPLORE ZENPASS</Button>
       
        <ArrowDownIcon className="absolute bottom-4 h-6 w-6 text-white" />
        
      </div>
     
    </div>
    </div>
    
   
  );
}
function ArrowDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    )
  }
  
  
  function FlagIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
 )
}