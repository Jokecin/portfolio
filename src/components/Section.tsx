'use client';

import { PropsWithChildren } from 'react';

export default function Section({ id, title, children }: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 gap-12 scroll-mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {title}
      </h2>
      <div className="w-full max-w-5xl prose prose-invert">
        {children}
      </div>
    </section>
  );
}
