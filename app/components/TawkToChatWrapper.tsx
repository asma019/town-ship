'use client';

import dynamic from 'next/dynamic';

// Dynamically import TawkToChat with no SSR to avoid window is not defined errors
const TawkToChat = dynamic(() => import('./TawkToChat'), { ssr: false });

export default function TawkToChatWrapper() {
  return <TawkToChat />;
} 