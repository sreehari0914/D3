import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Home from './Home'
import DashB from './DashB'
import Product from './Product'
import { createClient } from "@supabase/supabase-js"
import Content from './Content'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import { SignIn, SignedOut } from "@clerk/clerk-react";
const supabase = createClient("https://uuarudjgyanlzastwiko.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YXJ1ZGpneWFubHphc3R3aWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MDYzODcsImV4cCI6MjAyNDk4MjM4N30.H-yYJEup7IszE9XoXpKg1pSuMaj4qX-kFVzIaLCzoBI");
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Content/>}/>
      <Route path="/test" element={<>
        <SignIn>
          <div>Add Signed In components</div>
        </SignIn>
        <SignedOut>
          <div>Back to Sign IN</div>
        </SignedOut>
      </>}/>
      <Route path="/dashboard" element={<DashB/>}/>
      <Route path="/product" element={<Product/>}/>
    </>
  )
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
