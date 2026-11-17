export type Review = {
  author: string;
  text: string;
  /** de 1 a 5 */
  stars: number;
  /** ex.: "há 2 meses" ou "outubro de 2026" (como aparece no Google) */
  when?: string;
};

// Cole aqui APENAS avaliações reais do Perfil da Empresa no Google,
// com o texto exatamente como foi publicado. Nada deve ser inventado ou editado.
// Exemplo:
// { author: "Nome Sobrenome", stars: 5, when: "há 1 mês", text: "Texto da avaliação." },
export const reviews: Review[] = [];
