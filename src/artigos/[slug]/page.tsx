import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtigoPorSlug } from "@/lib/artigos";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const artigo = getArtigoPorSlug(slug);

  if (!artigo) {
    return {};
  }

  return {
    title: artigo.titulo,
    description: artigo.conteudo.slice(0, 150),
  };
}

export default async function ArtigoPage({ params }: PageProps) {
  const { slug } = await params;

  const artigo = getArtigoPorSlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <article>
      <h1>{artigo.titulo}</h1>
      <p>{artigo.autor}</p>
      <div>{artigo.conteudo}</div>
    </article>
  );
}
