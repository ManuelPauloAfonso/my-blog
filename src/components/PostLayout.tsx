import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PostModel, PostNavigation } from "@/types";
import CoverArt from "./CoverArt";

interface PostLayoutProps {
  post: PostModel;
  slug: string;
  navigation: PostNavigation;
  children: React.ReactNode;
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function PostLayout({
  post,
  slug,
  navigation,
  children,
}: PostLayoutProps) {
  const { newer, older } = navigation;
  const postedAt = new Date(post.postedAt);

  return (
    <article className="mx-auto max-w-5xl">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]"
      >
        <a href="/posts" className="transition-colors hover:text-ink">
          Blog
        </a>
        <span aria-hidden="true">/</span>
        <span>{post.category}</span>
      </nav>

      <header className="mt-6 text-center sm:mt-8">
        <h1 className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:text-[10px]">
          <time dateTime={postedAt.toISOString()}>
            {dateFormatter.format(postedAt)}
          </time>
          <span aria-hidden="true">•</span>
          <span>{post.author}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <div className="mt-10 sm:mt-12">
        <CoverArt
          seed={slug}
          label={post.category}
          index={String(postedAt.getFullYear())}
        />
      </div>

      <div className="prose prose-neutral mx-auto mt-12 max-w-[680px] prose-headings:font-semibold prose-headings:tracking-tight prose-a:underline prose-a:underline-offset-4 prose-blockquote:border-l-2 prose-blockquote:border-ink prose-blockquote:font-normal prose-blockquote:not-italic prose-img:rounded-sm prose-p:text-left prose-p:leading-relaxed sm:mt-16 sm:prose-p:text-justify">
        {children}
      </div>

      {(newer || older) && (
        <nav
          aria-label="Post navigation"
          className="mx-auto mt-16 max-w-[680px] border-t border-line pt-6 sm:mt-20"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:pr-6">
              {newer && (
                <a
                  href={`/posts/${newer.slug}`}
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink">
                    <ArrowLeft
                      className="h-4 w-4"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Newer article
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
                      {newer.title}
                    </span>
                  </span>
                </a>
              )}
            </div>

            <div className="sm:border-l sm:border-line sm:pl-6 sm:text-right">
              {older && (
                <a
                  href={`/posts/${older.slug}`}
                  className="group flex flex-row-reverse items-start gap-3 text-right"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink">
                    <ArrowRight
                      className="h-4 w-4"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Older article
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-snug group-hover:underline group-hover:underline-offset-4">
                      {older.title}
                    </span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </nav>
      )}
    </article>
  );
}
