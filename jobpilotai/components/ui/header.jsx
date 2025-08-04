// components/ui/header.js (or .tsx)
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import Button from '/ui/button';

function Header() {
  return (
    <header className="flex justify-end p-4">
      <nav>
        <Link href='/'>
          <Image
          src ="/logo3.png" alt ="JobPilot AI Logo" width={50} height={50} className="h-20 py-1 w-auto object-contain"
          />
        </Link>

      <div>
        <SignedIn>
          <Link>
            <Button></Button>
          </Link>
        </SignedIn>
      </div>  
      </nav>


      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

export default Header;
