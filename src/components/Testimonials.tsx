import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="flex min-h-[70vh] items-center py-24" aria-labelledby="depoimentos">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2 id="depoimentos" className="text-center text-3xl font-bold lg:text-4xl">Depoimentos de clientes</h2>
        <p className="mt-4 text-center text-lg text-slate-600">Quem já trabalhou com a Tropa de Leads.</p>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
              <span className="text-yellow-500" role="img" aria-label="5 de 5 estrelas">★★★★★</span>
              <blockquote className="mt-5 flex-grow text-lg leading-relaxed text-slate-700">“{t.text}”</blockquote>
              <p className="mt-6 font-semibold text-slate-950">{t.author}</p>
              <p className="text-sm text-blue-700">{t.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
