// components/ui/header.js (or .tsx)
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from './button';
import { GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { FileText } from 'lucide-react';


const Header=() => {
  return (

    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
    supports-[backdrop-filter]:bg-background/60">
    <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/">
       <Image 
       src="/logo3.png" 
       alt="JobPilotAI Logo"
        width={200} 
        height={50} 
       
       className="h-15 py-1 w-auto object-contain"
       />
      </Link>

      <div className='flex items-center space-x-2 md:space-x-4'>
        <SignedIn>
          <Link href={"/dashboard"}>
          <Button variant="outline">
            <LayoutDashboard className="h-4 w-4" />
            <span className="hidden md:block">Indrustry Insights</span>
            
          </Button>
          </Link>
        

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>
      <StarsIcon className="h-4 w-4" />
      <span className="hidden md:block">Growth Tools</span>
      <ChevronDown className="h-4 w-4" />
    </Button>
    </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Link href={"/resume"} className="flex items-center gap-2">
      <FileText className="h-4 w-4" />
      <span>Build Resume</span>
      
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
      
      <PenBox className="h-4 w-4" />
      Cover Letter
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={"/interview"} className="flex items-center gap-2">
      <GraduationCap className="h-4 w-4" />
      Interview Prep
      </Link>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>

<SignedOut>
  <SignInButton>
    <Button variant="outline">Sign In</Button>
  </SignInButton>
</SignedOut>
<SignedIn>
  <UserButton 
    appearance={{
      elements: {
        avatarBox: 'w-10 h-10',
        userButtonPopoverCard:"shadow-xl",
        userPreviewMainIdentifier:"font-semibold ",
      },
    }}
  />
</SignedIn>

      </div>

    </nav>
    
      
    </header>
  );
}

export default Header;
