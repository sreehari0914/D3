import 
React from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { User, UserIcon } from 'lucide-react';
import { FlagIcon } from 'lucide-react';
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { SignedIn, SignedOut } from '@clerk/clerk-react';
function DashB() {
  return (

   
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
     <nav className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <FlagIcon className="h-8 w-8 text-black" />
          <h1 className="text-2xl font-bold">zen.fit</h1>
        </div>
        <div className="flex space-x-6">
          <a className="text-base clickcolor hover:text-gray-300" href="#">
            FITNESS
          </a>
          <a className="text-base hover:text-gray-300" href="#">
            CARE
          </a>
          <a className="text-base hover:text-gray-300" href="#">
            MIND
          </a>
          <a className="text-base hover:text-gray-300" href="#">
            GEAR
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-base hover:text-gray-300" href="#">
            KOCHI
          </a>
          <Button className="clickbutton text-black">GET APP</Button>
          <SignedIn>
          <UserButton />
          </SignedIn>
          <SignedOut>
          <UserIcon/>
          </SignedOut>
        </div>
      </nav>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total Hours Practiced</CardTitle>
          <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">32.5h</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Average Session Duration</CardTitle>
          <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">1h 15m</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Most Practiced Poses</CardTitle>
          <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 text-sm md:grid-cols-2">
            <li>1. Downward Dog</li>
            <li>2. Warrior I</li>
            <li>3. Tree Pose</li>
            <li>4. Childs Pose</li>
            <li>5. Cobra</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Progress Over Time</CardTitle>
          <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <LineChart className="w-full aspect-[2/1]" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Add Your Session</CardTitle>
          <PlusIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:gap-6">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="date">
                Date
              </Label>
              <Input id="date" required type="date" />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="duration">
                Duration
              </Label>
              <Input id="duration" placeholder="e.g. 1h 30m" required type="text" />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="pose">
                Pose
              </Label>
              <Select defaultValue="downward-dog">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a pose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downward-dog">Downward Dog</SelectItem>
                  <SelectItem value="warrior-i">Warrior I</SelectItem>
                  <SelectItem value="tree-pose">Tree Pose</SelectItem>
                  <SelectItem value="childs-pose">Childs Pose</SelectItem>
                  <SelectItem value="cobra">Cobra</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="notes">
                Notes
              </Label>
              <Textarea id="notes" placeholder="Add any notes here..." />
            </div>
            <Button size="lg">Add Session</Button>
          </form>
        </CardContent>
      </Card>
    </main>
   
  );
}

function ActivityIcon(props) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default DashB;