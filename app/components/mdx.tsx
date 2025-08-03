import type * as React from 'react';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  // After migration from Contentlayer to @next/mdx, we now receive pre-processed HTML
  // The 'code' prop contains HTML string from marked() conversion in lib/projects.ts
  return (
    <div className="mdx">
      <div dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
}
