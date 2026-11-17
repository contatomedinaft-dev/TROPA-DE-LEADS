"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA4 = process.env.NEXT_PUBLIC_GA4_ID;
const GTM = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const KEY = "tdl-consent";

// Só carrega rastreadores depois do aceite (LGPD). Sem IDs configurados, não mostra nada.
export function Analytics() {
  const enabled = Boolean(GA4 || GTM || PIXEL);
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "granted" || v === "denied") setConsent(v);
    } catch {}
  }, []);

  if (!enabled) return null;

  const choose = (v: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setConsent(v);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          {GTM && (
            <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM}');`}</Script>
          )}
          {GA4 && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} strategy="afterInteractive" />
              <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4}');`}</Script>
            </>
          )}
          {PIXEL && (
            <Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`}</Script>
          )}
        </>
      )}
      {consent === null && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-200 shadow-2xl"
        >
          <p>Usamos cookies de medição para entender como o site é usado e melhorar a experiência. Você pode aceitar ou recusar.</p>
          <div className="mt-3 flex gap-3">
            <button onClick={() => choose("granted")} className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500">Aceitar</button>
            <button onClick={() => choose("denied")} className="rounded-full border border-slate-600 px-4 py-2 hover:bg-slate-800">Recusar</button>
          </div>
        </div>
      )}
    </>
  );
}
