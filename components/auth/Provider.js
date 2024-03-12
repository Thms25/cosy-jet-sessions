"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider({ children, session }) {
  return (
    <SessionProvider session={session} refetchInterval={60 * 60 * 24}>
      {children}
    </SessionProvider>
  );
}
