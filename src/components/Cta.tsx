import { TrackedLink } from "./TrackedLink";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton({
  message,
  label = "Falar no WhatsApp",
  where,
}: {
  message: string;
  label?: string;
  where: string;
}) {
  return (
    <TrackedLink
      href={whatsappUrl(message)}
      event="whatsapp_click"
      label={where}
      className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-bold text-white transition hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
    >
      {label}
    </TrackedLink>
  );
}

export function FinalCta({
  title,
  text,
  message,
  where,
}: {
  title: string;
  text: string;
  message: string;
  where: string;
}) {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
        <p className="mt-5 text-lg text-blue-100">{text}</p>
        <div className="mt-8">
          <WhatsAppButton message={message} where={where} />
        </div>
      </div>
    </section>
  );
}
