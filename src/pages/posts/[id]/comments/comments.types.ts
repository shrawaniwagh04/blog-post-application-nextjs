export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Props = {
  comment: Comment[];
};