"use client";

type Props = {
  href: string;
  event: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event, ...params });
  window.gtag?.("event", event, params);
  if (event === "whatsapp_click") window.fbq?.("track", "Contact");
}

export function TrackedLink({ href, event, label, className, children }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => track(event, { label, page: window.location.pathname })}
    >
      {children}
    </a>
  );
}
