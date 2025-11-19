import { Post } from "@/type";
import Link from "next/link";

interface FeaturedProps {
  posts: Post[];
}

const Featured = ({ posts }: FeaturedProps) => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Featured</h2>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col items-start gap-2 border-b border-gray-600 pb-4"
          >
            <h3 className="text-2xl font-bold text-[#FF6B01]">{post.title}</h3>
            <p className="text-gray-300">{post.description}</p>
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
