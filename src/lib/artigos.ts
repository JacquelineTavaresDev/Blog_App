import artigos from "@/data/artigos.json";

export function getArtigos() {
  return artigos;
}

export function getArtigoPorSlug(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}
