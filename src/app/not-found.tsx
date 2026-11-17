import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="mt-4 text-slate-400">O endereço não existe ou foi movido.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">Voltar ao início</Link>
        <Link href="/servicos/" className="rounded-full border border-slate-600 px-6 py-3 hover:bg-slate-800">Ver serviços</Link>
      </div>
    </section>
  );
}
