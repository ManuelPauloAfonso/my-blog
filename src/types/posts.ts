export interface PostModel {
  title: string;
  description: string;
  author: string;
  postedAt: string;
  category: string;
  readingTime: number;
}

export interface Post extends PostModel {
  slug: string;
}

export interface PostLink {
  slug: string;
  title: string;
}

export interface PostNavigation {
  newer?: PostLink;
  older?: PostLink;
}
