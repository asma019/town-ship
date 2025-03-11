'use client';
import { useEffect } from 'react';

// Add TypeScript interface for Tawk_API with more specific types
declare global {
  interface Window {
    Tawk_API?: {
      [key: string]: any;
    };
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      // Tawk.to script
      var Tawk_API = window.Tawk_API || {};
      var Tawk_LoadStart = new Date();
      
      (function() {
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/67d01e3a80f6ba190ddb9261/1im2fc5of';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        if (s0 && s0.parentNode) {
          s0.parentNode.insertBefore(s1, s0);
        } else {
          document.head.appendChild(s1);
        }
      })();
    }
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToChat; 