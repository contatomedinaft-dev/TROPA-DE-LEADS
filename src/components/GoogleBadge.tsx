import { GOOGLE_PROFILE } from "@/lib/site";

// Nota 5,0 conferida no Perfil da Empresa no Google em 17/11/2026. Atualizar se mudar.
export function GoogleBadge() {
  return (
    <a
      href={GOOGLE_PROFILE}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full bg-white shadow-sm px-5 py-3 transition hover:shadow-md"
    >
      <span className="text-yellow-400" aria-hidden>★★★★★</span>
      <span className="text-base font-semibold text-slate-950">5,0 no Google</span>
      <span className="sr-only">Ver avaliações da Tropa de Leads no Google Maps</span>
    </a>
  );
}
