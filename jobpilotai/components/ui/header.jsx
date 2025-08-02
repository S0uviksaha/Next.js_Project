// components/ui/header.js (or .tsx)
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';

function Header() {
  return (
    <div className="flex justify-end p-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Header;
