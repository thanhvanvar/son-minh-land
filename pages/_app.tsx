import "@/styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createPagesBrowserClient());
  
  return (
    <NextUIProvider>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </NextUIProvider>
  );
}
