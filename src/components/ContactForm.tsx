"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { SITE, whatsappUrl } from "@/lib/site";
import { track } from "./TrackedLink";

// Sem backend ainda: o formulário monta a mensagem e abre o WhatsApp. Nada é guardado em servidor.
export function ContactForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get("nome") || "").trim().slice(0, 100);
    const empresa = String(f.get("empresa") || "").trim().slice(0, 100);
    const whats = String(f.get("whatsapp") || "").trim().slice(0, 30);
    const servico = String(f.get("servico") || "").slice(0, 100);
    const msg = String(f.get("mensagem") || "").trim().slice(0, 800);
    if (!nome || !whats) {
      setError("Informe seu nome e seu WhatsApp.");
      return;
    }
    setError("");
    const text = `Olá! Sou ${nome}${empresa ? `, da empresa ${empresa}` : ""}.\nServiço de interesse: ${servico || "não informado"}.\nMeu WhatsApp: ${whats}.${msg ? `\n\n${msg}` : ""}`;
    track("form_submit", { form: "contato", servico });
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  const input =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";
  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <label className="block text-sm font-medium text-slate-700">
        Nome*
        <input name="nome" required autoComplete="name" className={input} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Empresa
        <input name="empresa" autoComplete="organization" className={input} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        WhatsApp*
        <input name="whatsapp" type="tel" required autoComplete="tel" className={input} />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Serviço de interesse
        <select name="servico" className={input} defaultValue="">
          <option value="">Selecione</option>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Conte brevemente o que você precisa
        <textarea name="mensagem" rows={4} className={input} />
      </label>
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
      <button className="w-full rounded-full bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500">
        Enviar pelo WhatsApp
      </button>
      <p className="text-xs text-slate-500">
        Ao enviar, você abre uma conversa no WhatsApp com {SITE.name}. Usamos seus dados apenas para responder ao seu contato.
      </p>
    </form>
  );
}
