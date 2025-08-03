import Link from 'next/link';
import type { Project } from '@/lib/projects';

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-zinc-200 drop-shadow-orange duration-1000 group-hover:border-zinc-200 group-hover:text-primary">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
        </div>
        <h2 className="z-20 font-display font-medium text-xl text-zinc-200 duration-1000 group-hover:text-primary lg:text-3xl">
          {project.title}
        </h2>
        <p className="z-20 mt-4 text-sm text-zinc-200 duration-1000 group-hover:text-primary">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
