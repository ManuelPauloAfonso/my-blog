import { PostModel } from "@/type";

interface PostLayoutProps {
  post: PostModel;
  children: React.ReactNode;
}

export default function PostLayout({ post, children }: PostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto md:mt-10 mt-2">
      <header className="mb-8 border-b border-gray-600 pb-6 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold mb-2 text-[#FF6B01] sm:text-4xl lg:text-5xl leading-tight  ">
          {post.title}
        </h1>
        <p className="text-gray-400 text-base">{post.description}</p>
        <p className="text-base text-gray-500 mt-2">
          📅{" "}
          {new Date(post.postedAt).toLocaleDateString("pt-PT", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
          {" · "}✍️ {post.author}
        </p>
      </header>

      <div className="prose prose-lg prose-invert max-w-none leading-relaxed space-y-6 text-base text-justify">
        {children}
      </div>
    </article>
  );
}
