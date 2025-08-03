import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import path from 'path';

export interface Project {
  slug: string;
  title: string;
  description: string;
  published?: boolean;
  date?: string;
  url?: string;
  repository?: string;
  body: {
    code: string;
  };
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        published: data.published ?? true,
        date: data.date,
        url: data.url,
        repository: data.repository,
        body: {
          code: marked(content) as string,
        },
      } as Project;
    })
    .filter((project) => project.published)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  return projects;
}

export function getProject(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((project) => project.slug === slug);
}
