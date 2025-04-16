"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export function BannerAd() {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Clean up any existing ad content before inserting new ad
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-4 overflow-hidden">
      <div ref={adContainerRef}>
        <Script id="banner-ad" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : 'f1b2f3c43c108a8f113aab77adaa318e',
              'format' : 'iframe',
              'height' : 60,
              'width' : 468,
              'params' : {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="//www.highperformanceformat.com/f1b2f3c43c108a8f113aab77adaa318e/invoke.js"></scr' + 'ipt>');
          `}
        </Script>
      </div>
    </div>
  )
}

export function PopupAd() {
  return (
    <Script id="popup-ad" strategy="afterInteractive">
      {`
        (function() {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = '//pl26391902.profitableratecpm.com/6b/ad/0a/6bad0ae974de26c2d6f03d3ae407dba7.js';
          document.head.appendChild(script);
        })();
      `}
    </Script>
  )
}

// Combined component for easy inclusion
export default function AdUnits() {
  return (
    <>
      <BannerAd />
      <PopupAd />
    </>
  )
}
