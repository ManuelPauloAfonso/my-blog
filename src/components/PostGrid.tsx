import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Post } from "@/types";
import CoverArt from "./CoverArt";

interface PostGridProps {
  posts: Post[];
}

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function PostGrid({ posts }: PostGridProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const term = normalize(query.trim());

    if (!term) return posts;

    return posts.filter((post) =>
      normalize(
        `${post.title} ${post.description} ${post.category} ${post.author}`,
      ).includes(term),
    );
  }, [posts, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search articles</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            strokeWidth={1.75}
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="h-11 w-full appearance-none rounded-full border border-line bg-surface pl-11 pr-10 text-sm text-ink outline-none transition-colors placeholder:text-muted/80 focus:border-ink/40 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted transition-colors hover:bg-paper hover:text-ink"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          )}
        </label>

        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </p>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-12 min-[480px]:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {filteredPosts.map((post, index) => (
            <a
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block min-w-0"
            >
              <CoverArt
                seed={post.slug}
                label={post.category}
                index={String(index + 1).padStart(2, "0")}
              />

              <div className="mt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]">
                  {post.category} <span className="mx-1">•</span>{" "}
                  {post.readingTime} min read
                </p>

                <h2 className="mt-2 text-pretty text-lg font-medium leading-snug tracking-tight decoration-1 underline-offset-4 group-hover:underline sm:text-xl lg:text-[22px]">
                  {post.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-dashed border-line px-6 py-16 text-center">
          <p className="text-sm text-muted">
            No articles found for “{query}”.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] underline underline-offset-4"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
