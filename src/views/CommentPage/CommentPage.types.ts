export interface CommentPageProps {
    comment : Comment[]
} 

type Comment={
    postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
