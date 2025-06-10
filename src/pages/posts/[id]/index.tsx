import PostPage from '@/views/PostPage/PostPage';
import { GetStaticPaths, GetStaticProps } from 'next';

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <PostPage post={post}/>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));


  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

