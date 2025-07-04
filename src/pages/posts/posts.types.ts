export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Props = {
  posts: Post[];
};