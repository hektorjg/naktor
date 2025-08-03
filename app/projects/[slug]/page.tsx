import { getAllProjects, getProject } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { Mdx } from '@/app/components/mdx';
import { Header } from './header';
import './mdx.css';

export const revalidate = 60;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const allProjects = getAllProjects();
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }


  return (
    <div className="min-h-screen bg-zinc-50">
      <Header project={project} />

      <article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
