"use client";
import { SignInButton, useAuth } from "@clerk/nextjs";
import React from "react";

function SignIn() {
  const { isSignedIn } = useAuth();
//   console.log(isSignedIn);

  return <>{!isSignedIn && 
    <SignInButton>
    <button className="w-20 h-full p-2 font-bold rounded-md hover:bg-slate-400">
      Sign In
    </button>
  </SignInButton>
  }</>;
}

export default SignIn;
