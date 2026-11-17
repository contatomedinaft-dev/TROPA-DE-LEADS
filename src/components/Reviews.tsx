import { reviews } from "@/content/reviews";
import { GOOGLE_PROFILE } from "@/lib/site";

const Stars = ({ n }: { n: number }) => (
  <span className="text-yellow-500" role="img" aria-label={`${n} de 5 estrelas`}>
    {"★".repeat(n)}
    <span className="text-slate-300">{"★".repeat(5 - n)}</span>
  </span>
);

export function Reviews() {
  const has = reviews.length > 0;
  return (
    <section className="flex min-h-[70vh] items-center py-24" aria-labelledby="avaliacoes">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 id="avaliacoes" className="text-3xl font-bold lg:text-4xl">O que dizem sobre a Tropa de Leads</h2>
          <p className="mt-4 text-lg text-slate-600">Avaliações de clientes no Perfil da Empresa no Google.</p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 shadow-sm">
            <span className="text-4xl font-bold text-slate-950">5,0</span>
            <span className="text-2xl text-yellow-500" aria-hidden>★★★★★</span>
          </div>
        </div>

        {has && (
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.author + r.text.slice(0, 20)} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
                <Stars n={r.stars} />
                <blockquote className="mt-5 flex-grow text-lg leading-relaxed text-slate-700">“{r.text}”</blockquote>
                <p className="mt-6 font-semibold text-slate-950">{r.author}</p>
                <p className="text-sm text-slate-500">Avaliação no Google{r.when ? ` · ${r.when}` : ""}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 text-center">
          <a
            href={GOOGLE_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-blue-700 px-8 py-4 font-bold text-white transition hover:bg-blue-600"
          >
            {has ? "Ver todas as avaliações no Google" : "Ver nosso perfil no Google"}
          </a>
        </div>
      </div>
    </section>
  );
}
