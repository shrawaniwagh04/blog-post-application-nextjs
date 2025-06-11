import { getPost, getPosts } from '@/serivces/post.services';
import PostPage from '@/views/PostPage/PostPage';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Props } from './id.types';
import type {Post} from './id.types';

export default function Post({ post }: Props) {
  return <PostPage post={post}/>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts : Post[] = await getPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params?.id)
  return {
    props: {
      post,
    },
  };
};

