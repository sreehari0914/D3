/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YTclh0o2iD9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Content2 from './Content2'
export default function Component() {
  return (
    <div>
    <Content2/>
    <div className="h-100 bg-[#0C0C0C]">
      
      <section className="text-center py-12">
        <h1 className="text-6xl font-bold text-white mb-4">cultpass</h1>
        <Button className="bg-white text-black">LEARN MORE</Button>
      </section>
      <div className="flex justify-center space-x-8 pb-12">
        <Card className="w-[300px] bg-black text-white">
          <CardContent>
            <img
              alt="Yoga Class"
              className="rounded-t-md"
              height="200"
              src="https://downloader.la/temp/[Downloader.la]-65e4295a94df9.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">cultpass ELITE</h3>
              <p>Unlimited access to</p>
              <p>• At-center group classes</p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] bg-black text-white">
          <CardContent>
            <img
              alt="Weightlifting"
              className="rounded-t-md"
              height="200"
              src="https://downloader.la/temp/[Downloader.la]-65e429b7a5680.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">cultpass PRO</h3>
              <p>Unlimited access to</p>
              <p>• All PRO gyms</p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[300px] bg-black text-white">
          <CardContent>
            <img
              alt="Home Workout"
              className="rounded-t-md"
              height="200"
              src="https://downloader.la/temp/[Downloader.la]-65e429b7a5680.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">cultpass HOME</h3>
              <p>Unlimited access to</p>
              <p>• At home workouts</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    
    </div>
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


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
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
