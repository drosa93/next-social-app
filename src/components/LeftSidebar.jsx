/*import React from 'react'

export default function LeftSidebar() {
  return (
    <div>LeftSidebar</div>
  )
}*/

import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton
} from '@clerk/nextjs' ;
export default function sidebar(){
    return (
        <div className='flex flex-col gagp-4 p-3'>
            <Link href='/'>
                <FaXTwitter className='w=16 h-16' />
            </Link>
            <Link
                href='/'
                className='flex items-center p-3 hover:bg-gray-100 rounded-full-transition-all duration-200 gap-2 w-fit'
            >
                <HiHome className='w-7 h-7' />
                <span className='font-bold hidden xl:inline'>Home</span>
            </Link>
            <button className='w-48 h-9'>
                <SignedIn>
                  <SignOutButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </button>
        </div>
    );
}