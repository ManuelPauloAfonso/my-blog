import { Post, PostModel } from "@/type";
import glob from "fast-glob";

export default class Posts {
  static async findAll(): Promise<Post[]> {
    const postFilenames = await glob("*/page.mdx", {
      cwd: "./app/posts",
    });

    const posts = await Promise.all(
      postFilenames.map((filename) => this.importPost(filename))
    );

    return posts.sort((a, z) => +new Date(z.postedAt) - +new Date(a.postedAt));
  }

  private static async importPost(postFilename: string): Promise<Post> {
    const slug = postFilename.replace(/(\/page)?\.mdx$/, "");

    const mod = (await import(`../app/posts/${postFilename}`)) as any;

    const postModel = mod.post as PostModel;

    return {
      slug,
      ...postModel,
    };
  }
}
