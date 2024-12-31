"use client";

import { signOut } from "next-auth/react";

const Verify = () => {
  return (
    <div>
      <button onClick={() => fetch("/api/verify")}>Verify</button>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}

export default Verify;
