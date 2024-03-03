import React from 'react'
import { SignInButton, UserButton } from "@clerk/clerk-react"

import { useClerk } from "@clerk/clerk-react"
function Home() {
  return (
    <>
    <div>Home</div>
    <SignInButton mode="modal" redirectUrl="/dashboard"/>
    </>
  )
}

export default Home