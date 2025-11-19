import { PostModel } from "@/type";

interface PostLayoutProps {
  post: PostModel;
  children: React.ReactNode;
}

export default function PostLayout({ post, children }: PostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto py-10">
      <header className="mb-8 border-b border-gray-600 pb-6">
        <h1 className="text-4xl font-bold mb-2 text-[#FF6B01]">{post.title}</h1>
        <p className="text-gray-400">{post.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          📅{" "}
          {new Date(post.postedAt).toLocaleDateString("pt-PT", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
          {" · "}✍️ {post.author}
        </p>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">{children}</div>
    </article>
  );
}
