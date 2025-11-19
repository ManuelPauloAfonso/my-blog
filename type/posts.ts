export interface PostModel {
  title: string;
  description: string;
  author: string;
  postedAt: string;
}

export interface Post extends PostModel {
  slug: string;
}
