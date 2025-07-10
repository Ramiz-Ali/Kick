'use client';

import { useEffect } from 'react';
import { SupabaseProvider } from '../lib/supabase/provider';
import { initEmailJS } from '../lib/emailjs-init';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <html lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}