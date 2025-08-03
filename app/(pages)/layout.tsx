import { Navigation } from '../components/nav';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-7xl pt-32">{children}</div>
      </main>
    </div>
  );
}
